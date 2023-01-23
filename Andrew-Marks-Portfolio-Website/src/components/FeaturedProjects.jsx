import ProjectCard from "./ProjectCard";
import ProjectData from "../data/ProjectData"
import React from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <button className="featured-see-all">
                            all projects    
                        </button>
                    </Link>
                </div>
                <div className="featured-cards-container">
                    <Link to="/project-1" style={{ textDecoration: 'none' }}>{projectElements[0]}</Link>
                    <Link to="/project-2" style={{ textDecoration: 'none' }}>{projectElements[1]}</Link>
                    <Link to="/project-3" style={{ textDecoration: 'none' }}>{projectElements[2]}</Link>
                </div>
            </div>
            <hr className="seperator"></hr>
        </>
    );
}