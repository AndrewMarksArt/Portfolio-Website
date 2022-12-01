import GalleryThumbnail from "../components/GalleryThumbnail";
import ArtGalleryData from "../data/ArtGalleryData";
import React from "react";

export default function ArtGallery() {
    const galleryElements = ArtGalleryData.map(item => {
        return <GalleryThumbnail
                    key={item.id}
                    img={item.img}
                    full_img={item.full_img}
                    title={item.title}
                    desc={item.desc}
                    type={item.type}
                />
    })

    return (
        <div className="art-gallery--container">
            <div className="art-gallery--top-line">
                <h1 className="art-gallery--title">Art Gallery</h1>
                <button className="art-gallery--see-all">see all artwork</button>
            </div>
            <div className="art-gallery--grid-container">
                {galleryElements.slice(0,9)}
            </div>
        </div>
    );
}