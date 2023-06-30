import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study5.css";

export default function Project5() {
    return (
        <div className="project5--main-container">
            <div>
                <img className="project5--larg-img" src="../img/case_studies/project5/quests_banner.png" />
            </div>

            <div className="project5-headline-container">
                <h1 className="project5--title">Quest for Valhalla: Fantasy & D&D inspired Tactics & Strategy Game.</h1>
                <h2 className="project5--sub-head">
                    The next expansion in the Battle Warriors ecosystem is our turn-based strategy game called Quest for Valhalla.
                </h2>
                <h2 className="project5--sub-head">
                    In this expansion I created a series of “Quests” which are levels that players can mint and then try to beat to earn 
                    rewards. I developed the main website for the project and am currently developing the a special site for the game docs 
                    call the “Quest Library” to add more interactive elements to the game docs.
                </h2>
                <h2 className="project5--sub-head">
                    Finally, I have started developing the game where players can use their quests to build their own dungeons, challenge friends, 
                    capture pets to train, and complete missions that will drive the world's narrative shaping future events. 
                </h2>
            </div>

            <div className="project5--phase1-container">
                <p className="project5--challenge">
                    Creating a game to challenge crypto native users that can also onboard new users.
                </p>
                <h1 className="project5--title">
                    Game Design -- How to challenge Web3 users while onboarding new players
                </h1>
                <h2 className="project5--body">
                    As the project owner I initially used AI art generators to create treasure maps and designed a system that would allow players to complete 
                    these maps based on on-chain data and events that could be verified by oracles. 
                </h2>
                <h2 className="project5--body">
                    Requirements & needs:
                </h2>
                <ol className="project5--list">
                    <li className="project5--list-item">
                        Fun game that incorporates the nature of treasure maps and going on an adventure.
                    </li>
                    <li className="project5--list-item">
                        Mix of game elements to challenge more advanced crypto/Web3 users.
                    </li>
                    <li className="project5--list-item">
                        Simpler game modes to help bring in new players and onboard new Web3 users.
                    </li>
                </ol>                

            </div>

            <div className="project5--sketch-group-container">
                <div className="project5--sketch-group-imgs">
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/map1.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/map3.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/original_map1.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/land2.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/quest3.png"/>
                    </div>
                </div>
                <p className="project5--img-desc">
                Early AI generated reasure maps representing unrevealed or hidden quests that players can embark on.
                </p>
            </div>

            <div className="project5--phase1-container">
                <h2 className="project5--body">
                    Even though this new game will have a very different art style to the Battle Warriors Vikings characters, they will still be what players use to 
                    try and complete the quests. So, when creating images for the game I tried to tie in the Viking and Valhalla theme.
                </h2>
            </div>

            <div className="project5--phase1-container">

            <div className="project5--sketch-group-container">
                <div className="project5--sketch-group-imgs">
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/village1.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/adventure1.png"/>
                    </div>
                </div>
                <p className="project5--img-desc">
                    I used MidJourney to generate promotional and mood board images playing on the theme of a Viking leaving their village to go on an Adventure.
                </p>
            </div>

            <h2 className="project5--body">
                In addition to the treasure maps and the Viking villages I needed something to symbolize a portal or gateway that would transport the player to a 
                new world where they would fight monsters to complete the quests. 
            </h2>

            <div className="project5--sketch-group-container">
                <div className="project5--sketch-group-imgs">
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/arch5.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/arch6.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/arch3.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/arch1.png"/>
                    </div>
                </div>
                <p className="project5--img-desc">
                    I generated a series of gateway/portals in a few different styles to be used in marketing material, the website, and in the game.
                </p>
            </div>

                <h2 className="project5--body">
                After generating a few maps, villages, and gateways I reached out to the community to get feedback from and do some quick user interviews. From there 
                I chose a design for the “Quests” using images like a treasure map but also more like a playing card
                </h2>

                <h2 className="project5--body">
                I want an element of trading between players and this design easily translates to future card games I am starting to think up and create.
                </h2>

                <div className="project5--next-steps-container">
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/card_design_sketch.png"/>
                        <p className="project5--img-desc">
                        Here is the original sketch for the “Quests”, the card would have a back and appear that way until the player revealed it. Once revealed the 
                        monster would be shown.</p>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/unrevealed_quest.png"/>
                        <p className="project5--img-desc">
                            From the sketch and previous maps the final "Quest" card back was created.</p>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/1st_quest.png"/>
                        <p className="project5--img-desc">
                            No need to include stats on the card, it gives me more space to show the artwork, and gives more flexibility.</p>
                    </div>
                </div>            
            
                <h1 className="project5--title">
                    Lets see some monsters.
                </h1>
                <h2 className="project5--body">
                After finalizing the “Quest” design I started working on creating the individual quests. I wanted to create a wide range of different types of quests filled with 
                monsters but also animals or companions that players could catch and train to help them in battle.
                </h2>

                <h2 className="project5--body">
                Below are a few different monsters, I worked hard to bring elements from games like D&D, classic fantasy RPGs, and mythology.
                </h2>
            
                <div className="project5--banner-group-container">
                    <div className="project5--banner-group-imgs">
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/skeleton_warrior_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/goblin_grunt_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/fire_elemental_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/arcane_fox_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/dragon_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/gorgon_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/litch_card.png"/>
                        </div>
                        <div className="project5--img-container">
                            <img className="project5--img" src="../img/case_studies/project5/nightmare_card.png"/>
                        </div>
                    </div>
                    <p className="project5--img-desc">
                    Here are a few examples of different monsters from “Skeleton Warriors” and “Goblin Grunts” to “Dragons”, “Gorgons”, and “Fire Elementals”.
                    </p>
                </div>

                <h2 className="project5--body">
                In addition to the individual “Quest” I created a level system that would incentivize collecting and trading among players so they could complete 
                sets or use duplicate quests to level up the monsters. 
                </h2>

                <h2 className="project5--body">
                Here is an example of how a player can use 3 of the same “Quest” to level it up and the different level each class of monster has.
                </h2>
                
            </div>

        
            <div className="project5--sketch-group-container">
                <div className="project5--sketch-group-imgs">
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/level_up.png"/>
                    </div>
                    <div className="project5--img-container">
                        <img className="project5--img" src="../img/case_studies/project5/dragon_levels.png"/>
                    </div>
                </div>
                <p className="project5--img-desc">
                Here 3 “Goblin Grunts” (the level 1 Goblin) are being combined to level it up to a level 2 “Goblin Raider”. And for the Dragon class of monsters 
                here are the 3 different levels.
                </p>
            </div>

            <div className="project5--phase1-container">
                
                <h2 className="project5--body">
                After creating the level system, I wanted to create some different rarities between, Commons will have quests that are a bit easier and have creatures that 
                players could try to catch and train to use as allies. Un-Common quests are slightly stronger and well know fantasy and D&D monsters. Rare’s are fearsome monsters, 
                some of the strongest and most terrifying with a node to mythology.
                </h2>

                <h2 className="project5--body">
                Here we can see the level Quests for each rarity, and below that the my master Figma file showing all the different monsters and rarities.
                </h2>

                <div className="project5--mocks-container">
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/level_1_commons.png"/>
                        <p className="project5--img-desc">Here are all of the level 1 Commons, these are good entry level and starter quests.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/level_1_uncommons.png"/>
                        <p className="project5--img-desc">Here are the un-common quests, which are monsters more common in fantasy and D&D games.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/level_1_rares.png"/>
                        <p className="project5--img-desc">The rare level 1 Quests are some of the strongest and most dangerous monsters in the Battle Warriors world.</p>
                    </div>
                </div>

                <div className="project5--all-quests-container">
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/all_quests.png"/>
                        <p className="project5--img-desc">Here is a screen shot of the Figma file showing all of the Quests and all of the different levels, the Quests showing 
                        a card back is still being created.</p>
                    </div>
                </div>

                <h2 className="project5--body">
                Looking over all of the Quests we have 15 different commons each with 5 different levels, 10 different un-commons with 5 levels, 9 different rares with 3 levels 
                each, and then 4 mythic rares with 1 level but will have special alternative art.
                </h2>

                <h2 className="project5--body">
                    This makes about 160 unique Quests, and when you factor in the different game boards, game modes, and ability to combine multiple quests to create dungeons, 
                    there are millions of different combinations. 
                </h2>

                <br></br>

                <h1 className="project5--title">
                    Designing the website
                </h1>
                <h2 className="project5--body">
                After creating all of the different Quests and building the basics of the project, I started working on the website for the project beginning with 
                some wireframe sketches.  
                </h2>

                <div className="project5--examples-container">
                    <div>
                        <img className="project5--giveaway-loop" src="../img/case_studies/project5/original_site_sketch.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/site_sketch_breakdown.png"/>
                    </div>
                    <div>
                        <img className="project5--giveaway-loop" src="../img/case_studies/project5/cleaned_up_wireframe.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/mobile_wireframe.png"/>
                    </div>
                </div>

                <h2 className="project5--body">
                The original sketch uses one of the portal/gateway images from above as way to let the user know they were entering a new world and is where I have been 
                testing different CTA’s. As the user scrolls, they will find information about what the project is, how to join the waitlist, galleries and how it ties to 
                the original Battle Warriors project.
                </h2>

                <h2 className="project5--body">
                I cleaned up the original sketches into nicer wireframes, one for the desktop site and the other for how it would look on mobile. Below are screen shots of 
                the different section that I created from those wireframes.
                </h2>

                <div className="project5--mock-examples-container">
                    <div>
                        <img className="project5--giveaway-loop" src="../img/case_studies/project5/mockup_main.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/mockup_section2.png"/>
                    </div>
                </div>

                <h2 className="project5--body">
                The first image is the main sections of the site, it starts with the gateway and a CTA button to enter the new world. Below that are the basics about the game 
                and Quests where we can try to convert users to join our socials and signup for early access.
                </h2>

                <h2 className="project5--body">
                The next section shows some more aspects of the game like leveling up Quests and a Gallery of example Quests with descriptions to build some lore.
                </h2>

                <div className="project5--mock-examples-container">
                    <div>
                        <img className="project5--giveaway-loop" src="../img/case_studies/project5/mockup_section3.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/mockup_section4.png"/>
                    </div>
                </div>

                <h2 className="project5--body">
                After the Gallery I created a section to tie in the original Battle Warriors characters, showing how players could equip them, what their strengths and weakness are, 
                a CTA to get users to mint or buy on secondary, and finally an example gallery .
                </h2>

                <h2 className="project5--body">
                Then a section on how to play talking about how you can use your Battle Warriors Viking characters, selecting a quest, and a hint at the rewards you can earn.
                </h2>

                <div className="project5--mock_mobile-examples-container">
                    <div>
                        <img className="project5--giveaway-loop" src="../img/case_studies/project5/mockup_section5.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/mobile_section1.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/mobile_section2.png"/>
                    </div>
                    <div>
                        <img className="project5--freya-cloak" src="../img/case_studies/project5/mobile_section3.png"/>
                    </div>
                </div>

                <h2 className="project5--body">
                Finally, there is a section for the demo which for now just holds and example board and loading screen followed by our last 
                CTA to get users to sign up for early access.
                </h2>

                <h2 className="project5--body">
                You can also see all of those section above adjusted for mobile, and below is a video showing the prototype I create which scrolls through the site.
                </h2>

                <div className="project5--video-container">
                    <video src="../videos/quests_site_scroll_1.mp4" autoplay playsInline loop muted controls webkit-playsInline className="site-scroll"/>
                    <p className="project5--img-desc">Example video showing how the site might look and while the user scrolls through it.</p>
                </div>

                <h2 className="project5--body">
                Since I wasn’t ready to have users enter the site, I sketched up a new main section with some lore and a text box to capture email addresses. 
                This way users can sign up for Early Access, join our Discord, and we can test different offers or perks.
                </h2>

                <div className="project5--mocks-container">
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/early_access_wireframe.png"/>
                        <p className="project5--img-desc">New main section wireframe sketch, want to capture email to build up my email list which I could use to 
                        market as I get closer to launch.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/early_access_mockup.png"/>
                        <p className="project5--img-desc">The new main section includes a text box to gather emails, buttons to get early access, and join discord to build 
                        our community.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/early_access_popup.png"/>
                        <p className="project5--img-desc">Once the user signs up for early access, I created a thank you window that creates another push to 
                        join the discord and offers a perk for doing so.</p>
                    </div>
                </div>
                
                <h2 className="project5--body">
                This site is currently being built and is a way for me to learn some more HTML, CSS, JavaScript, and React. Currently it is about 
                50% done but is successful at helping build the email list, you can see the current site using the link below.
                </h2>

                <h2 className="project5--link-to-button">
                    <a className="project5--link-to-button" href="https://www.battlewarriors.quest" target="_blank">
                        Here is the current site based on the above design, some changes have been made to focus on getting users to sign up for early access.
                    </a>
                </h2>

                <h1 className="project5--title">
                    Designing the new "Quest Library"
                </h1>
                <h2 className="project5--body">
                    With over 150 different Quests each with its own description, game hits, abilities, etc. the most common feedback I got from users was that they wanted a 
                    place to see all of the quests and read the descriptions. 
                </h2>
                <h2 className="project5--body">
                Again, I start with wireframe sketches, I had an idea of what it should look like in my head but getting it on paper is the best way for me to test 
                different ideas.
                </h2>


                <div className="project5--mocks-container">
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/quest_library_wireframe.png"/>
                        <p className="project5--img-desc">The landing page needs to have a large main image of a fantasy style library, then cards/links to jump straight 
                        to those quests, followed by some lore to help with world building.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/library_monsters_wireframe.png"/>
                        <p className="project5--img-desc">For each class of monsters/creatures there needs to be a banner image with some lore and then links to 
                        each quest in the class.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/library_monsters_wireframe2.png"/>
                        <p className="project5--img-desc">Once a Quest is clicked, the user gets to see the Quest card, name, level, description, and battle tips or 
                        other information.</p>
                    </div>
                </div>
                
                <h2 className="project5--body">
                The goal of this site is to create a fantasy encyclopedia that incorporates all of the game docs in a less formal and really fun way.
                To do this I relied on using big powerful images with heavy fantasy influences to create the experience that the player is entering this 
                huge and exciting world.
                </h2>

                <br></br>

                <div className="project5--mocks-container">
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/quest_library_design.png"/>
                        <p className="project5--img-desc">Mockup of the main section, with a large fantasy library as a background, large images as links to the 
                        different Quests, Common, Un-Common, Rare, and Mythic Rare</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/library_monsters_design.png"/>
                        <p className="project5--img-desc">Each section, Common here, has search and filter options, and then each class of creatures has its own banner 
                        image, and large pictures of the quests as links to see more details.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/library_monsters_details.png"/>
                        <p className="project5--img-desc">The details page shows the large Quest image, the name, description, battle and game tips and some navigation 
                        to see the other levels.</p>
                    </div>
                </div>
                
                <h2 className="project5--body">
                This design is meant to be bold and vibrate again trying to create an immersive world that players can get lost in, go on adventures, and builds 
                excitement for the game launch. Below is a recording of the prototype I made that scrolls through all the Common quests.
                </h2>

                <div className="project5--video-container">
                    <video src="../videos/library_early_demo.mp4" autoplay playsInline loop muted controls webkit-playsInline className="site-scroll"/>
                    <p className="project5--img-desc">Scrolling from the main section through all of the Common quests.</p>
                </div>

                <h2 className="project5--body">
                After scrolling through the Common quests I create this video testing the details page for the “Faerie” Quests, the players can see all of the 
                quests and the Faerie class lore. Once the user clicks any of the links, the details appear where players can learn more about each quests.
                </h2>
                <br></br>

                <div className="project5--video-container">
                    <video src="../videos/quest details.mp4" autoplay playsInline loop muted controls webkit-playsInline className="site-scroll"/>
                    <p className="project5--img-desc">Going throught each of the Faerie Quests and seeing the details.</p>
                </div>

                <h2 className="project5--body">
                After making a simple prototype to test the details page, I needed to make sure it would work for mobile and small screens. Here the user 
                can scroll horizontally between the different levels and quickly swipe/click through to all of the Quests.
                </h2>

                <div className="project5--video-container">
                    <video src="../videos/mobile_prototype_1.mp4" autoplay playsInline loop muted controls webkit-playsInline className="site-scroll-mobile"/>
                    <p className="project5--img-desc">Testing the mobile prototype and how the layout needs to change to fit smaller screens.</p>
                </div>

                <h2 className="project5--body">
                Now that the design and simple prototype has been created, I’m currently working on finishing the art assets needed to finish the Un-Common, 
                Rare, and Mythic Rare sections. After that I need to create a profile section so users can connect their wallets and see the Vikings and Quests they own.
                </h2>
                <br></br>

                <h1 className="project5--title">
                    Future work / Next steps
                </h1>
                <h2 className="project5--body">
                The main issue I’m focused on working on next is making the user flow to get users to create an account and sign up for early access much smother. As
                I get closer to launching the mint having a larger email list and as many users as possible already set up with accounts will help boost sales. 
                </h2>

                <div className="project5--next-steps-container">
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/userflow.png"/>
                        <p className="project5--img-desc">User flow diagram a walking through how a user enters the site and where I can uses CTAs to convert that user to 
                        someone who joins the email list to get early access.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/entered_portal_wireframe.png"/>
                        <p className="project5--img-desc">Sketch for when a user who has connected / logged on and enters the portal. Links to the users Vikings, 
                        Quests, and Achievements, news and updates, leaderboards, etc.</p>
                    </div>
                    <div>
                        <img className="project5--img-mobile" src="../img/case_studies/project5/user_account_wireframe.png"/>
                        <p className="project5--img-desc">The users “My Vikings” page shows the users pfp, name, rank, etc. then shows all the Vikings the player has 
                        sorted by rank and searchable. Each Viking has a details page that shows the current items equipped.  </p>
                    </div>
                </div>
                
                <h2 className="project5--body">
                I’m currently finishing the Quest cards and Quest Library, once that is finished the profile page and looking at the user flow and onboarding flow to 
                optimize it will be the focus until the project officially launches. Hopefully this process will be done by the end of the year.
                </h2>

                <br></br>

                <div className="projec5--footer"> 
                    <Link to="/projects" style={{ textDecoration: 'underline' }} className="project5--back-to-button">Back to projects </Link>
                </div>

            </div>

        </div>
               
    )
}
