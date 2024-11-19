import React, { useState, useEffect, useRef } from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const Gallery = ({ searchTerm, selectedTags, galleryItems }) => {
  const [loadedItems, setLoadedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const loadMoreItems = () => {
      const startIndex = loadedItems.length;
      const endIndex = Math.min(startIndex + 10, galleryItems.length);
      setLoadedItems(galleryItems.slice(0, endIndex));
      setIsLoading(false);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setIsLoading(true);
        loadMoreItems();
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadedItems, isLoading, galleryItems]);

  return (
    <div className="gallery">
      {loadedItems
        .filter((item) => {
          const matchesSearchTerm =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags['$values'].some(tag =>
              tag.tagName.toLowerCase().includes(searchTerm.toLowerCase())
            );

          const matchesSelectedTags =
            selectedTags.length === 0 ||
            selectedTags.every(selectedTag =>
              item.tags['$values'].some(tag => tag.tagName === selectedTag)
            );

          return matchesSearchTerm && matchesSelectedTags;
        })
        .map((item) => (
          <GalleryItem key={item.itemId} item={item} />
        ))}
      {isLoading && <div>Загрузка...</div>}
      <div ref={observerRef} />
    </div>
  );
};

export default Gallery;