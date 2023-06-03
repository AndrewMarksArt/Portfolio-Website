import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study4.css";

export default function project4() {
    return (
        <>
            <div className="project4--container">
                <div className="project4--headline-container">
                    <img src="../img/case_studies/project4/dashboard_cover.png" className="project4--headline-img"></img>
                    <h1 className="project4--title">The Story</h1>
                    <h2 className="project4--sub-head">Explain the challenges, pain point, and what the goals for the project are.</h2>
                </div>

                <div className="project4--team-role-container">
                    <h1 className="project4--title"> Introduce the Team and your Role for the project4.</h1>
                    <div className="project4--quote-container">
                        <h1 className="project4--sub-head">"Quote from Manager / Stakeholder"</h1>
                    </div>
                </div>

                <div className="project4--process-container">
                    <h1 className="project4--title">Process</h1>
                    <div className="project4--process-steps-container">
                        <div className="project4--process-step">
                            <img src="../img/case_studies/circ_1.png" className="project4--process-step-img"></img>
                            <p className="project4--process-step-name">step 1</p>
                        </div>

                        <div className="project4--process-step">
                            <img src="../img/case_studies/circ_2.png" className="project4--process-step-img"></img>
                            <p className="project4--process-step-name">step 2</p>
                        </div>

                        <div className="project4--process-step">
                            <img src="../img/case_studies/circ_3.png" className="project4--process-step-img"></img>
                            <p className="project4--process-step-name">step 3</p>
                        </div>

                        <div className="project4--process-step">
                            <img src="../img/case_studies/circ_4.png" className="project4--process-step-img"></img>
                            <p className="project4--process-step-name">step 4</p>
                        </div>

                        <div className="project4--process-step">
                            <img src="../img/case_studies/circ_5.png" className="project4--process-step-img"></img>
                            <p className="project4--process-step-name">step 5</p>
                        </div>
                    </div>
                </div>

                <div className="project4--progress-lrg">
                    <div className="project4--progress-images-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                    </div>

                    <div className="project4--progress-description-container">
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                    </div>
                </div>

                <div className="project4--progress-sm">
                    <div className="project4--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                    </div>

                    <div className="project4--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                    </div>

                    <div className="project4--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                    </div>

                    <div className="project4--progress-container">
                        <img src="../img/case_studies/small_grid_img.png" className="project4--progress-image"></img>
                        <p className="project4--description"> Images and descriptions to support process and the overall story.</p>
                    </div>
                </div>

                <div className="project4--final-design-container">
                    <h1 className="project4--title">Final Design</h1>
                    <h2 className="project4--sub-head">Final design notes and thoughts.</h2>
                    <div className="project4--final-img-container">
                        <img src="../img/case_studies/full_width.png" className="project4--full-width"></img>
                        <p className="project4--description">Final design image</p>
                    </div>
                </div>

                <div className="project4--moving-forward-container">
                    <h1 className="project4--title">Summarize Your Achivements / Show Your Results</h1>
                    <h2 className="project4--sub-head">Good place for quptes from manager / stakeholders</h2>
                    <div className="project4--learnings-container">
                        <h1 className="project4--title">Learnings and Moving Forward</h1>
                    </div>
                    <Link to="/project4s" style={{ textDecoration: 'underline' }} className="project4--back-to-button">back to project4s</Link>
                </div>

                <ContactMe />
            </div>
        </>
    )
}