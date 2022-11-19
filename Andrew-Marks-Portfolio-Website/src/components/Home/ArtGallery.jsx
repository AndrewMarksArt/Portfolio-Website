import GalleryThumbnail from "../GalleryThumbnail";
import ArtGalleryData from "../ArtGalleryData";
import React from "react";

export default function ArtGallery() {
    const galleryElements = ArtGalleryData.map(item => {
        return <GalleryThumbnail
                    key={item.id}
                    item={item}
                />
    })

    return (
        <div className="art-gallery--container">
            <div className="art-gallery--top-line">
                <h1 className="art-gallery--title">Art Gallery</h1>
                <button className="art-gallery--see-all">see all artwork</button>
            </div>
            <div className="art-gallery--grid-container">
                {galleryElements}
            </div>
        </div>
    );
}