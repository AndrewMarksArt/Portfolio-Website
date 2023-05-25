import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study9.css";

export default function Project9() {
    return (
        <>
            <div className="project9--container">

                <div className="project9--headline-container">
                    <img src="../img/case_studies/project9/dots_landscape.png" className="projet9--headline-img"/>
                    <p className="project9--headline-img-credit"> Damien Hirst -- 4101 Like Dreams, from The Currency </p>
                </div>

                <div className="project9--article-container">
                    <div className="project9--article-img-container">
                        <img className="project9--article-img" src="../img/case_studies/project9/lrg_shark.png"/>
                        <p className="project9--article-img-credit">Damien Hirst, The Physical Impossibility of Death in the Mind of Someone Living, 1991</p>
                    </div>
                    <div className="project9--article-content">
                        <h2 className="project9--article-title">
                            Polka Dots and Formaldehyde: a crazy search for value in the art world.
                        </h2>
                        <h3 className="project9--article-subhead">
                            What is art and ow can we quantify value in this market?
                        </h3>
                        <p className="project9--article-blurb">
                            A look at the opaque fine art market and how we can use data to better determine value, find trends, 
                            and analyze a market controlled by insiders and powerful institutions that act as gatekeepers. 
                        </p>
                        <p className="project9--article-blurb">
                            <a 
                                href="https://medium.com/@AndrewMarksArt/polka-dots-and-formaldehyde-a-crazy-search-for-value-in-the-art-world-45d57a903dd4" 
                                target="_blank"
                                className="project9--medium-link"
                            >
                                Read the full article on Medium.
                            </a>
                        </p>
                    </div>
                </div>

                <div className="project9--takeway-title-container">
                    <h2 className="project9--takeway-title">Key Article Takeaways</h2>
                    <hr/>
                </div>

                <div className="project9--takeaway-container">
                    <p className="project9--takeway-point">
                        More access to more data is providing an opportunity to bring more transparancey to the Art Market but this 
                        data is still scattered, hidden behind paywalls, and filled with industry jargon. Can this data be used to 
                        develop models to help better determine value in the market.
                    </p>
                    <p className="project9--takeway-point">
                        By building wepscrappers and bots I was able to build a dataset of 
                        over 5,500 secondary market sales, historical currency exchange rates to convert sales prices to US Dollars, 
                        and did some minor feature engineering to start anaylzing the artists market.
                    </p>
                    <p className="project9--takeway-point">
                        I was able to then determine that the process of gathering market data 
                        used would be viable for other artists and provided an oportunity to develop new valuation models that would be valuable 
                        for collectors, apprasors, and other market participants.  
                    </p>
                </div>
                
                <Link to="/projects" style={{ textDecoration: 'underline' }} className="project9--back-to-button">Back to projects </Link>

                <div className="project9--contact-container">
                    <ContactMe />
                </div>
            </div>
        </>
    )
}