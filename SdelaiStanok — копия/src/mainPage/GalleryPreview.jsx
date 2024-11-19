import "../css/GalleryPreview.css";

const GalleryPreviewContent = () => {
  return (
    <>
      <div className="gallery-preview-body">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </>
  );
};

const GalleryCard = (props) => {
  return (
    <>
      <div className="gallery-preview-card"></div>
    </>
  );
};

export default GalleryPreviewContent;
