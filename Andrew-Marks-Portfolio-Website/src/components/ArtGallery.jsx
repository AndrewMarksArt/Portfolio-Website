import GalleryThumbnail from "../components/GalleryThumbnail";
import ArtGalleryData from "../data/ArtGalleryData";
import React from "react";
import { Link } from "react-router-dom";
import "../css/art_gallery.css";
import "../css/main.css";

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
            <div className="art-gallery-top-bar">
                <div className="art-gallery-line"></div>
                <div className="art-gallery-line"></div>
                <div className="art-gallery-line"></div>
            </div>
            <div className="art-gallery--top-line">
                <h1 className="art-gallery--title">Art Gallery</h1>
                <button className="art-gallery--see-all">
                    <Link to="/gallery" style={{ textDecoration: 'none', color: 'var(--clr-primary)' }}>all artwork</Link>
                </button>
            </div>
            <h2 className="art-gallery-skills">Example works in pen & ink, character, game, and UI design.</h2>
            <div className="art-gallery--grid-container">
                {galleryElements.slice(0,12)}
            </div>
        </div>
    );
}