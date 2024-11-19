import "../css/GalleryPreview.css";

const GalleryPreviewContent = () => {
  return (
    <>
    <a href="/gallery">
      <div className="gallery-preview-body">
        
            <GalleryCard src="/src/assets/g-prev-1.png"/>
            <GalleryCard src="/src/assets/g-prev-2.png"/>
            <GalleryCard src="/src/assets/g-prev-3.png"/>
            <GalleryCard src="/src/assets/g-prev-4.png"/>
            {
            //<GalleryCard src="/src/assets/g-prev-5.png"/>
            //<GalleryCard src="/src/assets/g-prev-6.png"/>
            }
      </div>
    </a>
    </>
  );
};

const GalleryCard = (props) => {
  return (
    <>
      <div className="gallery-preview-card">
        <img src={props.src} alt="" />
      </div>
    </>
  );
};

export default GalleryPreviewContent;
