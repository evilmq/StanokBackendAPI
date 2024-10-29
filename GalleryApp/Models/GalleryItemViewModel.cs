// GalleryItemViewModel.cs
namespace GalleryApp.Models;
public class GalleryItemViewModel
{
    public int GalleryId { get; set; }
    public string Description { get; set; }
    public List<IFormFile> Images { get; set; }
    public string TagNames { get; set; }
}