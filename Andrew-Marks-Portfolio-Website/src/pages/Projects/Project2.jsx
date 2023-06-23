import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study2.css";

export default function Project2() {
    return (
        <>
        <div className="project2--main-container">
            <div>
                <img className="project2--larg-img" src="../img/case_studies/project2/shogun_main_page.png" />
            </div>
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

            <div className="project2--phase1-container">
                <p className="project2--challenge">
                    The Challenge
                </p>
                <h1 className="project2--title">
                    Site Audit & User Issues
                </h1>
                <h2 className="project2--body">
                    My initial approach was to create a new player flow looking at what they see when they visit the site and exploring the world map.
                    Very quickly it became obvious there were certain pain points that made the experience very difficult for the player.
                </h2>
                <h2 className="project2--body">
                    High level results:
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Confusing buttons & layouts.
                    </li>
                    <li className="project2--list-item">
                        Hard to navigate & easy to get stuck.
                    </li>
                    <li className="project2--list-item">
                        Mobile/Smaller screen size issues & information hidden, users didn't know they could scroll or where to go.
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
                    <p className="project2--img-desc">old landing page where the 'Tutorial' button is non-working (it was a place holder but not implemented yet),
                     and overall this screen is not really necessary.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_training.png"/>
                    <p className="project2--img-desc">
                        Art takes up most of the screen hiding players shoguns and its not clear the user needs to scroll to see everything. On smaller screens
                        the art takes up the whole screen and again no idication the users can scroll.
                    </p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_land.png"/>
                    <p className="project2--img-desc">Players have to scroll horizontally but again no indication, and there are different actions that can be taken 
                    on each land but no idication for the user which land needs attention or has available actions</p>
                </div>
            </div>

            <div className="project2--phase1-container">
                <h1 className="project2--title">
                    Quick fixes that address users main concerns 
                </h1>
                <h2 className="project2--body">
                    First impressions matter alot, and we need to fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Using hierarchy we can draw the users into the game quicker, disable the non-working button but still let the users know
                    new features are coming soon, and move the whitepaper button to the same level as community links since it takes the palyer away from the game and most users
                    didn't really care about it.
                </h2>

                <h2 className="project2--body">
                    Ultimately after talking with project founder we decided to test removing this landing page and bringing the users right into the game where they could still
                    access the whitepaper, twitter, and discord links.
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
                    After conducting the site audit and finding the navigation an issue I joined the projects discord server and talked with player. <b>The single biggest complaint
                    and issue players had was navigating the site.</b>
                </h2>

                <h2 className="project2--body">
                    Below is the original site and the simple side navigation menu I created which can be expanded and collapsed 
                        using a 'Hamburger' icon that is very familar to players.
                </h2>

                <h2 className="project2--body">
                    Additionally I grouped areas together based on there content and added some arrows to let th user know were they are currently.
                </h2>

                <div className="project2--travel-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/home_no_menu.png"/>
                        <p className="project2--img-desc">Old world map, no menu so players would have to click around to each different area & with hidden areas some players
                        will miss them completely.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/home_quicktravel.png"/>
                        <p className="project2--img-desc">Using a hamgurger menu icon that will be familare to all players, I created a simple menu that shows the players 
                        all the different areas they can travel to, breaks down the links into categories, & can color/highlight new areas or areas we want player to explore.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    One issue that the founder was trying to overcome was that the game didn't work on mobile or small screens. He tried communicating this to players but some
                    players and lots of new players would try to visit and play on their phones. <b>One of my tasks was to create concpets for mobile layouts that transformed the 
                        interactive map into something easier to use on small screens but still celebrated the art and sense of adventure the map convayed.</b>
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
                    The landing page translated well to the smaller screens and formed the starting point for the mock ups.
                </h2>

                <h2 className="project2--body">
                    I created cards with art from the original map which is used as a background to keep the player feeling that they are in a large imersive world.
                    The cards also allow for easy navigation and are familar to users so a new player would be able to figure out how to navigate the world very quickly.
                </h2>

                <h1 className="project2--title">Nudges, tips, & exploration.</h1>
                <div className="project2--tip-container">
                    <img className="project2--img-tip" src="../img/case_studies/project2/bounce_tip.gif"/>
                    <p className="project2--img-desc">Example nudge and tip to help new players find there way around the map -- main building label has a slight bounce, lighten
                    the text of other labels and add a description to the label when hovering.</p>
                </div>

                <br></br>

                <h2 className="project2--body">
                    When new players join and get started there can be a lot to take in, by add simple animations we can nudge players 
                    where we want them to go & provide useful tips. We have to be careful not tell the players where to go all the time since exploration is part of the 
                    experiance but when getting started or when new areas open it could help get them into the game faster with less frustration.
                </h2>
                <br></br>

            </div>

            <div className="project2--phase2-container">
                <p className="project2--challenge">
                    Balance & Concistency
                </p>
                <h1 className="project2--title">
                    Redesigning areas with a consistant design
                </h1>
                <h2 className="project2--body">
                    <b>The second largest complaint from players was the inconsistency in the design of different areas.</b> It added confusion and lead to players missing certain
                    things they could do or not understand why they couldn't access certain areas.  
                </h2>
                <h2 className="project2--body">
                    Additionally for players who had lots of Shogun the design made it very difficult to use all of them, collect rewards, upgrade land, etc. So I 
                    <b> needed to try and find some balance for players who were just getting started and those who were the most active users.</b>
                </h2>
                <h2 className="project2--body">
                    Below are screen shots of the 'Training Grounds', 'Land Manager', 'Bakuto Den', and a 'Town Hall Election' -- each area looks very different and requires 
                    different actions from the user to navigate through or use leading to confusion and frustration.
                </h2>

                <div className="project2--redesign-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/training_redo.png"/>
                        <p className="project2--img-desc">Original design was to highlight the art, this pushed the players characters to the bottom and in some cases users
                        didn't know where the characters were.</p>
                    </div>
                

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/land_redo.png"/>
                        <p className="project2--img-desc">Original design again highlighted art but pushed players lands to the top and required horizontal scroll. There was
                        also no way to filter or know which land needed the players attention.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/den_redo.png"/>
                        <p className="project2--img-desc">One of only two sections that launched a pop up modal and originally had no way to close, also a bit crowded and 
                        hard to see all the information.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/townhall_redo.png"/>
                        <p className="project2--img-desc">The other pop up that originally had no way to close, very different look that strays away from the rest of the game</p>
                    </div>
                </div>

                <div>
                    <h1 className="project2--title">
                        Redesigning the 'Training Grounds'
                    </h1>
                    <h2 className="project2--body">
                        The first area to address was the 'Training Grounds' where new players could take there Shogun characters to get started and claim their land.
                    </h2>
                    <h2 className="project2--body">
                        The main focus across the whole game was highlighting the art and emersing the player in the atmosphere the art created. However the original design took up
                        most of the screen with nice art that didn't actually do anything. Players had to search and scroll to find where they needed to go and had no way
                        of organizing there characters.
                    </h2>
                    <h2 className="project2--body">
                        <b>My design focused on a style that could be used across all areas so no matter where a user went they would know how to navigate and complete tasks.</b>
                    </h2>
                    <h2 className="project2--body">
                        <b>Additionally I focused on adding new components like sorting and filtering, as well as quick claim buttons to help users accomplish all tasks faster and more
                            conveniantly.
                        </b>
                    </h2>
                </div>
            </div>
                <div>
                    <div className="project2--new-design-container">

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/old_training_full.png"/>
                            <p className="project2--img-desc">Here is the original design where the art takes up most and sometimes the whole screen making it 
                            difficult for the player to figure how to complete tasks</p>
                        </div>

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/new_training.png"/>
                            <p className="project2--img-desc">In this redesigned page the elements would animate in so we can show off the art but also show the player their characters,
                            help them filter and sort, and complete tasks faster.</p>
                        </div>

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/training_details.png"/>
                            <p className="project2--img-desc">The redesigned details page alows for easy navigation between characters and a quick way back to were the player was before.</p>
                        </div>
                    </div>
                </div>

            <div className="project2--phase2-container">
                <h1 className="project2--title">
                    Redesigning the 'Land' Page
                </h1>
                <h2 className="project2--body">
                    In Shogun Wars the 'Land' page is where players could use their Shogun characters to earn passive rewards, level up their land, hire defenders for when the clan 
                    war started.
                </h2>

                <h2 className="project2--body">
                    However because there is so much to do here and it requires the players to complete many tasks sometimes daily anc can be very cumbersome and frustrating. <b>
                        My focus on the re-design was to stick with the same grid and modal design from the 'Training Grounds' as well as add components to help filter, sort, and 
                        batch tasks players needed to complete.
                    </b>
                </h2> 

                <h2 className="project2--body">
                    One of the biggest complaints players had was as they grew their armies and accquired more land it become almost impossible to complete the needed tasks.
                    With the original design if you had built up a dozen lands or more you would have to go to each one directly to claim rewards and have no way to keep track
                    of how much rewards you could claim.
                </h2>
                <h2 className="project2--body">
                    <b>It was critical to be able to see all the rewards available from all land and claim it all at once with one button click, for other tasks like upgrading, 
                        or hiring deffenders the sort and filter components quickly let players find the lands that needed attention.
                    </b>
                </h2>
            </div>

            <div className="project2--new-design-container">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_land_full.png"/>
                    <p className="project2--img-desc">Here is the original land page, players would have to scroll horizontally with no idication of whats available, then click 
                    on each one to see if anything can be done.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/new_land.png"/>
                    <p className="project2--img-desc">New design using the same grid layout as the "Training Grounds", a sort and filter bar to help players organize their land, 
                    and a total rewards button that shows the current total rewards and lets the player claim all of them with one click.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/land_details.png"/>
                    <p className="project2--img-desc">The details section for each land was expanded and a modal for consistency with the "Training Grounds", shows all actions the 
                    player can take, and allows for quick navigation between different 'Lands'.</p>
                </div>
            </div>

            <div className="project2--phase2-container">
            </div>

            <div className="project2--phase3-container">
                <p className="project2--challenge">
                    Building & crafting new levels
                </p>
                <h1 className="project2--title">
                    Designing the "Crafting" page
                </h1>
                <h2 className="project2--body">
                    After a sucsessful redesign of the main page, navigation, training grounds, and land pages the project founder approached me to help design the newest
                    section of the game and site.
                </h2>
                <h2 className="project2--body">
                    players would be able to use certain Shogun characters to craft specail items they would be able to sell to other players or use on their characters to
                    increase rewards and play new levels.
                </h2>
                <h2 className="project2--body">
                    The main hurdle to overcome from the founder was he had comissioned art for the "Crafting" area that he didn't want to get lost, players were confused 
                    about if they could use the page and which characters could, and he wanted to create a sense of excitement and achivement.
                </h2>
                <h2 className="project2--body">
                    <b>Requirements from client</b>
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Keep the art the focus, don't lose or block the main image to much.
                    </li>
                    <li className="project2--list-item">
                        Help players understand which characters can access the page and what they can do.
                    </li>
                    <li className="project2--list-item">
                        With effectivlly only one main image and a few items, create a sense of excitement and acheivement.
                    </li>
                </ol>
                <div className="project2--crafting-img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_assets.png"/>
                    <p className="project2--img-desc">Along with notes on which class of Shoguns could craft which items, these images were all I was provided with to try and create
                    an experience that would be fun for the players.</p>
                </div>

                <h2 className="project2--body">
                    <b>The first requirement from the founder was to highlight the art</b> so I started by designing a side panel where players could select the Shoguns they wanted to use
                    and <b>created a color pallet from the colors in the image.</b> Next I wanted to <b>incorporate the button to craft into the art work itself</b> so I placed the crafting button 
                    in the fire.
                </h2>

                <h2 className="project2--body">
                    Next to <b>remind players which characters would be able to craft items</b> I added two buttons to the side panel that would toggle between the available Shoguns. I 
                    also designed the character select panel so that <b>players could select multiple Shoguns and craft multiple items at one time to help players</b> who needed to craft
                    many items at once.
                </h2>

                <h2 className="project2--body">
                    <b>Finally I created the "Success!" screen, every crafting action will led to this page but it gives a feeling of accomplishment and wow!</b>
                </h2>

                <div className="project2--crafting-design">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/main_crafting.png"/>
                    <p className="project2--img-desc">Using the main image I built the side panel around it, incorporated the button to start in the image, and 
                    created the color pallet from colors in the image.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_items.png"/>
                    <p className="project2--img-desc">The toggle buttons in the "Select" panel remind player who can craft, multiple Shogun can be selected at one time, 
                    the "crafting" modal pops up letting players select items to craft and the quantity based on the number of Shogun selected.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/success.png"/>
                    <p className="project2--img-desc">All crafting leads to the "Success!" screen, I wanted to try and create a sense of accomplishment and wow to get 
                    the player excited about their new items.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/inventory.png"/>
                    <p className="project2--img-desc">An example of the inventory window so players could see what items and how many they have.</p>
                </div>
            </div>
        
                <h2 className="project2--body">
                    Lots of elements within the game are ultimately very simple concepts which is why the artwork and finding ways to create a sense of excitement is so important.
                </h2>
                <h2 className="project2--body">
                    <b>After delivering the initial designs to the project founder, he was told me "I didn't know how describe what the 'Success!' screen should look like other than
                    just WOW and the rays of light and my concept was exactly what I had in my mind but couldn't articulate" he was stoked and new players would love it.</b>
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_figma.png"/>
                    <p className="project2--img-desc">Here is a screenshot of the Figma deliverable of the final design showing all of the different screens and a basic user flow.</p>
                </div>
                <h2 className="project2--body">
                    After launch the feedback from users was great, they loved crafting page and within days thousands of items had been crafted and traded between players.
                </h2>
                <h2 className="project2--body">
                    One piece of feedback I took to heart was some players were still not sure why they couldn't use the crafting page, they didn't realize only Shogun who trained as 
                    "Artisan's" or "Shinto Priest's" could craft items. <b>With this feedback in mind and interviewing a few users I created new loading and landing screens for the 
                        newer levels. These changes not only helped players understand the game better but also provided a way to build lore and story elements.
                    </b>
                </h2>
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

                <div>
                    <br></br>
                </div>

                <Link to="/projects" style={{ textDecoration: 'underline' }} className="project2--back-to-button">Back to projects </Link>
                
                <div>
                    <br></br>
                </div>
            </div>

        </div>
        </>
    )
}