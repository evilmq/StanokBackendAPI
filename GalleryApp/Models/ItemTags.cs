// ItemTags.cs
namespace GalleryApp.Models;
public class ItemTags
{
    public int ItemId { get; set; }
    public GalleryItem GalleryItem { get; set; }
    public int TagId { get; set; }
    public Tag Tag { get; set; }
}