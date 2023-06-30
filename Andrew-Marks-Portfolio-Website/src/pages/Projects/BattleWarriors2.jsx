import React from "react";
import ContactMe from "../../components/ContactMe";
import { Link } from "react-router-dom";
import "./case_study3.css";

export default function Project1() {
    return (
        <div className="project3--main-container">
            <div>
                <img className="project3--larg-img" src="../img/case_studies/project1/mini_game_banner.png" />
            </div>

            <div className="project3--phase1-container">
                    <br></br>
                    <p className="project3--challenge">
                        The game being designed is related to the Battle Warriors project, you can see that case study&nbsp;  
                            <Link to="/battle-warriors-part-1" style={{ textDecoration: 'underline' }} className="project3--case-study-link">case study here.</Link>
                    </p>
                    <br></br>
                    <h1 className="project3--title">
                        Survival Grounds side scrolling mini game.
                    </h1>
                    <h2 className="project3--body">
                        The main purpose of the Battle Warriors project was to create a gaming ecosystem with lots of different games where holders get special perks, access, 
                        and rewards.
                    </h2>
                    <h2 className="project3--body">
                        The first game is called the "Survival Grounds", a side scrolling platformer where players can control "Ragnar" our main character as they try to avoid 
                        axes, arrows, spikes, pits, and more.
                    </h2>
                    <h2 className="project3--body">
                        The big challenge to creating a game like this is how to balance access, many other games made it so you have to own a certain NFT to access the game 
                        and after playing there were large cool downs. This is fine for players with lots of characters but for new players or others with just 1 or 2 it creates 
                        a situation where most players will be able to play for very short periods of time and then have nothing to do.
                    </h2>

                    <div className="project3--game-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/game_home.png"/>
                            <p className="project3--img-desc">Here is the welcome screen for the game, I want to get the player into the game quickly so "Begin Training!" 
                            is the focus.</p>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        And here are some examples of obstacles the player will have to avoid and get through.
                    </h2>

                    <div className="project3--ex-levels-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/ex_spikes.png"/>
                            <p className="project3--img-desc">Players will have to figure out how to get past spike pits with little room for error.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/ex_arrow.png"/>
                            <p className="project3--img-desc">Players will also have to dodge arrows along with the spikes and pits.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/ex_arrow_axes.png"/>
                            <p className="project3--img-desc">Axes are also thrown at players that they must dodge and when they land they become like spikes.</p>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        For players who have connected their wallets and have Vikings, they will be able to select which one they want to use, the rank will correspond  
                        to the number of hearts the player gets. The player will then be able to select which power they want to use to boost their Viking.
                    </h2>

                    <div className="project3--char-selects-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/char_select.png"/>
                            <p className="project3--img-desc">The player can see the Vikings they have available, here the player can see the ranks and number of 
                            hearts the Viking will get.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/char_confirm.png"/>
                            <p className="project3--img-desc">Based on the items the Viking has certain powers that are available to players and they can choose  one to boost their 
                            Viking.</p>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        The 9 power stones drive so many elements throughout the Battle warrior’s ecosystem and in this game gives players a power if their Viking has any 
                        items powered by 1 of the stones. 
                    </h2>

                    <h2 className="project3--body">
                        To help explain all the different powers and abilities these help screens were created and could be used as a tutorial whenever the 
                        player has any questions.
                    </h2>

                    <div className="project3--ex-levels-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help1.png"/>
                            <p className="project3--img-desc">Explaining the power stones background.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help2.png"/>
                            <p className="project3--img-desc">A breakdown of each specific stone and the ability it gives the player.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help3.png"/>
                            <p className="project3--img-desc">Breaking down and explaining the abilities the powers give to Arrows.</p>
                        </div>
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help4.png"/>
                            <p className="project3--img-desc">Breaking down and explaining the abilities the powers give to Axes.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help5.png"/>
                            <p className="project3--img-desc">Showing the different obstacles, the player will have to avoid.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/help6.png"/>
                            <p className="project3--img-desc">In addition to the main help screen, when picking a power to use players can check to see what that 
                            power does.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="project3--title">
                            What if I don't have any Vikings?
                        </h1>
                        <h2 className="project3--body">
                            Gaming provides a unique opportunity to onboard new users to Web3 but to do that we need to make our products available to everyone.
                        </h2>

                        <h2 className="project3--body">
                            Design notes & ideas:
                        </h2>
                        <ol className="project3--list">
                            <li className="project3--list-item">
                                Need to offer a free to play mode that can help bring new players.
                            </li>
                            <li className="project3--list-item">
                                Allow players to play a lot, share with their friends, and challenge each other.
                            </li>
                            <li className="project3--list-item">
                                Create incentives to convert casual players who aren't into Web3 into new crypto users.
                            </li>
                        </ol>

                        <h2 className="project3--body">
                            A common question I heard all the time was if these characters are minting for $100's (when the NFT bull market was in full swing this happened 
                            with lots of games) and I can't afford 1 or can only afford 1 or 2, how can I still play?
                        </h2>

                        <h2 className="project3--body">
                            It became clear that I needed to create a free to play mode to increase the potential number of players and onboard new community members. In free 
                            to play mode, the player gets to reveal 3 random Vikings from the collection and select 1 to use.
                        </h2>

                        <div className="project3--ex-levels-container">
                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/free_chars.png"/>
                            <p className="project3--img-desc">The 3 Vikings the player can choose from are hidden at first.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/free_char_select.png"/>
                            <p className="project3--img-desc">The cards are flipped over to reveal the Vikings they can select from.</p>
                        </div>

                        <div className="project3--img-container">
                            <img className="project3--img" src="../img/case_studies/project3/free_char_confirm.png"/>
                            <p className="project3--img-desc">Once selected they can click "play" to start the game.</p>
                        </div>
                    </div>

                        <h2 className="project3--body">
                            Having this free play mode allows new players to discover the project, see some of the art work, play the game and have some fun.
                        </h2>

                        <h2 className="project3--body">
                            After playing the player will see a popup to push them to mint a Viking if there are any still left to mint, or if the one they used is 
                            held by someone else it will link to that Viking on OpenSea or another NFT exchange.
                        </h2>

                        <div className="project3--video-container">
                            <video src="../videos/free_play_prototype.mp4" autoplay playsInline loop muted controls webkit-playsInline className="free-play-video"/>
                        </div>

                        <h2 className="project3--body">
                            Above shows the free play mode character select screen, the cards starting unrevealed give a sense of excitement as they are flipped 
                            over. Once revealed I show the whole Viking to showcase the art before animating the stats in. Additionally, the borders are different 
                            colors to signify rarity.
                        </h2>

                        <h2 className="project3--body">
                            Below is the Figma file I've created to build out the new game and character select screens. The game is currently still being developed in Unity 
                            with the plans to launch a mobile game later this year.
                        </h2>

                        <div className="project3--video-container">
                            <img className="project3--img" src="../img/case_studies/project3/figma_game.png"/>
                        </div>

                        <h2 className="project3--body">
                            As this game is being developed I am also expanding the Battle Warrior ecosystem with the "Quest for Valhalla" NFTs and game. You can read that&nbsp;
                            <Link to="/battle-warriors-part-1" style={{ textDecoration: 'underline' }} className="project3--case-study-link">case study here.</Link> 
                            
                        </h2>

                        <div className="projec4--footer"> 
                            <br></br> 
                            <Link to="/projects" style={{ textDecoration: 'underline' }} className="project3--back-to-button">Back to projects</Link>
                            <br></br>
                        </div>

                    </div>
                </div>
        </div>
    )
}
