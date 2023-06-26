import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study3.css";

export default function Project3() {
    return (
        <div className="project3--main-container">
            <div>
                <img className="project3--larg-img" src="../img/case_studies/project3/bw_banner.png" />
            </div>

            <div className="project3-headline-container">
                <h1 className="project3--title">Battle Warriors Vikings of ETH: Design & Launch of a Generative NFT Collection and Gaming Ecosystem</h1>
                <h2 className="project3--sub-head">
                    In mid to late 2021 I suffered a serious back injury that made it so I was unable to work. The only thing that helped with the pain was drawing and making art 
                    and at the time I discoverd NFT's and began designing characters for a NFT project.
                </h2>
                <h2 className="project3--sub-head">
                    As the creator and project owner I designed and created all the art assests for the generative NFT characters, built up a community with over 5,000 twitter followers 
                    and 3,000 Discord members, built a no code website to provide updates and showcase the project, and wrote a series of articles on medium about the project but also 
                    about the Play-2-Earn landscape.
                </h2>
            </div>

            <div className="project3--phase1-container">
                <p className="project3--challenge">
                    The Challenge
                </p>
                <h1 className="project3--title">
                    Fun NFTs With Real Utility
                </h1>
                <h2 className="project3--body">
                    As creator and project founder my goal was to see where oportunities in the market were but also talk to real users and see how I could create something 
                    to fill that oportunity and deliver value to users. 
                </h2>
                <h2 className="project3--body">
                    Market and Business oportunities:
                </h2>
                <ol className="project3--list">
                    <li className="project3--list-item">
                        NFT's need to be more than just profile pictures (pfp's).
                    </li>
                    <li className="project3--list-item">
                        Access to live events and merch were the norm when delivering utility to holders but NFT's fit well with gaming and colaborating by giving holders IP rights.
                    </li>
                    <li className="project3--list-item">
                        To many products launched and then didn't know what to do or had no model to generate future revenue.
                    </li>
                </ol>
                <h2 className="project3--body">
                    User needs: (what I kept hearing from other collecters and users I interviewed)
                </h2>
                <ol className="project3--list">
                    <li className="project3--list-item">
                        What do I get with my NFT? Is it just art? Is there future development? What will being a holder give me?
                    </li>
                    <li className="project3--list-item">
                        How will I be able to use my NFT's to earn in play-2-earn and what does ownership of assets mean to me if the project isn't decentralized.
                    </li>
                    <li className="project3--list-item">
                        What IP rights do I have as a holder to create my own products/games/etc.
                    </li>
                </ol>

                <br></br>

                <h2 className="project3--body">
                    As creator and project founder my goal was to see where oportunities in the market were but also talk to real users and see how I could create something 
                    to fill that oportunity and deliver value to users. As creator and project founder my goal was to see where oportunities in the market were but also talk to real users and see how I could create something 
                    to fill that oportunity and deliver value to users. 
                </h2>

            </div>

            <div className="project3--sketch-group-container">
                <div className="project3--sketch-group-imgs">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/face_sketch1.png"/>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/face_sketch2.png"/>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/face_sketch3.png"/>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/new_items_sketch.png"/>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/early_archer.png"/>
                    </div>
                </div>
                <p className="project3--img-desc">
                    The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.
                </p>
            </div>

            <div className="project3--phase1-container">

                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>

                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>

                <div className="project3--test-gen-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/test_generated_viking.png"/>
                        <p className="project3--img-desc">old landing page with broken buttons, whitepaper that takes them away from the game, & no link to comminity/socials.</p>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/test_generation.png"/>
                        <p className="project3--img-desc">old landing page with broken buttons, whitepaper that takes them away from the game, & no link to comminity/socials.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>

                <div className="project3--video-container">
                    <video src="../videos/example_viking.mp4" autoPlay loop muted className="char-build-video"/>
                </div>
            </div>

            <div className="project3--phase1-container">
                <h1 className="project3--title">
                    Phase 2 -- wireframes & initial mock ups
                </h1>
                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>

                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu, and lets add some nudges/descriptions to help players find their 
                    way around the map.
                </h2>
            
                <div className="project3--banner-group-container">
                    <div className="project3--banner-group-imgs">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/banner1.png"/>
                        </div>
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/banner2.png"/>
                        </div>
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/banner3.png"/>
                        </div>
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/banner4.png"/>
                        </div>
                    </div>
                    <p className="project3--img-desc">
                        The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.
                    </p>
                </div>

                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu.
                </h2>

                <h2 className="project3--body">
                    First impressions matter alot, lets show how we can fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Lets implement a simple quick travel navigation menu.
                </h2>

                <div className="project3--items-container">
                    <div>
                        <img className="project3--item-banner" src="../img/case_studies/project3/armory_weapons.png"/>
                    </div>
                    <div className="project3--item-chests">
                        <img className="project3--item-chest" src="../img/case_studies/project3/sm_chest.png"/>
                        <img className="project3--item-chest" src="../img/case_studies/project3/lrg_chest.png"/>
                    </div>
                </div>
                
                <h2 className="project3--body">
                    The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                    landing page visually worked on those small screens.
                </h2>

                <h2 className="project3--body">
                    On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                    from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                    very important to the client.
                </h2>

                <div className="project3--mocks-container">
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/helmets.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/axes.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/hammers.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/swords.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <h2 className="project3--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <div className="project3--examples-container">
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/bg1.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/bg2.png"/>
                    </div>
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/bg3.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/bg4.png"/>
                    </div>
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/bg5.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/bg6.png"/>
                    </div>
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/bg7.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/bg8.png"/>
                    </div>
                </div>

                <h2 className="project3--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <h2 className="project3--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <div className="project3--examples-container">
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/vik1.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/vik2.png"/>
                    </div>
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/vik3.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/vik4.png"/>
                    </div>
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/vik5.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/vik6.png"/>
                    </div>
                    <div>
                        <img className="project3--giveaway-loop" src="../img/case_studies/project3/vik7.png"/>
                    </div>
                    <div>
                        <img className="project3--freya-cloak" src="../img/case_studies/project3/vik8.png"/>
                    </div>
                </div>

                <h2 className="project3--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <h2 className="project3--body">
                    Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                    than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.
                </h2>

                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://opensea.io/collection/warriors-of-ether-viking" target="_blank">
                        Here is the offical collection on OpenSea.
                    </a>
                </h2>

                <br></br>

            </div>

            <div className="project3--phase2-container">
                <br></br>
                <p className="project3--challenge">
                    Balance & Concistency
                </p>
                <h1 className="project3--title">
                    Redesigning areas with a consistant design
                </h1>
                <h2 className="project3--body">
                    take a look at some of the older screens, all very different which can cause some confusion & frustrate the players. 
                </h2>
                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>
                <h2 className="project3--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project3--redesign-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/site_wireframe.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/dapp_wireframe.png"/>
                        <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                        from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                        very important to the client.</p>
                    </div>

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/bw_site.png"/>
                        <p className="project3--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                        than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                    </div>

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/bw_dapp_site.png"/>
                        <p className="project3--img-desc">Navigation was the largest issues users had when playing so even though navigation on mobile is more straight forward
                        than on larger screens, I used the same menu to create a sense of consistency & help show the user all the different areas they can travel to.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                    sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                    ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                    ut.
                </h2>

                <div className="project3--redesign-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/site_wireframe.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/dapp_wireframe.png"/>
                        <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                        from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                        very important to the client.</p>
                    </div>
                </div>

                <div>
                    <h1 className="project3--title">
                        Key issues & comments from users.
                    </h1>
                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <h2 className="project3--body">
                    Design notes & ideas:
                    </h2>
                    <ol className="project3--list">
                        <li className="project3--list-item">
                            How to get started, where to go, who can do what?
                        </li>
                        <li className="project3--list-item">
                            For players with lots of Shogun Warriors -- way to many transaction, very hard to see all of there warriros, what can be done, 
                            and manage their army.
                        </li>
                        <li className="project3--list-item">
                            Mechanics & gameplay a bit confusing, not sure how to best use their Shoguns.
                        </li>
                    </ol>

                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <div className="project3--medium-links-container">
                        <div className="project3--img-container">
                            <a href="https://battlevikingnft.medium.com/battle-warriors-vikings-of-eth-553df4cae393" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/bw_banner.png"/>
                                <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                                landing page visually worked on those small screens.</p>
                            </a>
                        </div>

                        <div className="project3--img-container">
                            <a href="https://battlevikingnft.medium.com/looks-rare-or-does-it-fc49b56dcc6a" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/power_stones.png"/>
                                <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                                from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                                very important to the client.</p>
                            </a>
                        </div>

                        <div className="project3--img-container">
                        <a href="https://battlevikingnft.medium.com/whats-in-a-rank-281d0aaaa9ed" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/stats_card.png"/>
                                <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                                from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                                very important to the client.</p>
                            </a>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                        sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                        ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                        ut.
                    </h2>

                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <div className="project3--medium-links-container">
                        <div className="project3--img-container">
                            <a href="https://battlevikingnft.medium.com/battle-warriors-vikings-of-eth-553df4cae393" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/bw_site.png"/>
                                <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                                landing page visually worked on those small screens.</p>
                            </a>
                        </div>

                        <div className="project3--img-container">
                            <a href="https://battlevikingnft.medium.com/looks-rare-or-does-it-fc49b56dcc6a" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/discord.png"/>
                                <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                                from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                                very important to the client.</p>
                            </a>
                        </div>

                        <div className="project3--img-container">
                        <a href="https://battlevikingnft.medium.com/whats-in-a-rank-281d0aaaa9ed" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/bw_twitter.png"/>
                                <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                                from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                                very important to the client.</p>
                            </a>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                        sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                        ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                        ut.
                    </h2>

                </div>
            </div>
            
            <div className="project3--phase1-container">
                <br></br>
                <br></br>
                <br></br>

                <h1 className="project3--title">
                    Art Gen & Code
                </h1>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://colab.research.google.com/drive/1nEi4GZ3nvS39wP7S1XKtQcEkcbsCPH8U?usp=sharing" target="_blank">
                        You can see the Google Colab Notebook I used to test generating Vikings and traits here.
                    </a>
                </h2>
                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://opensea.io/collection/warriors-of-ether-viking" target="_blank">
                        Here is the offical collection on OpenSea.
                    </a>
                </h2>

                <br></br>

                <div className="project3--traits-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/set_traits_1.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/set_traits_2.png"/>
                        <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                        from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                        very important to the client.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <div className="project3--wide-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/df_head.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <div className="project3--counts-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/bg_counts.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/counts_2.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <div className="project3--weapon-count-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/weapon_count_1.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/weapon_count_2.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <div className="project3--weapon-count-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/viking_113.png"/>
                        <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                        landing page visually worked on those small screens.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                    nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                </h2>

                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://colab.research.google.com/drive/1nEi4GZ3nvS39wP7S1XKtQcEkcbsCPH8U?usp=sharing" target="_blank">
                        You can see the Google Colab Notebook I used to test generating Vikings and traits here.
                    </a>
                </h2>
                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://opensea.io/collection/warriors-of-ether-viking" target="_blank">
                        Here is the offical collection on OpenSea.
                    </a>
                </h2>
                <br></br>
            </div>

            {/*
            Phase 4 Game Design
            */}

            <div className="project3--phase2-container">
                    <br></br>
                    <p className="project3--challenge">
                        Survival Grounds side scrolling mini game.
                    </p>
                    <h1 className="project3--title">
                        Survival Grounds side scrolling mini game.
                    </h1>
                    <h2 className="project3--body">
                        take a look at some of the older screens, all very different which can cause some confusion & frustrate the players. 
                    </h2>
                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>
                    <h2 className="project3--body">
                        Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                        sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                        ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                        ut.
                    </h2>

                    <div className="project3--game-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/game_home.png"/>
                            <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                            landing page visually worked on those small screens.</p>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                        sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                        ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                        ut.
                    </h2>

                    <div className="project3--ex-levels-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/ex_spikes.png"/>
                            <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                            landing page visually worked on those small screens.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/ex_arrow.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/ex_arrow_axes.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <div className="project3--char-selects-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/char_select.png"/>
                            <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                            landing page visually worked on those small screens.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/char_confirm.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <h2 className="project3--body">
                        Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                        nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                    </h2>

                    <div className="project3--ex-levels-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help1.png"/>
                            <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                            landing page visually worked on those small screens.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help2.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help3.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help4.png"/>
                            <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                            landing page visually worked on those small screens.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help5.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help6.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="project3--title">
                            Key issues & comments from users.
                        </h1>
                        <h2 className="project3--body">
                            Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                            nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                        </h2>

                        <h2 className="project3--body">
                        Design notes & ideas:
                        </h2>
                        <ol className="project3--list">
                            <li className="project3--list-item">
                                How to get started, where to go, who can do what?
                            </li>
                            <li className="project3--list-item">
                                For players with lots of Shogun Warriors -- way to many transaction, very hard to see all of there warriros, what can be done, 
                                and manage their army.
                            </li>
                            <li className="project3--list-item">
                                Mechanics & gameplay a bit confusing, not sure how to best use their Shoguns.
                            </li>
                        </ol>

                        <h2 className="project3--body">
                            Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                            nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                        </h2>

                        <div className="project3--ex-levels-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/free_chars.png"/>
                            <p className="project3--img-desc">The game didn't work well on mobile but many players wanted to use mobile or smaller tablets so I made sure the new 
                            landing page visually worked on those small screens.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/free_char_select.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/free_char_confirm.png"/>
                            <p className="project3--img-desc">On smaller screens & in portrait mode the original world map layout didn't work, so I created cards that showed the locations
                            from the map overlayed on the world map. This way players on mobile can navigate easily where they need to go & the artwork is still highlighted which was 
                            very important to the client.</p>
                        </div>
                    </div>

                        <h2 className="project3--body">
                            Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                            sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                            ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                            ut.
                        </h2>

                        <h2 className="project3--body">
                            Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                            nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                        </h2>

                        <div className="project3--video-container">
                            <video src="../videos/free_play_prototype.mp4" autoPlay loop muted className="free-play-video"/>
                        </div>

                        <h2 className="project3--body">
                            Massa pede class viverra laoreet ad odio viverra condimentum dictum risus velit phasellus. Ac fusce et placerat sem pharetra, pulvinar praesent. Tempor 
                            sapien ante dapibus accumsan dignissim sollicitudin, varius nostra fringilla. In, quis rutrum fermentum placerat. Tincidunt sagittis turpis platea fermentum 
                            ornare netus sodales pulvinar. Platea scelerisque euismod egestas quis. Cras a Ac. Porta. Ad. Natoque sed sit ornare maecenas nascetur rhoncus ante dignissim 
                            ut.
                        </h2>

                        <h2 className="project3--body">
                            Fringilla nullam aenean rutrum morbi nunc hac purus mattis congue, vel pellentesque scelerisque donec, egestas dapibus. Ultricies elit Feugiat id. Habitasse 
                            nisi sodales ac mollis ante volutpat dictumst sagittis feugiat dictum fermentum cras, suspendisse elit.
                        </h2>

                        <div className="project3--video-container">
                            <img className="project3--img" src="../img/case_studies/project3/figma_game.png"/>
                        </div>

                        <div className="projec4--footer"> 
                            <br></br> 
                            <Link to="/projects" style={{ textDecoration: 'underline' }} className="project3--back-to-button">Back to projects </Link>
                            <br></br>
                        </div>

                    </div>
                </div>
        </div>
    )
}
