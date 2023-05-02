import ProjectCard from "./ProjectCard";
import ProjectData from "../data/ProjectData"
import React from "react";
import { Link } from "react-router-dom";
import "../css/ux_projects.css";
import "../css/main.css";

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
                <Link to="/project-1" style={{ textDecoration: 'none' }}>{projectElements[0]}</Link>
                <Link to="/project-2" style={{ textDecoration: 'none' }}>{projectElements[1]}</Link>
                <Link to="/project-3" style={{ textDecoration: 'none' }}>{projectElements[2]}</Link>
                <Link to="/project-4" style={{ textDecoration: 'none' }}>{projectElements[3]}</Link>
                <Link to="/project-5" style={{ textDecoration: 'none' }}>{projectElements[4]}</Link>
                <Link to="/project-6" style={{ textDecoration: 'none' }}>{projectElements[5]}</Link>
            </div>

        </div>
    )
}