
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import FullGallery from "./components/FullGallery";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Project1 from "./pages/Projects/Project1";
import Project2 from "./pages/Projects/Project2";
import Project3 from "./pages/Projects/Project3";
import Project4 from "./pages/Projects/Project4";
import Project5 from "./pages/Projects/Project5";
import Project6 from "./pages/Projects/Project6";
import Project7 from "./pages/Projects/Project7";
import Project8 from "./pages/Projects/Project8";
import Project9 from "./pages/Projects/Project9";

export default function App() {
    return (
        <>
            {
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Layout />} >
                            <Route index element={<Home />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="resume" element={<Resume />} />
                            <Route path="gallery" element={<FullGallery />} />
                            <Route path="project-1" element={<Project1 />} />
                            <Route path="project-2" element={<Project2 />} />
                            <Route path="project-3" element={<Project3 />} />
                            <Route path="project-4" element={<Project4 />} />
                            <Route path="project-5" element={<Project5 />} />
                            <Route path="project-6" element={<Project6 />} />
                            <Route path="project-7" element={<Project7 />} />
                            <Route path="project-8" element={<Project8 />} />
                            <Route path="project-9" element={<Project9 />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
        </>
    );
}