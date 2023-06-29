import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData"
import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

export default function DsProjects() {
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
                <h1 className="projects--section-title">Data Science Projects</h1>
                <h2 className="projects--section-subhead">
                    Focus: Predictive Modeling, Natural Language Processing, Data Visualization, 
                    Web Scraping</h2>
            </div>

            <div className="projects--cards-container">
                <Link to="/airbnb-price-prediction" style={{ textDecoration: 'none' }}>{projectElements[6]}</Link>
                <Link to="/yelp-sentiment-analysis" style={{ textDecoration: 'none' }}>{projectElements[7]}</Link>
                <Link to="/fine-art-market-analysis" style={{ textDecoration: 'none' }}>{projectElements[8]}</Link>
            </div>
        </div>
    )
}