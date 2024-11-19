// GalleryItem.cs
using System.ComponentModel.DataAnnotations;

namespace GalleryApp.Models;
public class GalleryItem
{
    [Key]
    public int ItemId { get; set; }
    public int GalleryId { get; set; }
    public string Name { get; set; } // Добавляем свойство Name
    public string Description { get; set; }
    public Gallery Gallery { get; set; }
    public List<ItemImage> ItemImages { get; set; } = new List<ItemImage>();
    public List<ItemTags> Tags { get; set; } = new List<ItemTags>();
}