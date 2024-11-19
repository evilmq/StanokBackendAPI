import React, { useEffect } from 'react'; // Import useEffect
import GalleryItem from './GalleryItem';
import './Gallery.css';


const Gallery = ({ searchTerm, selectedTags, galleryItems }) => {
  useEffect(() => {
    // Этот эффект будет срабатывать при каждом изменении selectedTags
    console.log("selectedTags changed:", selectedTags); // For debugging
  }, [selectedTags]);

  return (
    <div className="gallery">
      {galleryItems
        .filter((item) => {
          const matchesSearchTerm =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags['$values'].some(tag =>
              tag.tagName.toLowerCase().includes(searchTerm.toLowerCase())
            );

            const matchesSelectedTags =
            selectedTags.length === 0 || // Используем selectedTags из пропсов
            selectedTags.every(selectedTag =>
              item.tags['$values'].some(tag => tag.tagName === selectedTag)
            );

          return matchesSearchTerm && matchesSelectedTags;
        })
        .map((item) => (
          <GalleryItem key={item.itemId} item={item} />
        ))}
    </div>
  );
};

export default Gallery;