import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study9.css";

export default function Project9() {
    return (
        <>
            <div className="project--container">
                <div className="project--headline-container">
                    <img src="../img/case_studies/project9/lrg_shark.png" className="project--headline-img"></img>
                    <h1 className="project--title">How can we analyze an opaque market controlled by insiders and institutions.</h1>
                    <h2 className="project--sub-head">
                        The art market is so mysterious because galleries, dealers, artists, and major institutions act as gatekeepers offering as little 
                        transparency as possible that obscuring value and price discovery.
                    </h2>
                    <p className="project9--headline-body">
                        Defining value in art is very subjective and many times value and price don't align. The secondary market (auctions houses) can help us
                        gain better insights since prices and sale data is publically available but even so it is still difficult to access. Unlike real estate
                         or the stock market, prices, trends, reports, etc. in the art world require lots of work to gain acess to.
                    </p>
                    <p className="project9--headline-body">
                        There has been a push to increase transparency over the last few years with more companies launching searchable databases of secondary 
                        market sales. Aggregating this data is still very expensive and time consuming and creates barriers to new collectors who are trying to
                        gain access to this market. 
                    </p>
                    <p className="project9--headline-body">
                        This project was looking at how we could use newly available data to gain insights about the market and an artists value to create new
                         products aimed at new collectors trying to enter the market.
                    </p>
                </div>

                <div className="project--team-role-container">
                    <h1 className="project--title"> Introduce the Team and your Role for the project.</h1>
                    <div className="project--quote-container">
                        <h1 className="project--sub-head">"Quote from Manager / Stakeholder"</h1>
                    </div>
                </div>

                <div className="project--process-container">
                    <h1 className="project--title">Process</h1>
                    <div className="project--process-steps-container">
                        <div className="project--process-step">
                            <img src="../img/case_studies/circ_1.png" className="project--process-step-img"></img>
                            <p className="project--process-step-name">step 1</p>
                        </div>

                        <div className="project--process-step">
                            <img src="../img/case_studies/circ_2.png" className="project--process-step-img"></img>
                            <p className="project--process-step-name">step 2</p>
                        </div>

                        <div className="project--process-step">
                            <img src="../img/case_studies/circ_3.png" className="project--process-step-img"></img>
                            <p className="project--process-step-name">step 3</p>
                        </div>

                        <div className="project--process-step">
                            <img src="../img/case_studies/circ_4.png" className="project--process-step-img"></img>
                            <p className="project--process-step-name">step 4</p>
                        </div>

                        <div className="project--process-step">
                            <img src="../img/case_studies/circ_5.png" className="project--process-step-img"></img>
                            <p className="project--process-step-name">step 5</p>
                        </div>
                    </div>
                </div>

                <div className="project--progress-lrg">
                    <div className="project--progress-images-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                    </div>

                    <div className="project--progress-description-container">
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                    </div>
                </div>

                <div className="project--progress-sm">
                    <div className="project--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                    </div>

                    <div className="project--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                    </div>

                    <div className="project--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                    </div>

                    <div className="project--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project--progress-image"></img>
                        <p className="project--description"> Images and descriptions to support process and the overall story.</p>
                    </div>
                </div>

                <div className="project--final-design-container">
                    <h1 className="project--title">Final Design</h1>
                    <h2 className="project--sub-head">Final design notes and thoughts.</h2>
                    <div className="project--final-img-container">
                        <img src="../img/case_studies/full_width.png" className="project--full-width"></img>
                        <p className="project--description">Final design image</p>
                    </div>
                </div>

                <div className="project--moving-forward-container">
                    <h1 className="project--title">Summarize Your Achivements / Show Your Results</h1>
                    <h2 className="project--sub-head">Good place for quptes from manager / stakeholders</h2>
                    <div className="project--learnings-container">
                        <h1 className="project--title">Learnings and Moving Forward</h1>
                    </div>
                    <Link to="/projects" style={{ textDecoration: 'underline' }} className="project--back-to-button">back to projects</Link>
                </div>

                <ContactMe />
            </div>
        </>
    )
}