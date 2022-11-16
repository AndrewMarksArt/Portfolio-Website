import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData"
import React from "react";

export default function FeaturedProjects() {
    const projectElements = ProjectData.map(item => {
        return <ProjectCard
                    key={item.id}
                    item={item}
                />
    }) 
    return (
        <>
            <div className="featured-container">
                <div className="featured-top-line">
                    <h1 className="featured-title">Featured Projects</h1>
                    <button className="featured-see-all">see all projects</button>
                </div>
                <div className="featured-cards-container">
                    {projectElements}
                </div>
            </div>
            <hr className="seperator"></hr>
        </>
    );
}