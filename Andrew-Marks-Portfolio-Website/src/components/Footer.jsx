export default function Footer() {
    return (
        <div className="footer--container">

            <div className="footer--top-line">
                <h1 className="footer--title">This is the Footer</h1>
            </div>

            <div className="footer--form-container">
                <div className="footer--form-input">
                    
                    <div className="footer--form-row">
                        <p className="footer--form-name">Name:</p>
                        <input className="footer--input-name" placeholder="Enter your name"></input>
                    </div>

                    <div className="footer--form-row">
                        <p className="footer--form-email">Email:</p>
                        <input className="footer--input-email" placeholder="Enter your email here"></input>
                    </div>

                    <div className="footer--form-row">
                        <p className="footer--form-subject">Subject:</p>
                        <input className="footer--input-subject" placeholder="What is your message about"></input>
                    </div>

                </div>

                <div className="footer--form-field">
                    <p className="footer--form-message">Message:</p>
                    <textarea className="footer--textarea" placeholder="Type your message here"></textarea>
                </div>
            </div>
            <div className="footer--form-bottom">
                <button className="footer--send-btn">send message</button>
            </div>
        </div>
    );
}