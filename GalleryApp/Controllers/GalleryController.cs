using GalleryApp.Data;
using GalleryApp.Models;
using GalleryApp.Models.Dtos;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace GalleryApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class GalleryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public GalleryController(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GalleryItemDto>>> GetGalleryItems()
        {
            var galleryItems = await _context.GalleryItems
                .Include(i => i.ItemImages)
                .Include(i => i.Tags)
                .ThenInclude(it => it.Tag)
                .ThenInclude(t => t.Category) // Добавлено для загрузки категории
                .ToListAsync();

            // ... (остальной код)

            var galleryItemDtos = galleryItems.Select(gi => new GalleryItemDto
            {
                ItemId = gi.ItemId,
                GalleryId = gi.GalleryId,
                Name = gi.Name,
                Description = gi.Description,
                Images = gi.ItemImages.Select(ii => ii.ImagePath).ToList(),
                Tags = gi.Tags.Select(it => new TagDto
                {
                    TagName = it.Tag.TagName,
                    CategoryName = it.Tag.Category.CategoryName
                }).ToList() // Теперь Tags - это List<TagDto>
            }).ToList();

            // ... (остальной код)

            return Ok(galleryItemDtos);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGalleryItem([FromForm] GalleryItemViewModel model)
        {
            var galleryItem = new GalleryItem { Description = model.Description, GalleryId = model.GalleryId };
            _context.GalleryItems.Add(galleryItem);
            await _context.SaveChangesAsync();

            if (model.Images != null)
            {
                foreach (var file in model.Images)
                {
                    var imagePath = await SaveImage(file, galleryItem.GalleryId, galleryItem.ItemId);
                    var itemImage = new ItemImage { ImagePath = imagePath, ItemId = galleryItem.ItemId, GalleryItem = galleryItem }; //  <- Обратите внимание на эту строку!
                    _context.ItemImages.Add(itemImage); // Явно добавляем в контекст
                }
            }
            

            if (!string.IsNullOrEmpty(model.TagNames))
            {
                foreach (var tagName in model.TagNames.Split(','))
                {
                    var tag = await _context.Tags.FirstOrDefaultAsync(t => t.TagName == tagName.Trim());
                    if (tag == null)
                    {
                        tag = new Tag { TagName = tagName.Trim() };
                        _context.Tags.Add(tag);
                        await _context.SaveChangesAsync(); // Сохраняем новый тег здесь
                    }

                    var itemTag = new ItemTags { ItemId = galleryItem.ItemId, TagId = tag.TagId };
                    _context.ItemTags.Add(itemTag);
                }
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGalleryItems), new { id = galleryItem.ItemId }, galleryItem);
        }


        private async Task<string> SaveImage(IFormFile file, int galleryId, int itemId)
        {
            var uploadsFolder = Path.Combine(_env.WebRootPath, "gallery", galleryId.ToString(), itemId.ToString());
            Directory.CreateDirectory(uploadsFolder);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return $"/gallery/{galleryId}/{itemId}/{fileName}";
        }




        [HttpPost("CreateGallery")]
        public async Task<IActionResult> CreateGallery(string galleryName)
        {
            var gallery = new Gallery { Name = galleryName };
            _context.Galleries.Add(gallery);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGalleries), new { id = gallery.GalleryId }, gallery);
        }

        [HttpDelete("{itemId}")]
        public async Task<IActionResult> DeleteGalleryItem(int itemId)
        {
            var galleryItem = await _context.GalleryItems
                .Include(gi => gi.ItemImages)
                .Include(gi => gi.Tags) // Include ItemTags
                .FirstOrDefaultAsync(gi => gi.ItemId == itemId);

            if (galleryItem == null)
            {
                return NotFound();
            }

            // Удаляем связи "многие ко многим"
            _context.ItemTags.RemoveRange(galleryItem.Tags);

            // Удаляем изображения
            _context.ItemImages.RemoveRange(galleryItem.ItemImages);

            // Удаляем сам элемент галереи
            _context.GalleryItems.Remove(galleryItem);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("Galleries")]
        public async Task<ActionResult<IEnumerable<Gallery>>> GetGalleries()
        {
            return await _context.Galleries.ToListAsync();
        }

        [HttpPost("ScanLocalGallery")]
        public async Task<IActionResult> ScanLocalGallery(string galleryPath)
        {
            if (!Directory.Exists(galleryPath))
            {
                return BadRequest("Указанный путь не существует.");
            }

            var galleryDirectories = Directory.GetDirectories(galleryPath);

            foreach (var galleryDirectory in galleryDirectories)
            {
                var galleryName = Path.GetFileName(galleryDirectory);
                var gallery = await _context.Galleries.FirstOrDefaultAsync(g => g.Name == galleryName);

                if (gallery == null)
                {
                    gallery = new Gallery { Name = galleryName };
                    _context.Galleries.Add(gallery);
                    await _context.SaveChangesAsync();
                }

                var itemDirectories = Directory.GetDirectories(galleryDirectory);

                foreach (var itemDirectory in itemDirectories)
                {
                    var itemName = Path.GetFileName(itemDirectory);
                    var galleryItem = new GalleryItem
                    {
                        Name = itemName,
                        Description = itemName,
                        GalleryId = gallery.GalleryId
                    };
                    _context.GalleryItems.Add(galleryItem);
                    await _context.SaveChangesAsync();

                    var xmlPath = Path.Combine(itemDirectory, "Text.xml");

                    if (System.IO.File.Exists(xmlPath))
                    {
                        try
                        {
                            var xml = XDocument.Load(xmlPath);
                            var descriptionElement = xml.Root?.Element("Description");
                            if (descriptionElement != null)
                            {
                                galleryItem.Description = descriptionElement.Value;
                            }

                            var tagsElement = xml.Root?.Element("Tags");
                            if (tagsElement != null)
                            {
                                var tagNodes = tagsElement.Elements("Tag");

                                foreach (var tagNode in tagNodes)
                                {
                                    var tagName = tagNode.Attribute("Name")?.Value;
                                    var categoryName = tagNode.Attribute("Category")?.Value;

                                    if (string.IsNullOrEmpty(tagName))
                                    {
                                        continue;
                                    }

                                    var category = await _context.Categories.FirstOrDefaultAsync(c => c.CategoryName == categoryName);
                                    if (category == null)
                                    {
                                        category = new Category { CategoryName = categoryName };
                                        _context.Categories.Add(category);
                                        await _context.SaveChangesAsync();
                                    }

                                    var tag = await _context.Tags.FirstOrDefaultAsync(t => t.TagName == tagName);
                                    if (tag == null)
                                    {
                                        tag = new Tag { TagName = tagName, CategoryId = category.CategoryId };
                                        _context.Tags.Add(tag);
                                        await _context.SaveChangesAsync();
                                    }

                                    _context.ItemTags.Add(new ItemTags { ItemId = galleryItem.ItemId, TagId = tag.TagId });
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"Ошибка чтения XML: {ex.Message}");
                        }
                    }

                    var imageFiles = Directory.GetFiles(itemDirectory, "*.jpg");
                    string mainImagePath = null;
                    if (imageFiles.Length > 0)
                    {
                        mainImagePath = imageFiles.OrderBy(f => f).FirstOrDefault();
                        if (mainImagePath != null)
                        {
                            mainImagePath = Path.GetRelativePath(galleryPath, mainImagePath);
                        }
                    }

                    foreach (var imageFile in imageFiles)
                    {
                        var relativePath = Path.GetRelativePath(galleryPath, imageFile);
                        _context.ItemImages.Add(new ItemImage { ItemId = galleryItem.ItemId, ImagePath = relativePath, GalleryItem = galleryItem });
                    }

                    await _context.SaveChangesAsync();
                }
            }

            return Ok();
        }
    }
}