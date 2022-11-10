export default function NavBar() {
    return (
        <header className="header">
            <div className="logo">
                <h1 className="logo--text">Andrew Marks</h1>
            </div>

            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--list--item"><a href="#" className="nav--link">About</a></li>
                    <li className="nav--list--item"><a href="#" className="nav--link">Projects</a></li>
                    <li className="nav--list--item"><a href="#" className="nav--link">Resume</a></li>
                    <li className="nav--list--item"><a href="#" className="nav--link--end">Artwork</a></li>
                </ul>
            </nav>
            
        </header>
    );
}