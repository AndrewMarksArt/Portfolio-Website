import ProjectCard from "../ProjectCard";
import ProjectData from "../ProjectData"
import React from "react";

export default function DsProjects() {
    const projectElements = ProjectData.map(item => {
        return <ProjectCard
                    key={item.id}
                    item={item}
                />
    }) 

    return (
        <div className="projects--ds-container">
            <div className="">
                <h1 className="projects--section-title">Data Science Projects</h1>
            </div>

            <div className="projects-cards-container">
                    {projectElements.slice(6,)}
            </div>
        </div>
    )
}