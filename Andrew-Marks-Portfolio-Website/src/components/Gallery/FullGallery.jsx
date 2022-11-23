import GalleryThumbnail from "../GalleryThumbnail";
import ArtGalleryData from "../ArtGalleryData";
import React from "react";

export default function FullGallery() {

    const [filter, setFilter] = React.useState("game_art")

    function toggleFilter(type) {
        setFilter(type)
    }

    function showImages() {
        if(filter == "all") {
            return (
                ArtGalleryData.map(item => {
                    return <GalleryThumbnail
                                key={item.id}
                                img={item.img}
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
                                type={item.type}
                            />}
                })
            )
        }

    }

    return(
        <div className="full-gallery--container">
            <div className="full-gallery--topline">
                <h1 className="full-gallery--title">Art Gallery</h1>
                <div className="full-gallery--filters">
                    <button className="full-gallery--filter-active" onClick={() => setFilter("all")}>all</button>
                    <button className="full-gallery--filter-inactive" onClick={() => setFilter("drawing")}>drawings</button>
                    <button className="full-gallery--filter-inactive" onClick={() => setFilter("painting")}>paintings</button>
                    <button className="full-gallery--filter-inactive" onClick={() => setFilter("game_art")}>game art</button>
                    <button className="full-gallery--filter-inactive" onClick={() => setFilter("ui")}>ui design</button>
                </div>
            </div>
            
            <div className="full-gallery--grid-container">
                {showImages()}
            </div>
        </div>
    )
}