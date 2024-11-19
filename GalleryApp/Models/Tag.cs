// Tag.cs
namespace GalleryApp.Models;
public class Tag
{
    public int TagId { get; set; }
    public string TagName { get; set; }
    public int CategoryId { get; set; } // Новое свойство для категории
    public Category Category { get; set; } // Навигационное свойство к Category
    public List<ItemTags> GalleryItems { get; set; } = new List<ItemTags>();
}