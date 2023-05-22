import React from "react"
import { Link } from "react-router-dom";
import "../css/resume.css";

export default function Resume() {
    return (
        <div className="resume--container">

            <div className="resume--top-bar">
                <div className="resume--lines">
                    <div className="resume--line"></div>
                    <div className="resume--line"></div>
                    <div className="resume--line"></div>
                </div>
                <div className="pdf-button">
                    <a href="../AndrewMarksResumeUIUX.pdf" target="_blank" rel="noopener noreferrer" className="resume-custom-button">
                        <button>View PDF</button>
                    </a>
                </div>
            </div>

            <div className="resume--content-container">
                <div className="resume--top-line"></div>
                        <div className="resume--logo-container">
                            <img src="../img/logo.png" className="resume--logo"></img>
                        </div>
                    <div className="resume--name-contact">
                        <h1 className="resume--main-title">ANDREW MARKS, M.S.</h1>
                        <div className="resume--main-job-container">
                            <h1 className="resume--main-job-title">UI/UX Designer</h1>
                            <span className="resume--main-job-blank"></span>
                        </div>

                        <div className="resume--main-contact-container">
                            <a href="tel:+18282746345" className="resume--main-contact-link">
                                phone: 818.274.6345
                            </a>
                            <a href="mailto:andrew.colin.marks@gmail.com?subject=Interested%20in%20connecting" className="resume--main-contact-link">
                                email: andrew.colin.marks @gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/andrewmarksart/" target="_blank" className="resume--main-contact-link">
                                linkedin: Andrew Marks Art
                            </a>
                        </div>
                </div>
            

                <div className="resume--left-column">
                    <div className="resume--profile-container">
                        <h1 className="resume--profile-title">PROFILE</h1>
                        <hr className="resume--seperator"></hr>
                        <p className="resume--profile-body">
                            Dedicated UI/UX professional with a focus on usability and human-centered design seeking a 
                            UI/UX Designer or Researcher position. Pursuing research to transform 
                            customer needs into intuitive wireframes, mockups, prototypes, and weaving data-driven narratives to 
                            enhance user experiences. Fluent interpersonal communicator, with many transferrable skills.
                        </p>
                    </div>
                    <div className="resume--edu-skills">
                        <div className="resume--edu">
                            <h1 className="resume--edu-title">EDUCATION</h1>
                            <hr className="resume--edu-seperator"></hr>
                            <h2 className="resume--edu-school">Springboard UI/UX Career Path</h2>
                            <h2 className="resume--edu-when">March 2022 - August 2022</h2>
                            <p className="resume--edu-blurb">UI/UX bootcamp focused on Design 
                            Thinking and Human Centered Design</p>

                            <h2 className="resume--edu-school">Claremont Graduate University - December 2020</h2>
                            <p className="resume--edu-blurb">Masters of Science, Information 
                            Systems and Technology, consentration in Data Analytics</p>
                            <p className="resume--edu-blurb">Masters of Arts, Sotheby’s Institute 
                            of Art, Art Business</p>

                            <h2 className="resume--edu-school">California State University, Northridge - May 2012</h2>
                            <p className="resume--edu-blurb">Bachelor of Art, Economics, graduated with distinction</p>
                        </div>

                        <div className="resume--skils">
                            <h1 className="resume--edu-title">Skills</h1>
                            <hr className="resume--edu-seperator"></hr>
                            <ul className="resume--skill-list">
                                <li>UI/UX Research & Design</li>
                                <li>User-Centered Design</li>

                                <li>Information Architecture</li>
                                <li>Prototyping</li>

                                <li>Usability Testing</li>
                                <li>Interaction Design</li>

                                <li>Visual Design</li>
                                <li>Responsive Design</li>

                                <li>User Persona Development</li>
                                <li>User Journey Mapping</li>

                                <li>A/B Testing</li>
                                <li>Data Visualization</li>

                                <li>Design Thinking</li>
                                <li>Agile Methodology</li>

                                <li>Project Management</li>
                                <li>Product Design</li>

                                <li>Collaboration & Communication Skills</li>
                                <li>Product Strategy</li>

                                <li>Photoshop & Illustrator</li>
                                <li>Figma</li>

                                <li>Decentralized Finance (DeFi) & NFTs</li>
                                <li>Play-2-Earn (P2E) Gaming</li>
                            </ul>
                        </div>
                    </div>
                </div>

                

                <div className="resume--main-body">
                <div className="resume--jobs-container">
                        <h1 className="resume--header">Professional Experience</h1>
                        <hr className="resume--header-seperator"></hr>

                        <div className="resume--job-container">
                            <div className="resume--job-date-container">
                                <h1 className="resume--job-company">Northrop Grumman Corporation, Redondo Beach CA</h1>
                                <h1 className="resume--job-date">July 2021 - Current</h1>
                            </div>
                            <h1 className="resume--job-title">Software Engineer -- Payload & Ground Systems</h1>
                            
                            <ul className="resume--project-list">
                                <li>
                                    Developed application UI components and layouts based on customer requirements 
                                    and internal constraints.
                                </li>
                                <li>
                                    Collaborated with Internal Research and DevOps team to ensure CI/CD setup for 
                                    testing and developing prototypes
                                </li>
                                <li>
                                    Focused on Information Architecture, ensuring UI components access to telemetry 
                                    and mission data.
                                </li>
                                <li>
                                    Created and maintained software written in Java and Python while working in an 
                                    agile environment.
                                </li>
                            </ul>
                        </div>

                        <div className="resume--job-container">
                            <div className="resume--job-date-container">
                                <h1 className="resume--job-company">Fierce Nutraceuticals, Northridge CA</h1>
                                <h1 className="resume--job-date">February 2016 - August 2018</h1>
                            </div>
                            <h1 className="resume--job-title">Project Manager</h1>
                            <ul className="resume--project-list">
                                <li>
                                    Grew revenue from $0 to $80K per month (within 6 months) and annual sales to $2M+ 
                                    within 2 years; led analytics and data team to identify best supplements to partner 
                                    with existing product line (and expand to new markets).
                                </li>
                                <li>
                                    Led development and launch of health/weight management supplement for startup—focusing 
                                    on product growth, market research, operations, and distribution.
                                </li>
                            </ul>
                        </div>

                        <div className="resume--job-container">
                            <div className="resume--job-date-container">
                                <h1 className="resume--job-company">Epic Fitness Group, Northridge CA</h1>
                                <h1 className="resume--job-date">January 2014 - February 2016</h1>
                            </div>
                            <h1 className="resume--job-title">Product Designer & Project Manager</h1>
                            <ul className="resume--project-list">
                                <li>
                                    Oversaw budgets for social media, TV, digital ads, and app campaign, ranging from $50K to $75K per month.
                                </li>
                                <li>
                                    Led mobile application design/development on a Top 50 Health & Fitness product (U.S. market)—leading to 
                                    a 30% increase in web traffic and 9% increase in sales after app launch.
                                </li>
                            </ul>
                        </div>

                        <div className="resume--job-container">
                            <div className="resume--job-date-container">
                                <h1 className="resume--job-company">Equity Residential, North Hollywood CA</h1>
                                <h1 className="resume--job-date">March 2012 - January 2014</h1>
                            </div>
                            <h1 className="resume--job-title">Leasing Consultant & Price Analyst</h1>
                            <ul className="resume--project-list">
                                <li>
                                    Maintained property price database, audited competitor prices, and worked with 
                                    pricing analysts to develop optimal pricing strategy—increasing average rents by 25%+ 
                                    and occupancy from 94% to 98.5%.
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="resume--projects-container">
                        <h1 className="resume--header">Selected UI/UX Designer Projects</h1>
                        <hr className="resume--header-seperator"></hr>
                        <div className="resume--project-container">
                            <Link to="/project-1" className="resume--project-title">Decentralized Finance (DeFi) & Crypto Onboarding</Link>
                            <p className="resume--project-blurb">Researcher & Developer - DeFi & Crypto Advocacy & Onboarding, start and end date</p>
                            <ul className="resume--project-list">
                                <li>
                                    Conducted comprehensive UX research to identify challenges faced by new crypto users transitioning from 
                                    centralized to decentralized platforms.
                                </li>
                                <li>
                                    Developed gamified app concept tailored to diverse motivation, to simplify onboarding and education in DeFi.
                                </li>
                                <li>
                                    Created wireframes for seamless onboarding incorporating insights from interviews, affinity groups, personas, etc.
                                </li>
                            </ul>

                            <div className="resume--project-container">
                                <Link to="/project-2" className="resume--project-title">Battle Warriors NFT</Link>
                                <p className="resume--project-blurb">Product Designer, Manager & Lead Artist, start and end date.</p>
                                <ul className="resume--project-list">
                                    <li>
                                        Designed launched The Viking NFT Warriors (generative collection) with diverse characters, weapons, and looks.
                                    </li>
                                    <li>
                                        Grew Discord server to 3K+ members and increased Twitter followers to 3K+; authored Medium articles.
                                    </li>
                                    <li>
                                        Developed Python script generating random characters/rarities, combining creativity and technical expertise.
                                    </li>
                                    <li>
                                        Created website showcasing NFT collection, highlighting roadmap, and enabling minting on Ethereum.
                                    </li>
                                </ul>
                        </div>

                        <div className="resume--project-container">
                            <Link to="/project-3" className="resume--project-title">Shogun War -- Play-2-Earn (P2E) Game</Link>
                            <p className="resume--project-blurb">UX Auditor & Designer, start and end date.</p>
                            <ul className="resume--project-list">
                                <li>
                                    Conducted comprehensive UX audit for crypto play-to-earn (P2E) game—identifying usability issues and 
                                    providing recommendations for navigation, onboarding, and structural improvements.
                                </li>
                                <li>
                                    Redesigned games navigation system and various pages, addressing key audit issues and enhancing UX.
                                </li>
                                <li>
                                    Designed aesthetically pleasing, engaging crafting page—incorporating character select windows, inventory 
                                    panels, crafting selection windows (and a graphic for successful crafting achievements).
                                </li>
                                <li>
                                    Created immersive Beast Forest and Dungeon pages, using text, character select windows, graphics, transitions, 
                                    and ending animations to enhance players sense of accomplishment.
                                </li>
                            </ul>
                        </div>

                        <div className="resume--project-container">
                            <Link to="/project-3" className="resume--project-title">Discord Community Management Dashboard</Link>
                            <p className="resume--project-blurb">UI Designer, start and end date.</p>
                            <ul className="resume--project-list">
                                <li>
                                    Spearheaded and devised comprehensive Discord (community management) dashboard—shaped to manage 
                                    multiple projects, roles, permissions, alerts, and key metrics.
                                </li>
                                <li>
                                    Developed clear information architecture, wireframes, and mockups—iterating based on client 
                                    feedback and design insights for optimal UX.
                                </li>
                                <li>
                                    Leveraged visual design/data visualization to create engaging, informative dashboard—displaying 
                                    key stats, social media metrics, collaborations, and user engagement.
                                </li>
                                <li>
                                    Conducted user testing and iterations with clients and moderators—refining dashboard for specific 
                                    preferences/requirements.
                                </li>
                            </ul>
                        </div>

                        <div className="resume--project-container">
                            <Link to="/project-3" className="resume--project-title">Airbnb Optimal Price Model</Link>
                            <p className="resume--project-blurb">Using 28K listings with 100+ features provided by Airbnb for Dublin, Ireland</p>
                            <ul className="resume--project-list">
                                <li>
                                    Slashed Mean Absolute Error by 40%+, Root Mean Absolute Error by 55%+, and R 2 score from 0.48 to 0.61s.
                                </li>
                                <li>
                                    Cleaned, explored data; narrowed down and engineered features; built baseline and Random Forest Regression 
                                    model to predict price-per-night for each listing (using mean absolute error, root mean squared error, and R 2 score).
                                </li>
                                <li>
                                    AirBnB predictive model — Andrew Marks (andrewmarksart.com).
                                </li>
                                <li>
                                    GitHub - AndrewMarksArt/AirBnB_Predictive_Model.
                                </li>
                            </ul>
                        </div>

                        <p>
                            *Full project listing at <a href="https://www.linkedin.com/in/andrewmarksart/" target="_blank" className="resume-projects-link">linkedin.com/in/andrewmarksart/</a> and
                             on the <Link to="/projects" className="resume-projects-link">PROJECTS</Link> page.
                        </p>

                        <div className="resume--edu-sm">
                            <h1 className="resume--header">EDUCATION</h1>
                            <hr className="resume--edu-seperator"></hr>
                            <h2 className="resume--job-company">Springboard UI/UX Career Path</h2>
                            <h2 className="resume--job-date">March 2022 - August 2022</h2>
                            <p className="resume--job-blurb">UI/UX bootcamp focused on Design 
                            Thinking and Human Centered Design</p>

                            <h2 className="resume--job-company">Claremont Graduate University - December 2020</h2>
                            <p className="resume--job-blurb">Masters of Science, Information 
                            Systems and Technology, consentration in Data Analytics</p>
                            <p className="resume--job-blurb">Masters of Arts, Sotheby’s Institute 
                            of Art, Art Business</p>

                            <h2 className="resume--job-company">California State University, Northridge - May 2012</h2>
                            <p className="resume--job-blurb">Bachelor of Art, Economics, graduated with distinction</p>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}