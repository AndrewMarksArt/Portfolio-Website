import ContactMe from "../components/ContactMe";
import "../css/about.css";
import "../css/main.css";

export default function AboutMe() {
    return (
        <>
            <div className="container--about-me">
                <div className="about-me--main-container">
                    <div className="about-me--logo-container">
                        <img className="logo--about-me" src="../img/logo.png"></img>
                    </div>
                    <div className="about-me--main">
                        <h1 className="about-me--title">About Me</h1>

                        <h2 className="about-me--subtitle">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.</h2>

                        <p className="about-me--body">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit.</p>
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