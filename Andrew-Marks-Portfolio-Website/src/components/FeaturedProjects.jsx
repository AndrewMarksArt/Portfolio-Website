import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
    return (
        <>
            <div className="featured-container">
                <div className="featured-top-line">
                    <h1 className="featured-title">Featured Projects</h1>
                    <button className="featured-see-all">see all projects</button>
                </div>
                <div className="featured-cards-container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <hr className="seperator"></hr>
        </>
    );
}