import React from "react";

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
                    <li className="nav--list--item"><a href="#about" className="nav--link" onClick={toggle}>About</a></li>
                    <li className="nav--list--item"><a href="#" className="nav--link" onClick={toggle}>Projects</a></li>
                    <li className="nav--list--item"><a href="#" className="nav--link" onClick={toggle}>Resume</a></li>
                    <li className="nav--list--item"><a href="#" className="nav--link" onClick={toggle}>Artwork</a></li>
                </ul>
            </nav>

            <button className="nav-toggle" aria-label="toggle navigation" onClick={toggle}>
                <span className="hamburger"></span>
            </button>
            
        </header>
    );
}