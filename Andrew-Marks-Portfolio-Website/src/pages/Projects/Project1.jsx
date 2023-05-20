import React from "react";
import ContactMe from "../../components/ContactMe";
import "./case_study.css";

export default function Project1() {
    return (
        <>
            <div className="project--container">
                <div className="project--headline-container">
                    <img src="../img/case_studies/headline_img.png" className="project--headline-img"></img>
                    <h1 className="project--title">The Story</h1>
                    <h2 className="project--sub-head">Explain the challenges, pain point, and what the goals for the project are.</h2>
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

                <div className="project--final-design-container">
                    <h1 className="project--title">Final Design</h1>
                    <h2 className="project--sub-head">Final design notes and thoughts.</h2>
                    <img src="../img/case_studies/full_width.png" className="project--full-width"></img>
                    <p className="project--description">Final design image</p>
                </div>

                <div className="project--moving-forward-container">
                    <h1 className="project--title">Summarize Your Achivements / Show Your Results</h1>
                    <h2 className="project--sub-head">Good place for quptes from manager / stakeholders</h2>
                    <div className="project--learnings-container">
                        <h1 className="project--title">Learnings and Moving Forward</h1>
                    </div>
                </div>

                <ContactMe />
            </div>
        </>
    )
}