import React from "react"

export default function Resume() {
    return (
        <>
            <div className="resume--container">
                <div className="resume--left-column">
                    <img src="img/logo.png" className="resume--logo"></img>
                    <div className="resume--profile-container">
                        <h1 className="resume--profile-title">PROFILE</h1>
                        <hr className="resume--seperator"></hr>
                        <p className="resume--profile-body">
                        Blurb about my background, goals, process, learning, next 
                        steps or key takeaways. place holder  blurb about what skills 
                        and things I learned and or used and the resut.
                        </p>
                        <p className="resume--profile-body">
                        Blurb about my background, goals, process, learning, next 
                        steps or key takeaways. place holder  blurb about what skills 
                        and things I learned and or used and the resut.
                        </p>
                    </div>
                    <div className="resume--edu-skills">
                        <div className="resume--edu">
                            <h1 className="resume--edu-title">EDUCATION</h1>
                            <hr className="resume--edu-seperator"></hr>
                            <h2 className="resume--edu-school">Springboard UI/UX Career Path</h2>
                            <h2 className="resume--edu-when">March 2022 - current</h2>
                            <p className="resume--edu-blurb">UI/UX bootcamp focused on Design 
                            Thinking and Human Centered Design</p>

                            <h2 className="resume--edu-school">Claremont Graduate University</h2>
                            <h2 className="resume--edu-when">August 2018 - December 2020</h2>
                            <p className="resume--edu-blurb">Masters of Science, Information 
                            Systems and Technology, consentration in Data Analytics</p>
                            <p className="resume--edu-blurb">Masters of Arts, Sotheby’s Institute 
                            of Art, Art Business</p>

                            <h2 className="resume--edu-school">California State University, Northridge</h2>
                            <h2 className="resume--edu-when">current - current</h2>
                            <p className="resume--edu-blurb">Bachelor of Art, Economics, graduated with distinction</p>
                        </div>

                        <div className="resume--skils">
                            <h1 className="resume--edu-title">Skills</h1>
                            <hr className="resume--edu-seperator"></hr>
                            <ul className="resume--skill-list">
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                            </ul>
                        </div>

                        <div className="resume--hobbies">
                            <h1 className="resume--edu-title">Hobbies</h1>
                            <hr className="resume--edu-seperator"></hr>
                            <ul className="resume--skill-list">
                                <li>Hobbie</li>
                                <li>Hobbie</li>
                                <li>Hobbie</li>
                                <li>Hobbie</li>
                                <li>Hobbie</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="resume--main-body">
                    <h1 className="resume--main-title">ANDREW MARKS</h1>
                </div>
            </div>
        </>
    )
}