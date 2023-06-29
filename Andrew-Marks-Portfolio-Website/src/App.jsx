
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import FullGallery from "./components/FullGallery";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Project1 from "./pages/Projects/BattleWarriors2";
import Project2 from "./pages/Projects/ShogunWar1";
import Project3 from "./pages/Projects/BattleWarriors1";
import Project4 from "./pages/Projects/DiscordDash";
import Project5 from "./pages/Projects/Quests";
import Project6 from "./pages/Projects/ShogunWar2";
import Project7 from "./pages/Projects/Airbnb";
import Project8 from "./pages/Projects/Yelp";
import Project9 from "./pages/Projects/ArtMarket";

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
                            <Route path="battle-warriors-part-2" element={<Project1 />} />
                            <Route path="shogun-war-part-1" element={<Project2 />} />
                            <Route path="battle-warriors-part-1" element={<Project3 />} />
                            <Route path="discord-dashboard" element={<Project4 />} />
                            <Route path="quest-for-valhalla" element={<Project5 />} />
                            <Route path="shogun-war-part-2" element={<Project6 />} />
                            <Route path="airbnb-price-prediction" element={<Project7 />} />
                            <Route path="yelp-sentiment-analysis" element={<Project8 />} />
                            <Route path="fine-art-market-analysis" element={<Project9 />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
        </>
    );
}