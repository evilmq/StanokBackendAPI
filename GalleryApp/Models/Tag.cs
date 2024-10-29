// Tag.cs
namespace GalleryApp.Models;
public class Tag
{
    public int TagId { get; set; }
    public string TagName { get; set; }
    public List<ItemTags> GalleryItems { get; set; } = new List<ItemTags>();

}