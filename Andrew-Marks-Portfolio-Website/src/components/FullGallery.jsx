import GalleryThumbnail from "./GalleryThumbnail";
import ArtGalleryData from "../data/ArtGalleryData";
import React from "react";
import "../css/full_gallery.css";
import "../css/main.css";

export default function FullGallery() {

    const [filter, setFilter] = React.useState("all")

    function showImages() {
        if(filter == "all") {
            return (
                ArtGalleryData.map(item => {
                    return <GalleryThumbnail
                                key={item.id}
                                img={item.img}
                                full_img={item.full_img}
                                title={item.title}
                                desc={item.desc}
                                type={item.type}
                            />
                })
            )
        } else {
            return (
                ArtGalleryData.map(item => {
                    if(item.type === filter) {
                    return <GalleryThumbnail
                                key={item.id}
                                img={item.img}
                                full_img={item.full_img}
                                title={item.title}
                                desc={item.desc}
                                type={item.type}
                            />}
                })
            )
        }

    }

    return(
        <>
            <div className="full-gallery--container">

                <div className="full-gallery--top-bar">
                    <div className="full-gallery--line"></div>
                    <div className="full-gallery--line"></div>
                    <div className="full-gallery--line"></div>
                </div>

                <div className="full-gallery--topline">
                    <h1 className="full-gallery--title">Art Gallery</h1>
                    <div className="full-gallery--filters">
                        <button className={
                                    filter === "all" ? "full-gallery--filter-active" : "full-gallery--filter-all"
                                } onClick={() => setFilter("all")}>
                                    all
                        </button>

                        <button className={
                                    filter === "drawing" ? "full-gallery--filter-active" : "full-gallery--filter-drawing"
                                } onClick={() => setFilter("drawing")}>
                                    drawings
                        </button>
                        
                        <button className={
                                    filter === "painting" ? "full-gallery--filter-active" : "full-gallery--filter-painting"
                                } onClick={() => setFilter("painting")}>
                                    paintings
                        </button>
                        
                        <button className={
                                    filter === "game_art" ? "full-gallery--filter-active" : "full-gallery--filter-game-art"
                                } onClick={() => setFilter("game_art")}>
                                    game art
                        </button>
                        
                        <button className={
                                    filter === "ui" ? "full-gallery--filter-active" : "full-gallery--filter-ui"
                                } onClick={() => setFilter("ui")}>
                                    ui design
                        </button>
                    </div>
                </div>
                
                <div className="full-gallery--grid-container">
                    {showImages()}
                </div>
            </div>
        </>
    )
}