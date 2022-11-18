import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import ArtGallery from "./components/ArtGallery";
import ContactMe from "./components/ContactMe";

export default function App() {
    return (
        <>
            <NavBar />
            <AboutMe />
            <FeaturedProjects />
            <ArtGallery />
            <div className="footer--container">
                <div className="footer--contact-container">
                    <ContactMe />
                </div>
            </div>
        </>
    );
}