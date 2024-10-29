// Gallery.cs
namespace GalleryApp.Models;
public class Gallery
{
    public int GalleryId { get; set; }
    public string Name { get; set; }
    public List<GalleryItem> GalleryItems { get; set; } = new List<GalleryItem>(); // Инициализируем список
}