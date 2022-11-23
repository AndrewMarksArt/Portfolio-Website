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
            <div className="full-gallery--topline">
                <h1 className="full-gallery--title">Art Gallery</h1>
                <div className="full-gallery--filters">
                    <button className="full-gallery--filter-active">all</button>
                    <button className="full-gallery--filter-inactive">drawings</button>
                    <button className="full-gallery--filter-inactive">paintings</button>
                    <button className="full-gallery--filter-inactive">nfts</button>
                    <button className="full-gallery--filter-inactive">ui design</button>
                </div>
            </div>
            
            <div className="full-gallery--grid-container">
                {galleryElements}
            </div>
        </div>
    )
}