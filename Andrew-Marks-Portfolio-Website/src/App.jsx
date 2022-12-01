import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import FeaturedProjects from "./pages/FeaturedProjects";
import ArtGallery from "./pages/ArtGallery";
import ContactMe from "./components/ContactMe";
import Layout from "./pages/Layout";

import UIUXProjects from "./pages/UxProjects";
import DsProjects from "./pages/DataScienceProjects";
import FullGallery from "./components/FullGallery";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            {/*
            <>
            // This is the Home Page
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
            */}


            {/*
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
            */}

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

            {
                /*
                <>
                    <NavBar />
                    <Resume />
                </>
                */

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />} >
                            <Route index element={<AboutMe />} />
                            <Route path="projects" element={<FeaturedProjects />} />
                            <Route path="resume" element={<Resume />} />
                            <Route path="gallery" element={<FullGallery />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
            

        </>
    );
}