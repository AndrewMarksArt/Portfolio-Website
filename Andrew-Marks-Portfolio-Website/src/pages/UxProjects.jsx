import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData"
import React from "react";

export default function UIUXProjects() {
    const projectElements = ProjectData.map(item => {
        return <ProjectCard
                    key={item.id}
                    item={item}
                />
    }) 

    return (
        <div className="projects--uiux-container">
            <div className="">
                <h1 className="projects--section-title">UI/UX Projects</h1>
            </div>

            <div className="projects--cards-container">
                    {projectElements.slice(0,6)}
            </div>

        </div>
    )
}