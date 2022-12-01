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
                    <Link to="/projects" className="featured--see-all-text">
                        <button className="featured-see-all">
                            see all projects    
                        </button>
                    </Link>
                </div>
                <div className="featured-cards-container">
                    {projectElements.slice(0,3)}
                </div>
            </div>
            <hr className="seperator"></hr>
        </>
    );
}