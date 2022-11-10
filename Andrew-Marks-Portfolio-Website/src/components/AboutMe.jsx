export default function AboutMe() {
    return (
        <>
            <div className="container--about-me">

                <img className="logo--about-me" src="./img/logo.png"></img>

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
                
                <h2 className="about-me--contact-title">CONTACT INFORMATION</h2>
                
                <ul className="about-me--socials-list">
                    <li className="about-me--social-item"><a href="#">email</a></li>
                    <li className="about-me--social-item"><a href="#">LinkedIn</a></li>
                    <li className="about-me--social-item"><a href="#">Behance</a></li>
                    <li className="about-me--social-item"><a href="#">Twitter</a></li>
                    <li className="about-me--social-item"><a href="#">Github</a></li>
                </ul>
                    
            </div>
            <hr className="seperator"></hr>
        </>
    );
}