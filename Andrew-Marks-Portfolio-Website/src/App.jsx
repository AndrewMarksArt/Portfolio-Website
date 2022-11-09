import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <NavBar />
            <AboutMe />
            <FeaturedProjects />
            <ArtGallery />
            <Footer />
        </>
    );
}