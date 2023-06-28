import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study4.css";

export default function Project4() {
    return (
        <div className="project4--main-container">
            <div>
                <img className="project4--larg-img" src="../img/case_studies/project4/dashboard_cover.png" />
            </div>

            <div className="project4-headline-container">
                <h1 className="project4--title">Discord Community Manager & Dashboard</h1>
                <h2 className="project4--sub-head">
                    During the last cryptocurrency bull market towards the later stages in late 2021 and early 2022 a series of projects suffered catastrophic 
                    hacks and security breaches. Twitter was the primary social media platform for most projects but especially for NFTs community was one of 
                    the largest selling points and all major projects had Discord servers where investors, collectors, and those just interested in learning more 
                    could hang out. And while some projects used Telegram, or WhatsApp, twitter and Discord were the focus of this project.
                </h2>
                <h2 className="project4--sub-head">
                    Since these projects made announcements, posted official links, and marketed to all of their follower’s security became a huge issue. Sim swaps, 
                    hacks, social engineering, etc. were all techniques used by bad actors to try and hijack these communities and spread scams.
                </h2>
                <h2 className="project4--sub-head">
                    I was hired by three project founders who had launched a successful NFT gaming project, helped uncover a smart contract vulnerability in a large 
                    cryptocurrency project, and advised/colabed with many other NFT projects. The biggest risk they saw to their projects was security and they wanted 
                    to build a dashboard where they could monitor all of their projects across Discord and Twitter and take quick action if needed.
                </h2>
                <br></br>
            </div>

            <div className="project4--phase1-container">
                <p className="project4--challenge">
                    The Challenge
                </p>
                <h1 className="project4--title">
                    Client Meeting -- needs, thoughts, basic requirements
                </h1>
                <h2 className="project4--body">
                    My Role was to help turn the rough idea and sketches the founders had into wireframes and high fidelity mock ups.
                </h2>
                <h2 className="project4--body">
                    Client requirements & needs:
                </h2>
                <ol className="project4--list">
                    <li className="project4--list-item">
                        Needed to be able to see team members for all projects, the roles and permissions they had, and to be able to revoke those permissions as quickly as possible
                        if that team member was compromised.
                    </li>
                    <li className="project4--list-item">
                        They also needed to be able monitor social media and other sites for alerts of various severity, from hacks to data connection or API issues.
                    </li>
                    <li className="project4--list-item">
                        Since the cryptocurrency market is 24/7 and news can break at any time, the design needed to be mobile friendly so if a user was out and away 
                        from their computer when a hack occurred or if it happened in the middle of the night they could quickly and easily take action from their phone.
                    </li>
                    <li className="project4--list-item">
                        Along with monitoring security and alerts they wanted to be able to tack metrics and community stats.
                    </li>
                    <li className="project4--list-item">
                        The design would also need to be flexible and customizable as this was being built as a product they could sell to other projects and not just 
                        for personal use.
                    </li>
                </ol>
                <h2 className="project4--body">
                    Design notes & ideas:
                </h2>
                <ol className="project4--list">
                    <li className="project4--list-item">
                        I was given a very simple sketch with the requirements which helped me get started with wireframing quickly which I shared with the client 
                        to get feedback and iterate quickly.
                    </li>
                    <li className="project4--list-item">
                        Along with the sketch and notes, they provided a few designs to use as benchmarks and while they couldn't explain exactly the color scheme or 
                        look, they wanted we had worked together in the past and I had a good idea of what they were looking for.
                    </li>
                    <li className="project4--list-item">
                        I created a mood board with images that fit a neon/Tokyo or neon/Miami aesthetic and a retro/futuristic style, once the client approved, 
                        I was able to create the projects color pallet.
                    </li>
                </ol>

            </div>

            <div className="project4--img-group-container">
                <div className="project4--img-container">
                    <img className="project4--img" src="../img/case_studies/project4/client_notes.png"/>
                    <p className="project4--img-desc">Sketch and requirements from client with a few design concepts they found online.</p>
                </div>
                <div className="project4--img-container">
                    <img className="project4--img" src="../img/case_studies/project4/moodboard.png"/>
                    <p className="project4--img-desc">Example images and styles the client liked and wanted to capture in the project along with a color pallet I created 
                    from those images.
                    </p>
                </div>
                <br></br>
            </div>

            <div className="project4--phase1-container">
                <h1 className="project4--title">
                    Wireframes & initial mockups
                </h1>
                <h2 className="project4--body">
                    After the client meeting, I was able to take the sketch provided and break the overall project into key sections. The top sections had to be 
                    focused on security, viewing team members' permissions, and alerts.
                </h2>
                <h2 className="project4--body">
                    From there the focus would switch to metrics and overall stats, this section would need to be customizable to fit the users’ specific needs. 
                    But from there it was a bit less defined, I would need a section for social media overview, colabs and marketing promos, and rankings but it 
                    was less clear how those sections would look.
                </h2>
            
                <div className="project4--wireframe-container">
                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/wireframe_sketch.png"/>
                        <p className="project4--img-desc">Picture of original wireframe sketch that was shown to the clients to get feedback and iterate on.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    My process is very iterative and with a background in Agile development I made sure to meet with the client frequently to get feedback and make 
                    sure things were going in the right direction.
                </h2>

                <h2 className="project4--body">
                    The client laughed at how I was able to "take the crappy sketch" they gave me and start to make it look like something real. They loved the 
                    direction I was going and provided me a few more examples for the colab and promotion section and what they wanted to see for the social media overview.
                </h2>

                <h2 className="project4--body">
                    With that feedback I was able to start building the mockup in Figma, building on the wireframe and incorporating the color scheme and styles that 
                    were approved.
                </h2>

                <div className="project4--mocks-container">
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/roles_alerts_mock.png"/>
                        <p className="project4--img-desc">Here is the top section showing different team members, here we have a quick view with a fast revoke button, 
                        and we can see active and revoked members. Additionally, there is the "Alerts" section with examples of different severity alerts.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/stats_mock.png"/>
                        <p className="project4--img-desc">Next is an example of some basic stats and how it might be organized, these can be moved/rearranged or swapped 
                        out for different metrics.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/wl_ranks_mock.png"/>
                        <p className="project4--img-desc">The colabs, ranking and social overview section was the area I was the least sure about. Here is the mockup I 
                        first started with before getting examples from the client.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/colab_feedback.png" />
                        <p className="project4--img-desc">This was the example image provided by the client after our tag up to help me design the final sections.</p>
                    </div>
                </div>
                
                <h2 className="project4--body">
                    After meeting with the client and seeing their example about how they were tracking the colabs and whitelists I realized I didn't need such a large 
                    section for them. That meant I could use that space to track social media metrics and posts. The top posts section can be filtered for most likes, 
                    reposts, engagement, etc.
                </h2>

                <h2 className="project4--body">
                    Now that I had a better idea of what the client was looking for regarding the Colabs I reached back out to them to get some clarity on how they would 
                    use the Rankings. With that I was able to finish the last section for Colabs and to track which members/holders were most active, had the highest 
                    engagement, held the most NFTs or ETH, etc 
                </h2>

                <div className="project4--mocks-container">
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/need_fix_mock.png"/>
                        <p className="project4--img-desc">The original mockup used to test spacing before meeting again with the client to get feedback and clarity.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/socail_ranks_mock.png"/>
                        <p className="project4--img-desc">Colab section didn't need to be as large as I thought originally and provided the space needed for a 
                        Social Media Overview section.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    That covered all the requirements the client had; the dashboard was built not quite in a mobile first method but tailored for smaller screens 
                    that could easily expand to larger screens. By working in an Agile fashion, I was able to meet and get feedback from the client as the design 
                    was developing streamlining the process and delivering a final mockup that they loved.
                </h2>

                <h1 className="project4--title">Final design and Deliverable</h1>
                <div className="project4--scroll-container">
                    <img className="project4--full-dash-img" src="../img/case_studies/project4/full_dash.png"/>
                </div>
                <br></br>

            </div>

            <div className="project4--phase2-container">
                <h1 className="project4--title">
                    Next Steps
                </h1>
                <h2 className="project4--body">
                    After getting approval from the client on the final dashboard design, I started creating mock ups for the team members security screens and 
                    individual team member details, this wasn't part of the project or scope of work but I felt it would help the team nail down more concretely 
                    how they wanted to start developing the next part of the project since they were still a bit unsure.
                </h2>

                <h2 className="project4--body">
                    When looking at all the team members, I created a grid layout with simple cards that matched the main dashboard section but would allow the users 
                    to quickly see everything, and while it isn't in this mock up a search/filter option would work nicely to quickly find who you needed.
                </h2>

                <h2 className="project4--body">
                    Each card would open up a details modal where notes and activities could be logged, then if revoking or changing permissions there would be check boxes to select which roles,
                    or a revoke all button. Finally, a confirm screen to make sure the user wanted to complete the action and a space for adding notes.
                </h2>
                
                

                <div className="project4--redesign-container">
                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/all_team_mock.png"/>
                        <p className="project4--img-desc">Team member cards that can be scrolled through quickly, need to add some sort and filter options.</p>
                    </div>
                

                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/selected_user_mock.png"/>
                        <p className="project4--img-desc">Individual team member details modal where users can add notes and check recent activity.</p>
                    </div>

                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/select_roles_mock.png"/>
                        <p className="project4--img-desc">Example revoke screen, see active status, select which roles to revoke, or just revoke all.</p>
                    </div>

                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/confirm_mock.png"/>
                        <p className="project4--img-desc">Confirm actions screen, user can add notes after making sure the correct permissions/security changes 
                        are being made.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    These screens and mockups are a bit rough and meant to serve as a starting point for user testing. I can already see a few areas that might 
                    need to be redone but getting feedback from users and doing some paper prototyping/ testing would give us more information to make sure development 
                    is heading in the right direction.
                </h2>
                

                <div className="projec4--footer"> 
                <br></br> 
                    <Link to="/projects" style={{ textDecoration: 'underline' }} className="project4--back-to-button">Back to projects </Link>
                    <br></br>
                </div>
            </div>
        </div>
    )
}