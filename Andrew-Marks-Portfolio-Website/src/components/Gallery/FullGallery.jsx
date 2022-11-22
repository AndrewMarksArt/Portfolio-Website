import GalleryThumbnail from "../GalleryThumbnail";
import ArtGalleryData from "../ArtGalleryData";
import React from "react";

export default function FullGallery() {
    const galleryElements = ArtGalleryData.map(item => {
        return <GalleryThumbnail
                    key={item.id}
                    item={item}
                />
    })

    return(
        <div className="full-gallery--container">
            <h1 className="full-gallery--title">Art Gallery</h1>
            <div className="full-gallery--grid-container">
                {galleryElements}
            </div>
        </div>
    )
}