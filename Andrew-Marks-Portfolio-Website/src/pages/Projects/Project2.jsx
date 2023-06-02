import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study2.css";

export default function Project2() {
    return (
        <div className="project2--main-container">
            <div className="project2-headline-container">
                <h1 className="project2--title">Enhancing the Adventure</h1>
                <h2 className="project2--sub-head">
                    In Early 2022 a new Play-2-Earn game ShogunWarNFT launched with great retro artwork and an ambitions roadmap. Focused on creating an amazing 
                    and emersive world there was lots of different elements that started to conflict with each other leading to some issues for players. 
                </h2>
                <h2 className="project2--sub-head">
                    I was brought on by the project founder to help redsign the player experience to help onboard new players, bring more consistency to the game,
                    and help design new levels for players to explore.
                </h2>
            </div>

            <div className="project2--larg-img">
                <img src="../img/case_studies/project2/shogun_main_page.png" />
            </div>
            

            <div className="project2--phase1-container">
                <p className="project2--challenge">
                    The Challenge
                </p>
                <h1 className="project2--title">
                    Site Audit & User Issues
                </h1>
                <h2 className="project2--body">
                    My Role, Methodology & Approach Taken. 
                </h2>
                <h2 className="project2--body">
                    High level results:
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Confusing buttons & layouts
                    </li>
                    <li className="project2--list-item">
                        Hard to navigate & easy to get stuck
                    </li>
                    <li className="project2--list-item">
                        Mobile layout issues & information hidden, users didn't know they could scroll or where to go
                    </li>
                </ol>
                <h2 className="project2--body">
                    Common user issues:
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        How to get started, where to go, who can do what?
                    </li>
                    <li className="project2--list-item">
                        For players with lots of Shogun Warriors -- way to many transaction, very hard to see all of there warriros, what can be done, 
                        and manage their army.
                    </li>
                    <li className="project2--list-item">
                        Mechanics & gameplay a bit confusing, not sure how to best use their Shoguns.
                    </li>
                </ol>

            </div>

            <div className="project2--img-group-container">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_landing.png"/>
                    <p className="project2--img-desc">old landing page with non working button.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_training.png"/>
                    <p className="project2--img-desc">
                        art takes up most of the screen and on smaller devices hides players shoguns and not clear the user needs to scroll to see everything.
                    </p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_land.png"/>
                    <p className="project2--img-desc">original land page, very hard for players to recognize which land has what items and actions available.</p>
                </div>
            </div>

            <div className="project2--phase1-container">
                <h1 className="project2--title">
                    Go over the top takeaways & quick fixes
                </h1>
                <h2 className="project2--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>
            
                <div className="project2--landing-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/old_landing_lrg.png"/>
                        <p className="project2--img-desc">old landing page with broken buttons, whitepaper that takes them away from the game, & no link to comminity/socials.</p>
                    </div>
                

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/new_landing.png"/>
                        <p className="project2--img-desc">Simple redesign of landing page, getting player into the game quicker, let them know new features are coming soon,
                        & links to the community and socials.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu.
                </h2>

                <div className="project2--travel-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/home_no_menu.png"/>
                        <p className="project2--img-desc">Old world map, no menu so players would have to click around to each different area & with hidden areas some players
                        will miss them completely.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/home_quicktravel.png"/>
                        <p className="project2--img-desc">Using a hamgurger menu icon that will be familure to all players, I created a simple menu that shows the players 
                        all the different areas they can travel to, breaks down the links into categories, & can color/highlight new areas or areas we want player to explore.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu.
                </h2>

                <div className="project2--mobile-container">
                    <div className="project2--portrait-container">
                        <img className="project2--img-mobile" src="../img/case_studies/project2/landing_mobile.png"/>
                        <img className="project2--img-mobile" src="../img/case_studies/project2/home_mobile.png"/>
                        <img className="project2--img-mobile" src="../img/case_studies/project2/home_mobile_menu.png"/>
                    </div>
                    <div className="project2--landscape-container">
                        <img className="project2--img-mobile" src="../img/case_studies/project2/world_landscape.png" />
                        <img className="project2--img-mobile" src="../img/case_studies/project2/map_landscape.png" />
                    </div>
                </div>

                <h2 className="project2--body">
                    The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.
                </h2>

                <h2 className="project2--body">
                    On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                    from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                    very important to the client.
                </h2>

                <h2 className="project2--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <h1 className="project2--title">Nudges, tips, & exploration.</h1>
                <div className="project2--tip-container">
                    <img className="project2--img" src="../img/case_studies/project2/bounce_tip.gif"/>
                    <p className="project2--img-desc">When new players join & get started there can be a lot to take in, by add simple animations we can nudge players 
                    where we want them to go & provide useful tips. We have to be careful not tell the players where to go all the time since exploration is part of the 
                    experiance but when getting started or when new areas open it could help get them into the game faster with less frustration.</p>
                </div>

            </div>

            <div className="project2--phase2-container">
                <p className="project2--challenge">
                    Balance & Concistency
                </p>
                <h1 className="project2--title">
                    Redesigning areas with a consistant design
                </h1>
                <h2 className="project2--body">
                    take a look at some of the older screens, all very different which can cause some confusion & frustrate the players. 
                </h2>
                <h2 className="project2--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project2--redesign-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/training_redo.png"/>
                        <p className="project2--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/land_redo.png"/>
                        <p className="project2--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                        from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                        very important to the client.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/den_redo.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                        than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/townhall_redo.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                        than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                    </div>
                </div>

                <div>
                    <h1 className="project2--title">
                        Key issues & comments from users.
                    </h1>
                    <h2 className="project2--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>
                    <h2 className="project2--body">
                        Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                        sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                        ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                        ut.
                    </h2>
                </div>
            </div>

                <div>
                    <div className="project2--new-design-container">

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/old_training_full.png"/>
                            <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                            than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                        </div>

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/new_training.png"/>
                            <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                            than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                        </div>

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/training_details.png"/>
                            <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                            than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                        </div>
                    </div>
                </div>

            <div className="project2--phase2-container">
                <h1 className="project2--title">
                    Redesigning areas with a consistant design
                </h1>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>    
            </div>

            <div className="project2--new-design-container">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_land_full.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/new_land.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/land_details.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>
            </div>

            <div className="project2--phase2-container">
                <h1 className="project2--title">
                    Redesigning areas with a consistant design
                </h1>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>    
            </div>

            <div className="project2--phase3-container">
                <p className="project2--challenge">
                    Building & crafting new levels
                </p>
                <h1 className="project2--title">
                    Designing the crafting page
                </h1>
                <h2 className="project2--body">
                    Given a few images & the need to WOW when the player sucessfully crafts a new item. 
                </h2>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>
                <h2 className="project2--body">
                    Requirements from client
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Confusing buttons & layouts
                    </li>
                    <li className="project2--list-item">
                        Hard to navigate & easy to get stuck
                    </li>
                    <li className="project2--list-item">
                        Mobile layout issues & information hidden, users didn't know they could scroll or where to go
                    </li>
                </ol>
                <div className="project2--crafting-img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_assets.png"/>
                    <p className="project2--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.</p>
                </div>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project2--crafting-design">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/main_crafting.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_items.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/success.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/inventory.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>
            </div>
        
                <h2 className="project2--body">
                    Given a few images & the need to WOW when the player sucessfully crafts a new item. 
                </h2>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_figma.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                </div>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>


                <h1 className="project2--title">
                    Solution & Walk Through
                </h1>
                <h2 className="project2--body">
                    Given a few images & the need to WOW when the player sucessfully crafts a new item. 
                </h2>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>
                <h2 className="project2--body">
                    Requirements from client
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Confusing buttons & layouts
                    </li>
                    <li className="project2--list-item">
                        Hard to navigate & easy to get stuck
                    </li>
                    <li className="project2--list-item">
                        Mobile layout issues & information hidden, users didn't know they could scroll or where to go
                    </li>
                </ol>
            
            </div>

            <div className="project2--phase3-container">
                <p className="project2--challenge">
                    Building Excitement & Telling a Story
                </p>
                <h1 className="project2--title">
                    Designing the Beast Forest
                </h1>
                <h2 className="project2--body">
                    Looking at how we can take a simple rng game, elevate it & add excitement.
                </h2>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>
                <h2 className="project2--body">
                    Requirements from client
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Confusing buttons & layouts
                    </li>
                    <li className="project2--list-item">
                        Hard to navigate & easy to get stuck
                    </li>
                    <li className="project2--list-item">
                        Mobile layout issues & information hidden, users didn't know they could scroll or where to go
                    </li>
                </ol>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_assets.png"/>
                    <p className="project2--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.</p>
                </div>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_loading.gif"/>
                    <p className="project2--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.</p>
                </div>
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                </div>
                
                <div className="project2--beast-forest-redo">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/no_character.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_select.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_confirm.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                </div>
                </div>

                <div className="project2--phase3-container">

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/forest_figma.png"/>
                    <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                </div>

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project2--crafting-design">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_raid.gif"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_bad.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_ok.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_good.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>
                </div>
                
                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                </div>
                
                <div className="project2--phase2-container">

                <h1 className="project2--title">
                    Designing the Beast Forest
                </h1>

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <h1 className="project2--title">
                    Designing the Beast Forest
                </h1>
                <h2 className="project2--body">
                    Looking at how we can take a simple rng game, elevate it & add excitement.
                </h2>

                <div className="project2--crafting-design">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_intro.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_equip.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_ok.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_good.png"/>
                        <p className="project2--img-desc">Navigation was the largest issues users had when playing.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <Link to="/projects" style={{ textDecoration: 'underline' }} className="project2--back-to-button">Back to projects </Link>
                

            </div>

        </div>
    )
}