import ProjectCard from "./ProjectCard";
import ProjectData from "../data/ProjectData"
import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/project-1">{projectElements[0]}</Link>
                <Link to="/project-2">{projectElements[1]}</Link>
                <Link to="/project-3">{projectElements[2]}</Link>
                <Link to="/project-4">{projectElements[3]}</Link>
                <Link to="/project-5">{projectElements[4]}</Link>
                <Link to="/project-6">{projectElements[5]}</Link>
            </div>

        </div>
    )
}