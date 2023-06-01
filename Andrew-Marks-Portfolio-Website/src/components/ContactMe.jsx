
import "../css/main.css";

export default function ContactMe() {
    return (
        <div className="contact--container">
            <h2 className="contact--contact-title">Contact Information</h2>
                
                <ul className="contact--socials-list">
                    {/* EMAIL */}
                    <li className="contact--social-item">
                        <a href="mailto:andrew.colin.marks@gmail.com?subject=Interested%20in%20connecting" class="social-list--link">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                    {/* Behance */}
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://www.behance.net/andrewcolif8e1" target="_blank">
                            <i class="fa-brands fa-behance"></i>
                        </a>    
                    </li>
                    {/* Twitter */}
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://twitter.com/andrewmarksart" target="_blank">
                            <i class="fa-brands fa-twitter"></i>
                        </a>    
                    </li>
                    {/* Dribbble */}
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://dribbble.com/AndrewMarksArt" target="_blank">
                            <i class="fa-brands fa-dribbble"></i>
                        </a>
                    </li>
                    {/* LinkIn */}
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://www.linkedin.com/in/andrewmarksart/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>    
                    </li>
                    {/* Github */}
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://github.com/AndrewMarksArt" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>    
                    </li>
                </ul>
        </div>
    );
}