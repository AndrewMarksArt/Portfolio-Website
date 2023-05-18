import ContactMe from "../components/ContactMe";
import "../css/about.css";
import "../css/main.css";

export default function AboutMe() {
    return (
        <>
            <div className="container--about-me">
                <div className="about-top-bar">
                    <div className="about-line"></div>
                    <div className="about-line"></div>
                    <div className="about-line"></div>
                </div>
                <div className="about-me--main-container">
                    <div className="about-me--logo-container">
                        <img className="logo--about-me" src="../img/logo.png"></img>
                    </div>
                    <div className="about-me--main">
                        <h1 className="about-me--title">Hi, my name is Andrew </h1>

                        <h2 className="about-me--subtitle">I love building fun and unique experiences that users love!</h2>

                        <p className="about-me--body">I believe that by prioritizing accessibility and fun, 
                        businesses can achieve remarkable results and create meaningful impact.</p>
                        
                        <p className="about-me--body"> With a strong background in UI/UX design 
                        and a passion for creating delightful user experiences, I strive to bridge the gap between user needs and 
                        business goals.</p>
                    </div>
                </div>
                <div className="about-me--contact-container">
                    <ContactMe />
                </div>
                    
            </div>
            <hr className="seperator"></hr>
        </>
    );
}