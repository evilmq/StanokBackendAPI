// ItemImage.cs
using System.ComponentModel.DataAnnotations;

namespace GalleryApp.Models;
public class ItemImage
{
    [Key]
    public int ImageId { get; set; }
    public int ItemId { get; set; }
    public string ImagePath { get; set; }
    public GalleryItem GalleryItem { get; set; }
}