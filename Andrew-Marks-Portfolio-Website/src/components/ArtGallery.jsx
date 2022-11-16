import GalleryThumbnail from "./GalleryThumbnail";

export default function ArtGallery() {
    return (
        <div className="art-gallery--container">
            <div className="art-gallery--top-line">
                <h1 className="art-gallery-title">Art Gallery</h1>
                <button className="art-gallery--see-all">see all artwork</button>
            </div>
            <div className="art-gallery--grid-container">
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
                <GalleryThumbnail />
            </div>
        </div>
    );
}