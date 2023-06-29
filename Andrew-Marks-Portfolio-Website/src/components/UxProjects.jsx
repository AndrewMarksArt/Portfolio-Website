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

            <div className="projects--top-bar">
                <div className="projects--line"></div>
                <div className="projects--line"></div>
                <div className="projects--line"></div>
            </div>

            <div className="">
                <h1 className="projects--section-title">UI/UX Projects</h1>
                <h2 className="projects--section-subhead">Focus: UI/UX Research & Design, Project Management & Product Design, Information Architecture, Prototyping, Visual Design</h2>
            </div>

            <div className="projects--cards-container">
                <Link to="/discord-dashboard" style={{ textDecoration: 'none' }}>{projectElements[0]}</Link>
                <Link to="/shogun-war-part-2" style={{ textDecoration: 'none' }}>{projectElements[1]}</Link>
                <Link to="/battle-warriors-part-1" style={{ textDecoration: 'none' }}>{projectElements[2]}</Link>
                <Link to="/quest-for-valhalla" style={{ textDecoration: 'none' }}>{projectElements[3]}</Link>
                <Link to="/shogun-war-part-1" style={{ textDecoration: 'none' }}>{projectElements[4]}</Link>
                <Link to="/battle-warriors-part-2" style={{ textDecoration: 'none' }}>{projectElements[5]}</Link>
            </div>

        </div>
    )
}