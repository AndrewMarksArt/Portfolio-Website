
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import FullGallery from "./components/FullGallery";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

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
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
            

        </>
    );
}