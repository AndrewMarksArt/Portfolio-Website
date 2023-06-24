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
                    During the last cryptocurrency bull market towards the later stages in late 2021 and early 2022 a series of projects suffered catestrophic hacks and security breaches.
                    Twitter was the primary social media platform for most projects but esspecially for NFTs community was one of the largest selling points and all major projects had 
                    Discord servers where investors, collectors, and those just interested in learning more could hang out. And while some projects used Telegram, or WhatsApp, twitter
                    and Discord were the focus of this project.
                </h2>
                <h2 className="project4--sub-head">
                    Since these projects made announcment, posted official links, and marketed to all of their followers security became a huge issue. Sim swaps, hacks, social engineering, 
                    etc. were all techniques used by bad actors to try and hijack these communities and spread scams.
                </h2>
                <h2 className="project4--sub-head">
                    I was hired by three project founders who had launched a successful NFT gaming project, helped uncover a smart contract vulneralbility in a large cryptocurrency project,
                    and advised/colabed with many other NFT project. The biggest risk they saw to their projects was security and they wanted to build a dashboard where they could monitor
                    all of their projects across Discord and Twitter and take quick action if needed.
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
                    My Role role was to help turn the rough idea and sketchs the founders had into wireframes and highfidelity mock ups. 
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
                        Since the cryptocurrency market is 24/7 and news can break at anytime, the design needed to be mobile friendly so if a user was out and away from their computer
                        when a hack occured or if it happend in the middle of the night they could quickly and easily take action from their phone.
                    </li>
                    <li className="project4--list-item">
                        Along with monitoring security and alerts they wanted to be able to tack metrics and community stats.
                    </li>
                    <li className="project4--list-item">
                        The design would also need to be flexible and custimizable as this was being built as a product they could sell to other projects and not just for personal use.
                    </li>
                </ol>
                <h2 className="project4--body">
                    Design notes & ideas:
                </h2>
                <ol className="project4--list">
                    <li className="project4--list-item">
                        I was given a very simple sketch with the requirements which helped me get started with wireframing quickly which I shared with the client to get feedback and
                        iterate quickly.
                    </li>
                    <li className="project4--list-item">
                        Along with the sketch and notes, they provided a few designs to use as benchmarks and while they couldn't explain exactly the color scheme or look they wanted 
                        we had wroked together in the past and I had a good idea of what they were looking for.
                    </li>
                    <li className="project4--list-item">
                        I created a mood board with images that fit a neon/tokyo or neon/miami asthetic and a retro/futuristic style, once the client approved I was able to create the 
                        projects color pallet.
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
                    <p className="project4--img-desc">
                        Example images and styles the client liked and wanted to capture in the project along with a color pallet I created from those images.
                    </p>
                </div>
                <br></br>
            </div>

            <div className="project4--phase1-container">
                <h1 className="project4--title">
                    Wireframes & initial mock ups
                </h1>
                <h2 className="project4--body">
                    After the client meeting I was able to take the sketch provided and break the overall project into key sections. The top sections had to be focused on security, 
                    viewing team members permissions, and alerts.
                </h2>
                <h2 className="project4--body">
                    From there the focus would switch to metrics and overall stats, this section would need to be customizable to fit the users specific needs. But from there it was
                    a bit less defined, I would need a section for social media overview, colabs and marketing promos, and rankings but it was less clear how those sections would look.
                </h2>
            
                <div className="project4--wireframe-container">
                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/wireframe_sketch.png"/>
                        <p className="project4--img-desc">Picture of original wireframe sketch that was shown to the clients to get feedback and iterate on.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    My process is very iterative and with a background in Agile development I made sure to meet with teh client frequently to get feedback and make sure things
                    were going in the right direction.
                </h2>

                <h2 className="project4--body">
                    The client laughed at how I was able to "take the crappy sketch" they gave me and start to make it look like something real. They loved the direction I was going 
                    and provided me a few more examples for the colab and promotion section and what they wanted to see for the social media overview.
                </h2>

                <h2 className="project4--body">
                    With that feedback I was able to start building the mock up in Figma, building on the wireframe and incorporating the color scheme and styles that were approved.
                </h2>

                <div className="project4--mocks-container">
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/roles_alerts_mock.png"/>
                        <p className="project4--img-desc">Here is the top section showing different team members, here we have a quick view with a fast revoke button, and we can 
                        see active and revoked members. Additionally there is the "Alerts" section with the examples of different severity alerts.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/stats_mock.png"/>
                        <p className="project4--img-desc">Next is an example of some basic stats and how it might be organized, these can be moved/rearanged or swapped out for
                        different metrics.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/wl_ranks_mock.png"/>
                        <p className="project4--img-desc">The colabs, ranking and social over view section was the area I was the least sure about. Here is the mock up I fist started
                        with before getting examples from the client.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/colab_feedback.png" />
                        <p className="project4--img-desc">This was the example image provided by the client after our tag up to help me design the final sections.</p>
                    </div>
                </div>
                
                <h2 className="project4--body">
                    After meeting with the client and seeing their example about how they were tracking the colabs and whitelists I realized I didn't need such a large section 
                    for them. That ment I could use that space to track social media metrics and posts. The top posts section can be filtered for most likes, reposts, engagement, etc.
                </h2>

                <h2 className="project4--body">
                    Now that I had a better idea of what the client was looking for in regards to the Colabs I reached back out to them to get some clarity on how they would use the
                    Rankings. With that I was able to finish the last section for Colabs and to track which members/holders were most active, had the highest engagement, held the most
                    NFTs or ETH, etc. 
                </h2>

                <div className="project4--mocks-container">
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/need_fix_mock.png"/>
                        <p className="project4--img-desc">The original mock up used to test spacing before meeting again with the client to get feedback and clarity.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/socail_ranks_mock.png"/>
                        <p className="project4--img-desc">Colab section didn't need to be as large as I thought originally and provided the space needed for a Social Media Overview section.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    That covered all of the requirements the client had, the dashboard was built not quite in a mobile first method but tailored for smaller screens that could easily expand
                    to larger screens. By working in an Agile fashion I was able to meet and get feedback from the client as the design was developing streamlining the process and delivering 
                    a final mock up that they loved.
                </h2>

                <h1 className="project4--title">Final design and Deliverable</h1>
                <div className="project4--scroll-container">
                    <div className="project4--scroll-description">
                        <img className="project4--scroll-gif" src="../img/case_studies/project4/dashboard_scroll.gif"/>
                        <p className="project4--img-desc">
                            When new players join & get started there can be a lot to take in, by add simple animations we can nudge players 
                            where we want them to go & provide useful tips. We have to be careful not tell the players where to go all the time since exploration is part of the 
                            experiance but when getting started or when new areas open it could help get them into the game faster with less frustration.
                        </p>

                        <p className="project4--img-desc">
                            When new players join & get started there can be a lot to take in, by add simple animations we can nudge players 
                            where we want them to go & provide useful tips. We have to be careful not tell the players where to go all the time since exploration is part of the 
                            experiance but when getting started or when new areas open it could help get them into the game faster with less frustration.
                        </p>

                        <p className="project4--img-desc">
                            When new players join & get started there can be a lot to take in, by add simple animations we can nudge players 
                            where we want them to go & provide useful tips. We have to be careful not tell the players where to go all the time since exploration is part of the 
                            experiance but when getting started or when new areas open it could help get them into the game faster with less frustration.
                        </p>
                    </div>
                    <div className="project4--full-dash">
                        <img className="project4--full-dash-img" src="../img/case_studies/project4/full_dash.png"/>
                    </div>
                    
                </div>

            </div>

            <div className="project4--phase2-container">
                <p className="project4--challenge">
                    Balance & Concistency
                </p>
                <h1 className="project4--title">
                    Redesigning areas with a consistant design
                </h1>
                <h2 className="project4--body">
                    take a look at some of the older screens, all very different which can cause some confusion & frustrate the players. 
                </h2>
                <h2 className="project4--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>
                <h2 className="project4--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project4--redesign-container">
                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/all_team_mock.png"/>
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                

                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/selected_user_mock.png"/>
                        <p className="project4--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                        from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                        very important to the client.</p>
                    </div>

                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/select_roles_mock.png"/>
                        <p className="project4--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                        than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                    </div>

                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/confirm_mock.png"/>
                        <p className="project4--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                        than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                    </div>
                </div>

                <div>
                    <h1 className="project4--title">
                        Key issues & comments from users.
                    </h1>
                    <h2 className="project4--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>
                    <h2 className="project4--body">
                        Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                        sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                        ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                        ut.
                    </h2>
                </div>

                <div className="projec4--footer"> 
                <br></br> 
                    <Link to="/projects" style={{ textDecoration: 'underline' }} className="project4--back-to-button">Back to projects </Link>
                    <br></br>
                </div>
            </div>
        </div>
    )
}