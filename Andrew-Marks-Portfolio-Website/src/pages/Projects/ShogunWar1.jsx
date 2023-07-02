import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study2.css";

export default function Project2() {
    return (
        <>
        <div className="project2--main-container">
            <div>
                <img className="project2--larg-img" src="../img/case_studies/project2/shogun_main_page copy.webp" />
            </div>
            <div className="project2-headline-container">
                <h2 className="project2--sub-head">
                    This is the first project I did for Shogun War, the focus was on auditing the UX, updating the UI to fix issues users were having, and
                    help streamline the onboarding process.  
                </h2>
                <h2 className="project2--sub-head">
                    You can find part 2 where I designed new levels and experiences for players&nbsp;  
                        <Link to="/shogun-war-part-2" style={{ textDecoration: 'underline' }} className="project3--case-study-link">here.</Link>  
                </h2>
                <h1 className="project2--title">Enhancing the Adventure</h1>
                <h2 className="project2--sub-head">
                    In Early 2022 a new Play-2-Earn game ShogunWarNFT launched with great retro artwork and an ambitions roadmap. Focused on creating an amazing and 
                    immersive world there was lots of different elements that started to conflict with each other leading to some issues for players. 
                </h2>
                <h2 className="project2--sub-head">
                    I was brought on by the project founder to help redesign the player experience to help onboard new players, bring more consistency to the game, 
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
                        For players with lots of Shogun Warriors -- way to many transaction, very hard to see all of their warrior's, what can be done, 
                        and manage their army.
                    </li>
                    <li className="project2--list-item">
                        Mechanics & gameplay a bit confusing, not sure how to best use their Shoguns.
                    </li>
                </ol>

            </div>

            <div className="project2--img-group-container">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_landing copy.webp"/>
                    <p className="project2--img-desc">Old landing page where the 'Tutorial' button is non-working (it was a place holder but not implemented yet),
                     and overall this screen is not really necessary</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_training copy.webp"/>
                    <p className="project2--img-desc">
                        Art takes up most of the screen hiding players shoguns and its not clear the user needs to scroll to see everything. On smaller screens 
                        the art takes up the whole screen and again no indication the users can scroll.
                    </p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_land copy.webp"/>
                    <p className="project2--img-desc">Players have to scroll horizontally but again no indication, and there are different actions that can be taken 
                    on each land but no indication for the user which land needs attention or has available actions.</p>
                </div>
            </div>

            <div className="project2--phase1-container">
                <h1 className="project2--title">
                    Quick fixes that address user's main concerns 
                </h1>
                <h2 className="project2--body">
                    First impressions matter a lot, and we need to fix the landing page -- colored CTA button, disable tutorial and add a coming soon, move the whitepaper
                    to where twitter and discord are. Using hierarchy we can draw the users into the game quicker, disable the non-working button but still let the users 
                    know new features are coming soon, and move the whitepaper button to the same level as community links since it takes the player away from the game 
                    and most users didn't really care about it.
                </h2>

                <h2 className="project2--body">
                    Ultimately after talking with project founder, we decided to test removing this landing page and bringing the users right into the game where they 
                    could still access the whitepaper, twitter, and discord links.
                </h2>
            
                <div className="project2--landing-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/old_landing_lrg copy.webp"/>
                        <p className="project2--img-desc">old landing page with broken buttons, whitepaper that takes them away from the game, & no link to 
                        community/socials.</p>
                    </div>
                

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/new_landing copy.webp"/>
                        <p className="project2--img-desc">Simple redesign of landing page, getting player into the game quicker, let them know new features 
                        are coming soon, and links to the community and socials.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    After conducting the site audit and finding the navigation issue I joined the projects discord server and talked with a few dozen players. 
                    <b> The single biggest complaint and issue players had was navigating the site.</b>
                </h2>

                <h2 className="project2--body">
                    Below is the original site and the simple side navigation menu I created which can be expanded and collapsed using a 'Hamburger' icon that 
                    is very familiar to players.
                </h2>

                <h2 className="project2--body">
                    Additionally I grouped areas together based on their content and added some arrows to let the user know where they are currently.
                </h2>

                <div className="project2--travel-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/home_no_menu copy.webp"/>
                        <p className="project2--img-desc">Old world map, no menu so players would have to click around to each different area & with hidden areas some players
                        will miss them completely.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/home_quicktravel copy.webp"/>
                        <p className="project2--img-desc">Using a hamburger menu icon that will be familiar to all players, I created a simple menu that shows the players  
                        all the different areas they can travel to, breaks down the links into categories, & can color/highlight new areas or areas we want player to 
                        explore.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    One issue that the founder was trying to overcome was that the game didn't work on mobile or small screens. He tried communicating this to players 
                    but some players and lots of new players would try to visit and play on their phones. <b>One of my tasks was to create concepts for mobile layouts 
                    that transformed the interactive map into something easier to use on small screens but still celebrated the art and sense of adventure the map 
                    conveyed. </b>
                </h2>

                <div className="project2--mobile-container">
                    <div className="project2--portrait-container">
                        <img className="project2--img-mobile" src="../img/case_studies/project2/landing_mobile copy.webp"/>
                        <img className="project2--img-mobile" src="../img/case_studies/project2/home_mobile copy.webp"/>
                        <img className="project2--img-mobile" src="../img/case_studies/project2/home_mobile_menu copy.webp"/>
                    </div>
                    <div className="project2--landscape-container">
                        <img className="project2--img-mobile" src="../img/case_studies/project2/world_landscape copy.webp" />
                        <img className="project2--img-mobile" src="../img/case_studies/project2/map_landscape copy.webp" />
                    </div>
                </div>

                <h2 className="project2--body">
                    The landing page translated well to the smaller screens and formed the starting point for the mock ups.
                </h2>

                <h2 className="project2--body">
                    I created cards with art from the original map which is used as a background to keep the player feeling that they are in a large immersive world. 
                    The cards also allow for easy navigation and are familiar to users so a new player would be able to figure out how to navigate the world very quickly.
                </h2>

                <h1 className="project2--title">Nudges, tips, & exploration.</h1>
                <div className="project2--tip-container">
                    <img className="project2--img-tip" src="../img/case_studies/project2/bounce_tip.gif"/>
                    <p className="project2--img-desc">Example nudge and tip to help new players find their way around the map -- main building label has a slight bounce, 
                    lighten the text of other labels and add a description to the label when hovering.</p>
                </div>

                <br></br>

                <h2 className="project2--body">
                    When new players join and get started there can be a lot to take in, by adding simple animations we can nudge players where we want them to go & provide 
                    useful tips. We must be careful not tell the players where to go all the time since exploration is part of the experience but when getting started or when 
                    new areas open it could help get them into the game faster with less frustration.
                </h2>
                <br></br>

            </div>

            <div className="project2--phase2-container">
                <p className="project2--challenge">
                    Balance & Concistency
                </p>
                <h1 className="project2--title">
                    Redesigning areas with a consistent design
                </h1>
                <h2 className="project2--body">
                    <b>The second largest complaint from players was the inconsistency in the design of different areas. </b> It added confusion and lead to players
                     missing certain things they could do or not understand why they couldn't access certain areas.  
                </h2>
                <h2 className="project2--body">
                    Additionally for players who had lots of Shogun the design made it very difficult to use all of them, collect rewards, upgrade land, etc. So, I 
                    <b> needed to try and find some balance for players who were just getting started and those who were the most active users.</b>
                </h2>
                <h2 className="project2--body">
                    Below are screen shots of the 'Training Grounds', 'Land Manager', 'Bakuto Den', and a 'Town Hall Election' -- each area looks very different and requires 
                    different actions from the user to navigate through or use leading to confusion and frustration.
                </h2>

                <div className="project2--redesign-container">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/training_redo copy.webp"/>
                        <p className="project2--img-desc">The original design was to highlight the art, this pushed the players characters to the bottom and in some cases users
                        didn't know where the characters were.</p>
                    </div>
                

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/land_redo copy.webp"/>
                        <p className="project2--img-desc">The original design again highlighted art but pushed players lands to the top and required horizontal scroll. 
                        There was also no way to filter or know which land needed the players’ attention.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/den_redo copy.webp"/>
                        <p className="project2--img-desc">One of only two sections that launched a pop-up modal and originally had no way to close, also a bit crowded and 
                        hard to see all the information.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/townhall_redo copy.webp"/>
                        <p className="project2--img-desc">The other pop up that originally had no way to close, very different look that strays away from the rest of 
                        the game.</p>
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
                        The focus of the whole game was highlighting the art and immersing the player in the atmosphere the art created. However, the original design 
                        took up most of the screen with nice art that didn't actually do anything. Players had to search and scroll to find where they needed to go and 
                        had no way of organizing their characters.
                    </h2>
                    <h2 className="project2--body">
                        <b>My design focused on a style that could be used across all areas so no matter where a user went they would know how to navigate and complete tasks.</b>
                    </h2>
                    <h2 className="project2--body">
                        <b>Additionally, I focused on adding new components like sorting and filtering, as well as quick claim buttons to help users accomplish all 
                        tasks faster and more conveniently.</b>
                    </h2>
                </div>
            </div>
                <div>
                    <div className="project2--new-design-container">

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/old_training_full copy.webp"/>
                            <p className="project2--img-desc">Here is the original design where the art takes up most and sometimes the whole screen making it 
                            difficult for the player to figure how to complete tasks.</p>
                        </div>

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/new_training copy.webp"/>
                            <p className="project2--img-desc">In this redesigned page the elements would animate in so we can show off the art but also show the player their characters,
                            help them filter and sort, and complete tasks faster.</p>
                        </div>

                        <div className="project2--img-container">
                            <img className="project2--img" src="../img/case_studies/project2/training_details copy.webp"/>
                            <p className="project2--img-desc">The redesigned details page allows for easy navigation between characters and a quick way back to were the player was 
                            before.</p>
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
                    However, because there is so much to do here, and it requires the players to complete many tasks sometimes daily and can be very cumbersome and 
                    frustrating. <b> My focus on the re-design was to stick with the same grid and modal design from the 'Training Grounds' as well as add components 
                    to help filter, sort, and batch tasks players needed to complete.</b>
                </h2> 

                <h2 className="project2--body">
                    One of the biggest complaints players had was as they grew their armies and acquired more land it became almost impossible to complete the needed tasks. 
                    With the original design if you had built up a dozen pieces of land or more you would have to go to each one directly to claim rewards and have no way 
                    to keep track of how much rewards you could claim.
                </h2>
                <h2 className="project2--body">
                    <b>It was critical to be able to see all the rewards available from all land and claim it all at once with one button click, for other tasks like 
                        upgrading, or hiring defenders the sort and filter components quickly let players find the lands that needed attention. </b>
                </h2>
            </div>

            <div className="project2--new-design-container">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/old_land_full copy.webp"/>
                    <p className="project2--img-desc">Here is the original land page, players would have to scroll horizontally with no indication of what’s available, 
                    then click on each one to see if anything can be done</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/new_land copy.webp"/>
                    <p className="project2--img-desc">New design using the same grid layout as the "Training Grounds", a sort and filter bar to help players organize their land, 
                    and a total rewards button that shows the current total rewards and lets the player claim all of them with one click.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/land_details copy.webp"/>
                    <p className="project2--img-desc">The details section for each land was expanded and a modal for consistency with the "Training Grounds", shows all actions the 
                    player can take, and allows for quick navigation between different 'Lands'.</p>
                </div>

                <br></br>
            </div>

            <br></br>


            <div className="project2--phase3-container">
                <br></br>
                <h1 className="project2--title">
                        User Feedback and Next Steps
                    </h1>
                    <h2 className="project2--body">
                        By using a grid layout with modals for more details players were able to access all of their Shoguns and Land much easier, 
                        filter and sort options along with bulk actions turned tedious tasks that were leading to players leaving in to much more 
                        manageable ones which boosted retention.
                    </h2>

                    <h2 className="project2--body">
                        Now that most of the major pain points users had complained about were fixed I was tasked by the team to design and create 
                        3 new levels. The "Crafting" page, the "Beast Forest", and the "Tomb of the Undead King".
                    </h2>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project6/levels_banner copy.webp"/>
                        <br></br>
                    </div>

                    <h2 className="project2--body">
                        You can see Part 2 and the level design process&nbsp;  
                        <Link to="/shogun-war-part-2" style={{ textDecoration: 'underline' }} className="project3--case-study-link">here.</Link> 
                    </h2>
                    

                    <Link to="/projects" style={{ textDecoration: 'underline' }} className="project2--back-to-button">Back to projects </Link>
                    
                    <div>
                        <br></br>
                    </div>
                </div>

        </div>
        </>
    )
}