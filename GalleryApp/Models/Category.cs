namespace GalleryApp.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public List<Tag> Tags { get; set; } = new List<Tag>();
    }
}
