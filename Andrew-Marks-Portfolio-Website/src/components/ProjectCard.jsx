import React from "react"
import "../css/project_card.css";
import "../css/main.css";

export default function ProjectCard(props) {

    return (

        <div className="project-card">
            <img src={`../img/${props.item.img}`} className="project-image"></img>
            <div className="project-card--text">
                <h2 className="project-title">{props.item.title}</h2>
                <p className="project-headline">{props.item.headline}</p>
            </div>
            <div className="project-hover-bg"></div>
        </div>

    )
}