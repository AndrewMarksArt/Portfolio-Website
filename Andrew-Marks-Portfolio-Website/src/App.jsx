import NavBar from "./components/NavBar";
import AboutMe from "./components/Home/AboutMe";
import FeaturedProjects from "./components/Home/FeaturedProjects";
import ArtGallery from "./components/Home/ArtGallery";
import ContactMe from "./components/ContactMe";

import UIUXProjects from "./components/Projects/UxProjects";
import DsProjects from "./components/Projects/DataScienceProjects";
import FullGallery from "./components/Gallery/FullGallery";

export default function App() {
    return (
        <>
            {
            // This is the Home Page
            /*<NavBar />
            <AboutMe />
            <FeaturedProjects />
            <ArtGallery />
            <div className="footer--container">
                <div className="footer--contact-container">
                    <ContactMe />
                </div>
            </div>*/}

            <>
                <NavBar />
                <UIUXProjects />
                <DsProjects />
                <div className="footer--container">
                    <div className="footer--contact-container">
                        <ContactMe />
                    </div>
                </div>
            </>

            {/*
            <>
                <NavBar />
                <FullGallery />
                <div className="footer--container">
                    <div className="footer--contact-container">
                        <ContactMe />
                    </div>
                </div>
            </>
            */}

        </>
    );
}