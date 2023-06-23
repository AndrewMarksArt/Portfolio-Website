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
                    Simply speaking many aspects of the Shogun War game can be boiled down to the player selecting a Shogun to use, rolling a dice or using some king of random
                    number generator, then determin the outcome.
                </h2>
                <h2 className="project2--body">
                    These aspects were ment to keep players and users engaged, build a comminity, and help fund the development of the more advanced game elements being developed.
                </h2>
                <h2 className="project2--body">
                    <b>So the main issue I had to try and solve was how do you keep players engaged when the "game" or "level" could be described as clicking a button, wait a few
                        seconds, and see if I won?
                    </b>
                </h2>
                <h2 className="project2--body">
                    <b>Requirements from client</b>
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Keep players engaged in a very simple and repatative "game".
                    </li>
                    <li className="project2--list-item">
                        Keep the artwork the focus and build a sense of excitement.
                    </li>
                    <li className="project2--list-item">
                        Make sure to add more tips and hints for players as to which Shogun characters could use the "Beast Forest".
                    </li>
                </ol>

                <br></br>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_assets.png"/>
                    <p className="project2--img-desc">Art assets provided to me to build the level, a main background with day and night hues, and icons for the different rewards.</p>
                </div>
                <br></br>
                <h2 className="project2--body">
                    Just like with the "Crafting" page I was provided with a few images and given the creative license to <b>create an experience that players would enjoy.</b>
                </h2>

                <h2 className="project2--body">
                    Since I had the two images a light and dark it gave me the idea to play with the colors a bit, when the player enters the "Beast Forest" I showed the brighter image
                    then slowly faded it darker to <b>start creating a sense of suspense and let the player know something else is about to come.</b>
                </h2>

                <h2 className="project2--body">
                    Then I created the "Welcome" text. Here we could greet the player, list the types of characters who could use the "Beast Forest", and <b>add a bit of lore
                    to keep building up a sense of excitement/adventure.
                    </b>
                    
                </h2>

                <h2 className="project2--body">
                    It was also important to add a "Skip" button so that returning players wouldn't have to wait through the welcome and intro screens.
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_loading.gif"/>
                    <p className="project2--img-desc">Here is an early prototype, welcoming the player, giving hints to the player but in a way that leads into story elements helping 
                    build some excitement, and finally sticking with the brand colors to show the "Select" buttonto get started and the "Skip" button to let players enter faster.</p>
                </div>

                <br></br>

                <h2 className="project2--body">
                    Once the player entered the forest, I used the same grid and modal layout used in other areas for consistency. I also added a pop up for players who enter but don't
                    have any Shogun characters that can be used explaining to the user why they couldn't continue. This was added based on user feedback from the "Crafting" page.
                </h2>

                <h2 className="project2--body">
                    Players could then select which Shogun they wanted to use leading to the confirm screen where they could see the Shoguns stats, the chance of sucess the SHogun had,
                    the cost to enter, and the "Enter" button.
                </h2>

                </div>
                
                <div className="project2--beast-forest-redo">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/no_character.png"/>
                    <p className="project2--img-desc">Based on user feedback from the "Crafting" page I added a screen for players who don't have eligable Shoguns explaining why
                    they can't continue.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_select.png"/>
                    <p className="project2--img-desc">Shogun select screen using the familar grid layout and basic stats.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_confirm.png"/>
                    <p className="project2--img-desc">Confirm screen shows additional stats giving the player a look at how successful they might be. Eventually 
                    players would be able to equip items that could boost those stats.</p>
                </div>
                </div>

                <div className="project2--phase3-container">

                <h2 className="project2--body">
                    The actual game part of the "Beast Forest" at this stage is very simple, the user enters the forest, selects, an eligable Shogun, confirms the
                    Shogun and pays.
                </h2>

                <h2 className="project2--body">
                    With such a simple process I really tried to darken and lighten the image, use text to tell a story, and create a few different result animations 
                    to make the experience a bit more exciting. Below is the Figma file used that shows the user flow and different outcomes.
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/forest_figma.png"/>
                    <p className="project2--img-desc">Screen shot of the Figma file showing the user flow and building the prototype.</p>
                </div>

                <br></br>

                <h2 className="project2--body">
                    I darkened the image quite a bit from the top to add a bit of suspense, then the text indicating what is 
                    happening bounces while the result is pending, and finally when the result is ready the text animates up from lower and also lightens the image back up.
                </h2>

                <h2 className="project2--body">
                    The darkness and bouncing progress text helps build a bit of suspense so the results text lifting up from the bottom and lightening the image should help 
                    build some hope and excitement for the player but leaves them waiting for just a second not knowing how well they did.
                </h2>

                <h2 className="project2--body">
                    Finally we get to the results. There were 3 outcomes, poor, good, and amazing. Since I brought the players hope and excitement up leading to the results
                    if the result was poor the reward image and text would slide back down and the image darken to symbolize disapointment.
                </h2>

                <h2 className="project2--body">
                    If the result is good, I added some rays of light coming out of the forest with a larger rewards icon to show the success of the player.
                </h2>

                <h2 className="project2--body">
                    And finally if the result is amazing, the text and large reward icon raise even higher and I created an explosion of light coming out of the forest.
                </h2>

                <div className="project2--crafting-design">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_raid.gif"/>
                        <p className="project2--img-desc">Create suspense with the darker background image and bouncing text.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_bad.png"/>
                        <p className="project2--img-desc">Example poor result, image stays dark, text drops and reward icon small to signal disapointment.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_ok.png"/>
                        <p className="project2--img-desc">Example good result, screen brightens with rays of light, larger rewards icon to signal success.</p>
                    </div>
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_good.png"/>
                        <p className="project2--img-desc">Example amazing result, text raised higher, larg reward icon, explosion of light to signal a great acheivement.</p>
                    </div>
                </div>
                
                <h2 className="project2--body">
                    After launching the Beast Forest the player feedback was great, the new pop up for players who didn't have a Shogun that could access the forest really helped
                    limit confussion, and with some of the rewards introducing a new item "The Wolf" it created huge incentives to play and replay.
                </h2>

                <h2 className="project2--body">
                    One bit of negative feedback I heard from users was that for players with lots of Shoguns looking to play over and over as much as they could, the elements added
                    to build suspense, the darkening of the image, the bouncing text, and the slight delay before the rewards took to long. For players replaying the forest a lot
                    they wanted a way to get to the results quicker.
                </h2>

                <h2 className="project2--body">
                    So after talking with users and keeping that feedback in mind, I began designing the "Tomb of the Undead King!"
                </h2>

                <br></br>

                </div>
                
                <div className="project2--phase2-container">

                <h1 className="project2--title">
                    Designing the Tomb of the Undead King
                </h1>

                <h2 className="project2--body">
                    The final level design I was in charge of was the "Tomb of the Undead King" which was going to be the first boss level. Again though like the Crafting page and the
                    Beast Forest this is a simple version to keep players engaged and help fund the development of the much more advanced game.
                </h2>

                <h2 className="project2--body">
                    This level is very similar to the Beast Forest but where I was testing new design ideas for equiping items and skiping through some of the slower parts. These ideas 
                    were being tested based on the user feedback and interviews conducted.
                </h2>

                <h2 className="project2--body">
                    So again I was given a main image to use as the background, I used the same Welcome message style as the Beast Forest, used the image to create the color pallet, 
                    the same grid and modal layout, and added different light elements to the image for the different results. 
                </h2>

                <div className="project2--crafting-design">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_intro.png"/>
                        <p className="project2--img-desc">Similar welcome meassage to the Beast Forest but used different colors to highlight which Shoguns could enter.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_equip.png"/>
                        <p className="project2--img-desc">The new Equip Shogun screen where players can pick from their inventory items to increase their chances of a better result. </p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_equiped.png"/>
                        <p className="project2--img-desc">New Confirm screen showing the equiped item and the stats boost that item provides.</p>
                    </div>
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_good.png"/>
                        <p className="project2--img-desc">Example of a great result, here the light is bursting out of the tomb and all of the lamps glow brighter.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    After completing the new designs for the Tomb of the Undead King we tested it with a few users who loved it, some did want a way to bulk select so they could 
                    select all the warriors at once and have them play all in one go. The project founder didn't want to explore that to much since we wanted players to spend more
                    time in the game and with the exception of a few power users players didn't have enough Shoguns that would make running through multiple times take too long.
                </h2>

                <h2 className="project2--body">
                    Below is the Figma screenshot shows of the Tomb of the Undead King user flow and what I built the prototype from.
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/undead_figma.png"/>
                    <p className="project2--img-desc">Screen shot of the Figma file showing the user flow and building the prototype.</p>
                </div>

                <br></br>

                <h2 className="project2--body">
                    This was the final level I design for the project which was never implemented. The users were really excited to see more development in the 3D
                    game and with the small size of the team and the worsening market conditions foucs was shifted in that direction.
                </h2>

                <h2 className="project2--body">
                    After leading the redesign and the new level designs the project was able to fix a lot of the major issues users were running into. The navigation
                    was fixed, all main areas were redesinged with the same layout for consistency, search and filter options were added, bulk actions could be performed
                    making it much easier for players to get the maximum results. And three new areas were designed increasing player retention, improving new player onboarding
                    and increase revenue for the project.
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