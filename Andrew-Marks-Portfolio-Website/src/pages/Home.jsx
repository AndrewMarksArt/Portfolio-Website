import React from "react";
import AboutMe from "../components/AboutMe";
import FeaturedProjects from "../components/FeaturedProjects";
import ArtGallery from "../components/ArtGallery";

export default function Home() {
    return (
        <>
            <AboutMe />
            <FeaturedProjects />
            <ArtGallery />
        </>
    )
}