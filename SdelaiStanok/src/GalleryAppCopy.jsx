import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Gallery from './gallery';
import Header from '../header';
import './styles.css';
import Footer from '../Footer';

export default function GalleryApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);

  console.log("gallery");
  

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await fetch('https://localhost:7093/api/Gallery');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGalleryItems(data['$values']);
      } catch (error) {
        console.error("Error fetching gallery items:", error); // More descriptive error message
      }
    };

    fetchGalleryItems();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Ключевое изменение здесь: передаем обновленный массив selectedTags
  const handleTagFilter = (tags) => { 
    setSelectedTags(tags); 
  };


  return (
    <div className="gallery-page">
        <Header/>
      <div className="header">
        <div className="bg-image">
          <img src="https://optim.tildacdn.com/tild3162-6131-4030-b964-643339636532/-/format/webp/cnc-min-scaled.jpg" alt="bg-image" />
        </div>
        <div className="padding_1200 phone_width" >
          <div className="header-text">
            <p>Галерея работ</p>
          </div>
        </div>
      </div>
      <div className="sidebar-gallery">
        <div className="padding_1200 phone_width" >
          <div className="main">
            <Sidebar
              onSearch={handleSearch}
              onTagFilter={handleTagFilter}
              galleryItems={galleryItems}
              selectedTags={selectedTags}
            />

            {/* Передаем selectedTags как пропс */}
            <Gallery
              searchTerm={searchTerm}
              selectedTags={selectedTags}  // Ensure this prop is updated
              galleryItems={galleryItems}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

