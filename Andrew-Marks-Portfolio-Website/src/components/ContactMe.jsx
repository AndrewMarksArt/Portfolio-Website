import "../css/contact_me.css";
import "../css/main.css";

export default function ContactMe() {
    return (
        <div className="contact--container">
            <h2 className="contact--contact-title">Contact Information</h2>
                
                <ul className="contact--socials-list">
                    <li className="contact--social-item">
                        <a href="mailto:0xErling@pm.me" class="social-list--link">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://twitter.com">
                            <i class="fa-brands fa-behance"></i>
                        </a>    
                    </li>
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://behance.com">
                            <i class="fa-brands fa-twitter"></i>
                        </a>    
                    </li>
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://dribble.com">
                            <i class="fa-brands fa-dribbble"></i>
                        </a>
                    </li>
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://linkedin.com">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>    
                    </li>
                    <li className="contact--social-item">
                        <a class="social-list--link" href="https://github.com">
                            <i class="fa-brands fa-github"></i>
                        </a>    
                    </li>
                </ul>
        </div>
    );
}