
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import FullGallery from "./components/FullGallery";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

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
                            <Route index element={<Home />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="resume" element={<Resume />} />
                            <Route path="gallery" element={<FullGallery />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
            

        </>
    );
}