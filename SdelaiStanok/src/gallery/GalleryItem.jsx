// GalleryItem.jsx
import React, { useState, useRef, useEffect } from 'react';
import './GalleryItem.css';

const GalleryItem = ({ item }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const imageRef = useRef(null);
  const imageViewerRef = useRef(null);

  const handleImageClick = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setZoomLevel(1);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (!fullscreenImage) return;
      event.preventDefault();
      const delta = -Math.sign(event.deltaY);
      setZoomLevel((prevZoom) => {
        const newZoom = prevZoom + delta * 0.1;
        return Math.min(Math.max(newZoom, 1), 3);
      });
    };

    const imageViewer = imageViewerRef.current;

    if (fullscreenImage && imageViewer) {
      imageViewer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (imageViewer) {
        imageViewer.removeEventListener('wheel', handleWheel, { passive: false });
      }
    };
  }, [fullscreenImage]);

  return (
    <div className="gallery-card">
      <div className="card-image" onClick={() => setIsPopupOpen(true)}>
        {item.images && item.images['$values'] && item.images['$values'].length > 0 ? (
          <img src={`\\GalleryRoot\\${item.images['$values'][0]}`} alt={item.name} />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      <div className="card-desc">
        <div className="card-name">{item.name}</div>
        <div className="card-tags">
          {item.tags['$values'].map(tag => tag.tagName).join(', ')}
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup" 
            onClick={(e) => { if (e.target === e.currentTarget) setIsPopupOpen(false); }} 
            style={{ overflow: 'hidden' }}>
          <div className="popup-content">
            <span className="close" onClick={() => setIsPopupOpen(false)}>×</span>
            <div className="popup-text-content">
              <div className="popup-name">
                <p>{item.name}</p>
              </div>
              <p className="popup-tags">{item.tags['$values'].map(tag => tag.tagName).join(', ')}</p>
              <p className="popup-description">{item.description}</p>
            </div>

            <div className="popup-images-container">
              <div className="popup-images">
                {item.images && item.images['$values'] && item.images['$values'].map((image, index) => (
                  <img
                    key={index}
                    src={`\\GalleryRoot\\${image}`}
                    alt={`${item.name} - ${index + 1}`}
                    
                    onClick={() => handleImageClick(`\\GalleryRoot\\${image}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <div className="fullscreen-image-viewer" ref={imageViewerRef} onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            alt={item.name}
            className="fullscreen-image"
            style={{ transform: `scale(${zoomLevel})` }}
            ref={imageRef}
          />
          <span className="fullscreen-close" onClick={closeFullscreen}>×</span>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;