import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    const [navOpen, setNavOpen] = React.useState(true)

    function toggle() {
        setNavOpen(!navOpen)
        console.log(navOpen)
        if (!navOpen) {
            document.body.classList.remove('nav-open')
        } else {
            document.body.classList.toggle('nav-open')
        }
    }

    function closeMenu() {
        if(navOpen) {
            document.body.classList.remove('nav-open')
        }
    }

    return (
        <header className="header">
            <div className="logo">
                <h1 className="logo--text">Andrew Marks</h1>
            </div>

            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--list--item">
                            <Link to="/" className="nav--link" onClick={toggle}>About</Link>
                    </li>

                    <li className="nav--list--item">
                        
                            <Link to="/projects" className="nav--link" onClick={toggle}>Projects</Link>
                        
                    </li>

                    <li className="nav--list--item">
                        
                            <Link to="/resume" className="nav--link" onClick={toggle}>Resume</Link>
                        
                    </li>

                    <li className="nav--list--item">
                        
                            <Link to="/gallery" className="nav--link" onClick={toggle}>Artwork</Link>
                        
                    </li>

                </ul>
            </nav>

            <button className="nav-toggle" aria-label="toggle navigation" onClick={toggle}>
                <span className="hamburger"></span>
            </button>
            
        </header>
    );
}