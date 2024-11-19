using System.Collections.Generic;

namespace GalleryApp.Models.Dtos
{
    public class GalleryItemDto
    {
        public int ItemId { get; set; }
        public int GalleryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string> Images { get; set; } = new List<string>(); // Массив путей к изображениям
        public List<TagDto> Tags { get; set; } = new List<TagDto>(); // Изменили тип Tags на List<TagDto>
    }
}