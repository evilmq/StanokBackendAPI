import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Gallery from './Gallery';
import Header from '../header';
import Footer from '../Footer';
import './styles.css';

export default function GalleryApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);

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
        console.error("Error fetching gallery items:", error);
      }
    };

    fetchGalleryItems();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTagFilter = (tags) => {
    setSelectedTags(tags);
  };

  return (
    <div className="gallery-page">
      <Header />
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
            <Gallery
              searchTerm={searchTerm}
              selectedTags={selectedTags}
              galleryItems={galleryItems}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}