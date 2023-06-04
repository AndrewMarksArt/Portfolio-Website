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
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>
                <h2 className="project4--sub-head">
                    I was brought on by the project founder to help redsign the player experience to help onboard new players, bring more consistency to the game,
                    and help design new levels for players to explore.
                </h2>
            </div>

            <div className="project4--phase1-container">
                <p className="project4--challenge">
                    The Challenge
                </p>
                <h1 className="project4--title">
                    Client Meeting -- needs, thoughts, basic requirements
                </h1>
                <h2 className="project4--body">
                    My Role, Methodology & Approach Taken. 
                </h2>
                <h2 className="project4--body">
                    Client requirements & needs:
                </h2>
                <ol className="project4--list">
                    <li className="project4--list-item">
                        Confusing buttons & layouts
                    </li>
                    <li className="project4--list-item">
                        Hard to navigate & easy to get stuck
                    </li>
                    <li className="project4--list-item">
                        Mobile layout issues & information hidden, users didn't know they could scroll or where to go
                    </li>
                </ol>
                <h2 className="project4--body">
                    Design notes & ideas:
                </h2>
                <ol className="project4--list">
                    <li className="project4--list-item">
                        How to get started, where to go, who can do what?
                    </li>
                    <li className="project4--list-item">
                        For players with lots of Shogun Warriors -- way to many transaction, very hard to see all of there warriros, what can be done, 
                        and manage their army.
                    </li>
                    <li className="project4--list-item">
                        Mechanics & gameplay a bit confusing, not sure how to best use their Shoguns.
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
            </div>

            <div className="project4--phase1-container">
                <h1 className="project4--title">
                    Phase 2 -- wireframes & initial mock ups
                </h1>
                <h2 className="project4--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>
            
                <div className="project4--wireframe-container">
                    <div className="project4--img-container">
                        <img className="project4--img" src="../img/case_studies/project4/wireframe_sketch.png"/>
                        <p className="project4--img-desc">old landing page with broken buttons, whitepaper that takes them away from the game, & no link to comminity/socials.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu.
                </h2>

                <h2 className="project4--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu.
                </h2>

                <div className="project4--mocks-container">
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/roles_alerts_mock.png"/>
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/stats_mock.png"/>
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/wl_ranks_mock.png"/>
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/colab_feedback.png" />
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>
                
                <h2 className="project4--body">
                    The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.
                </h2>

                <h2 className="project4--body">
                    On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                    from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                    very important to the client.
                </h2>

                <div className="project4--mocks-container">
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/need_fix_mock.png"/>
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project4--img-mobile" src="../img/case_studies/project4/socail_ranks_mock.png"/>
                        <p className="project4--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>

                <h2 className="project4--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <h1 className="project4--title">Nudges, tips, & exploration.</h1>
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
            </div>

            <div className="projec4--footer">   
                <Link to="/projects" style={{ textDecoration: 'underline' }} className="project4--back-to-button">Back to projects </Link>
            </div>

        </div>
    )
}