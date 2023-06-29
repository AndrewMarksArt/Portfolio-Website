import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study2.css";

export default function Project6() {
    return (
        <>
        <div className="project2--main-container">
            <div className="project2--phase3-container">
                <p className="project2--challenge">
                    Building & crafting new levels
                </p>
                <h1 className="project2--title">
                    Designing the "Crafting" page
                </h1>
                <h2 className="project2--body">
                    After a successful redesign of the main page, navigation, training grounds, and land pages the project founder approached me to help design 
                    the newest section of the game and site.
                </h2>
                <h2 className="project2--body">
                    Players would be able to use certain Shogun characters to craft special items they would be able to sell to other players or use on their characters
                    to increase rewards and play new levels.
                </h2>
                <h2 className="project2--body">
                    The main hurdle to overcome from the founder was he had commissioned art for the "Crafting" area that he didn't want to get lost, players were confused 
                    about if they could use the page and which characters could, and he wanted to create a sense of excitement and achievement.
                </h2>
                <h2 className="project2--body">
                    <b>Requirements from client</b>
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Keep the art the focus, don't lose or block the main image too much.
                    </li>
                    <li className="project2--list-item">
                        Help players understand which characters can access the page and what they can do.
                    </li>
                    <li className="project2--list-item">
                        With effectively only one main image and a few items, create a sense of excitement and achievement.
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
                    <b>Finally, I created the "Success!" screen, every crafting action will led to this page but it gives a feeling of accomplishment and wow!</b>
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
                    Lots of elements within the game are ultimately very simple concepts which is why the artwork and finding ways to create a sense of excitement is 
                    so important.
                </h2>
                <h2 className="project2--body">
                    <b>After delivering the initial designs to the project founder, he told me "I didn't know how describe what the 'Success!' screen should look 
                    like other than just WOW and the rays of light was exactly what I had in my mind but couldn't articulate" he was stoked, and new players would 
                    love it. </b>
                </h2>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/crafting_figma.png"/>
                    <p className="project2--img-desc">Here is a screenshot of the Figma deliverable of the final design showing all of the different screens and a 
                    basic user flow.</p>
                </div>
                <h2 className="project2--body">
                    After launch the feedback from users was great, they loved crafting page and within days thousands of items had been crafted and traded between players.
                </h2>
                <h2 className="project2--body">
                    One piece of feedback I took to heart was some players were still not sure why they couldn't use the crafting page, they didn't realize only Shogun 
                    who trained as "Artisan's”, or "Shinto Priest's" could craft items. <b>With this feedback in mind and interviewing a few users I created new loading 
                    and landing screens for the newer levels. These changes not only helped players understand the game better but also provided a way to build lore 
                    and story elements. </b>
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
                    Simply speaking many aspects of the Shogun War game can be boiled down to the player selecting a Shogun to use, rolling a dice or using some king 
                    of random number generator, then determine the outcome.
                </h2>
                <h2 className="project2--body">
                    These aspects were meant to keep players and users engaged, build a community, and help fund the development of the more advanced game elements being 
                    developed.
                </h2>
                <h2 className="project2--body">
                    <b>So the main issue I had to try and solve was how do you keep players engaged when the "game" or "level" could be described as clicking a button, 
                    wait a few seconds, and see if I won? </b>
                </h2>
                <h2 className="project2--body">
                    <b>Requirements from client</b>
                </h2>
                <ol className="project2--list">
                    <li className="project2--list-item">
                        Keep players engaged in a very simple and repetitive "game".
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
                    <p className="project2--img-desc">Art assets provided to me to build the level, a main background with day and night hues, and icons for the 
                    different rewards.</p>
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
                    <p className="project2--img-desc">Here is an early prototype, welcoming the player, giving hints to the player but in a way that leads into story 
                    elements helping build some excitement, and finally sticking with the brand colors to show the "Select" button to get started and the "Skip" button 
                    to let players enter faster.</p>
                </div>

                <br></br>

                <h2 className="project2--body">
                    Once the player entered the forest, I used the same grid and modal layout used in other areas for consistency. I also added a pop up for players who 
                    enter but don't have any Shogun characters that can be used explaining to the user why they couldn't continue. This was added based on user feedback 
                    from the "Crafting" page.
                </h2>

                <h2 className="project2--body">
                    Players could then select which Shogun they wanted to use leading to the confirm screen where they could see the Shoguns stats, the chance of success 
                    the Shogun had, the cost to enter, and the "Enter" button.
                </h2>
                <br></br>

                </div>
                
                <div className="project2--beast-forest-redo">
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/no_character.png"/>
                    <p className="project2--img-desc">Based on user feedback from the "Crafting" page I added a screen for players who don't have eligible Shoguns 
                    explaining why they can't continue.</p>
                </div>

                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_select.png"/>
                    <p className="project2--img-desc">Shogun select screen using the familiar grid layout and basic stats.</p>
                </div>
                <div className="project2--img-container">
                    <img className="project2--img" src="../img/case_studies/project2/beast_forest_confirm.png"/>
                    <p className="project2--img-desc">Confirm screen shows additional stats giving the player a look at how successful they might be. Eventually 
                    players would be able to equip items that could boost those stats.</p>
                </div>
                </div>

                <div className="project2--phase3-container">

                <h2 className="project2--body">
                    The actual game part of the "Beast Forest" at this stage is very simple, the user enters the forest, selects an eligable Shogun, confirms the
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
                    Finally, we get to the results. There were 3 outcomes, poor, good, and amazing. Since I brought the players hope and excitement up leading to the 
                    results if the result was poor the reward image and text would slide back down, and the image darken to symbolize disappointment.
                </h2>

                <h2 className="project2--body">
                    If the result is good, I added some rays of light coming out of the forest with a larger rewards icon to show the success of the player.
                </h2>

                <h2 className="project2--body">
                    And finally, if the result is amazing, the text and large reward icon rose even higher, and I created an explosion of light coming out of the forest.
                </h2>

                <div className="project2--crafting-design">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_raid.gif"/>
                        <p className="project2--img-desc">Create suspense with the darker background image and bouncing text.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_bad.png"/>
                        <p className="project2--img-desc">Example poor result, image stays dark, text drops and reward icon small to signal disappointment.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_ok.png"/>
                        <p className="project2--img-desc">Example good result, screen brightens with rays of light, larger rewards icon to signal success.</p>
                    </div>
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/forest_good.png"/>
                        <p className="project2--img-desc">Example amazing result, text raised higher, large reward icon, explosion of light to signal a great achievement.</p>
                    </div>
                </div>
                
                <h2 className="project2--body">
                    After launching the Beast Forest, the player feedback was great, the new pop up for players who didn't have a Shogun that could access the forest 
                    really helped limit confusion, and with some of the rewards introducing a new item "The Wolf" it created huge incentives to play and replay.
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
                    The final level design I oversaw was the "Tomb of the Undead King" which was going to be the first boss level. Again, though like the “Crafting” 
                    page and the “Beast Forest” this is a simple version to keep players engaged and help fund the development of the much more advanced game.
                </h2>

                <h2 className="project2--body">
                    This level is very similar to the Beast Forest but where I was testing new design ideas for equipping items and skipping through some of the 
                    slower parts. These ideas were being tested based on user feedback and interviews conducted.
                </h2>

                <h2 className="project2--body">
                    So again I was given a main image to use as the background, I used the same Welcome message style as the Beast Forest, used the image to create the color pallet, 
                    the same grid and modal layout, and added different light elements to the image for the different results. 
                </h2>

                <div className="project2--crafting-design">
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_intro.png"/>
                        <p className="project2--img-desc">Similar welcome message to the Beast Forest but used different colors to highlight which Shoguns could enter.</p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_equip.png"/>
                        <p className="project2--img-desc">The new Equip Shogun screen where players can pick from their inventory items to increase their chances of a better result. </p>
                    </div>

                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_equiped.png"/>
                        <p className="project2--img-desc">New Confirm screen showing the equipped item and the stats boost that item provides.</p>
                    </div>
                    <div className="project2--img-container">
                        <img className="project2--img" src="../img/case_studies/project2/undead_good.png"/>
                        <p className="project2--img-desc">Example of a great result, here the light is bursting out of the tomb and all of the lamp's glow brighter.</p>
                    </div>
                </div>

                <h2 className="project2--body">
                    After completing the new designs for the “Tomb of the Undead King” we tested it with a few users who loved it, some did want a way to bulk select 
                    so they could select all the warriors at once and have them play all in one go. The project founder didn't want to explore that too much since we 
                    wanted players to spend more time in the game and with the exception of a few power users’ players didn't have enough Shoguns that would make running 
                    through multiple times take too long.
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
                    This was the final level I designed for the project which was never implemented. The users were excited to see more development in the 3D game 
                    and with the small size of the team and the worsening market conditions focus was shifted in that direction.
                </h2>

                <h2 className="project2--body">
                    After leading the redesign and the new level designs the project was able to fix a lot of the major issues users were running into. The 
                    navigation was fixed, all main areas were redesigned with the same layout for consistency, search and filter options were added, bulk actions 
                    could be performed making it much easier for players to get the maximum results. And three new areas were designed increasing player retention, 
                    improving new player onboarding, and increasing revenue for the project.
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