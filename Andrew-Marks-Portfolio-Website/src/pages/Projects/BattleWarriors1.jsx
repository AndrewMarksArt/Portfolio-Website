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
                <h2 className="project2--sub-head">
                    This is the first part of the Battle Warriors project, this is an end-to-end project covering initial product concept all the way through launch.   
                </h2>
                <h2 className="project2--sub-head">
                    You can find part 2 where I expanded on this project designing a video game using these characters &nbsp;  
                        <Link to="/battle-warriors-part-2" style={{ textDecoration: 'underline' }} className="project3--case-study-link">here.</Link>  
                </h2>
                <h1 className="project3--title">Battle Warriors Vikings of ETH: Design & Launch of a Generative NFT Collection and Gaming Ecosystem</h1>
                <h2 className="project3--sub-head">
                    In mid to late 2021 I suffered a serious back injury that made it so I was unable to work. The only thing that helped with the pain 
                    was drawing and making art and at the time I discovered NFT's and began designing characters for a NFT project.
                </h2>
                <h2 className="project3--sub-head">
                    As the creator and project owner I designed and created all the art assets for the generative NFT characters, built up a community 
                    with over 5,000 twitter followers and 3,000 Discord members, built a no code website to provide updates and showcase the project, and 
                    wrote a series of articles on medium about the project but also about the Play-2-Earn landscape.
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
                    As creator and project founder my goal was to see where opportunities in the market were but also talk to real users and see how I 
                    could create something to fill that opportunity and deliver value to users.
                </h2>
                <h2 className="project3--body">
                    Market and Business opportunities:
                </h2>
                <ol className="project3--list">
                    <li className="project3--list-item">
                        NFT's need to be more than just profile pictures (pfp's).
                    </li>
                    <li className="project3--list-item">
                        Access to live events and merch were the norm when delivering utility to holders but NFT's fit well with gaming and collaborating 
                        by giving holders IP rights.
                    </li>
                    <li className="project3--list-item">
                        Too many products launched and then didn't know what to do or had no model to generate future revenue.
                    </li>
                </ol>
                <h2 className="project3--body">
                    User needs: (what I kept hearing from other collectors and users I interviewed)
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
                    The first stage of the project was testing the concept, below are some early character sketches testing different facial expressions, 
                    hairstyles, items, and weapons, etc. When designing a generative NFT project you must be careful with the number of traits, too few 
                    and everything looks the same and there's not enough variability. But the other issues are too many traits, and everything becomes rare 
                    meaning nothing is rare. 
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
                    Early character sketches testing different traits and combos, I needed to see if it was possible for me to create enough different traits to create the
                    characters and all the different items would work together.
                </p>
            </div>

            <div className="project3--phase1-container">

                <h2 className="project3--body">
                    After some initial sketches I need to test if the characters could be randomly generated and if the images could be created from all different trait images.
                </h2>

                <h2 className="project3--body">
                    I wrote a simple python script to generate a sample Viking warrior and to get the images associated with the traits that character had to 
                    create the character image. Once I was able to create a randomly generated character, I expanded the script to test creating many characters 
                    and then building each of those characters.
                </h2>

                <div className="project3--test-gen-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/test_generated_viking.png"/>
                        <p className="project3--img-desc">First Viking character randomly generated and created from the individual trait images.</p>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/test_generation.png"/>
                        <p className="project3--img-desc">Adjusting the script to create many different characters with different traits.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    These sketches and sample generated Viking characters help show the MVP would work, I spent lots of time sharing progress pictures 
                    and ideas online talking to real users of other projects to get feedback and found there was a lot of excitement for the project.
                </h2>

                <h2 className="project3--body">
                    From there I needed to create all of the traits, clean up all the artwork, and start generating Viking warriors to make sure there was a 
                    good balance of traits. Below is an example of one of the final templates with the final artwork showing how I was able to build the 
                    characters that would be minted.
                </h2>


                <div className="project3--video-container">
                    <video src="../videos/example_viking.mp4" autoPlay playsInLine loop muted controls className="char-build-video"/>
                </div>
            </div>

            <div className="project3--phase1-container">
                <h1 className="project3--title">
                    Utility, Community, and Incentives
                </h1>
                <h2 className="project3--body">
                    One goal of the project was to try and create some fun competition by introducing different clans, these would be showcased with different banners and only our 
                    early supporters and minters of the original launch would get them. 
                </h2>

                <h2 className="project3--body">
                    Below is an example of a few of the different clan banners, this would try and create friendly competition between players and give extra 
                    benefits to our earliest users through staking and exclusive content.
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
                        Characters when minted would get clan banners, after talking to our users we picked a few popular projects that the banners would be nodes to.
                    </p>
                </div>

                <h2 className="project3--body">
                    From the very beginning I knew the characters needed to be upgradeable, if you minted a low level character with no weapons and played our 
                    early games you would be able to earn gold to buy item chests or craft new items to upgrade your characters making them stronger.
                </h2>

                <h2 className="project3--body">
                    Below are some examples of the level 1 common weapons and some item chests, along with earning gold to get item chests early community 
                    members who got on the whitelist to be some of the first minters would get extra items. 
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
                    Next up are some examples of all the different "Helmet" items and how weapons could be leveled up from throwing axes to power axes, one handed 
                    hammers to Warhammers, and how swords could be leveled up from basic to powered to level 2.
                </h2>

                <div className="project3--mocks-container">
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/helmets.png"/>
                        <p className="project3--img-desc">Here are different Helmets all the warriors could get, a basic metal cap, to horned helmets with broken or 
                        downward horns, to skull masks, winged helms, and crowns for the highest-level high kings and queens.</p>
                    </div>
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/axes.png"/>
                        <p className="project3--img-desc">These are examples Axes, from a throwing axe that can be held in either hand, to a two handed axe, then a heavy 
                        axe, and finally the power axe that has special abilities from a power stone which are unique items in the game with magical abilities.</p>
                    </div>
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/hammers.png"/>
                        <p className="project3--img-desc">These are the different hammers, the small hammer is based on Thor’s hammer and can be held in the main or off 
                        hand, then is the two handed Warhammer, and powered hammer using a power stone.</p>
                    </div>
                    <div>
                        <img className="project3--img-mobile" src="../img/case_studies/project3/swords.png"/>
                        <p className="project3--img-desc">Here is the basic sword, this is based on my favorite game Rouge Legacy, the basic sword can be upgraded with 
                        a powered stone making it stronger with magical powers, and then if you collect many of the same items, they can be leveled up like this level 
                        2 sword.</p>
                    </div>
                </div>


                <h2 className="project3--body">
                    So now that I had all the different items, weapons, stats, etc. I wanted to create a special trait that will unlock future content only if you have 
                    these traits to incentives collecting and trading between players.
                </h2>

                <h2 className="project3--body">
                    Backgrounds aren't just for looks; different color backgrounds provide boosts to the powers the character has but locations will unlock special levels 
                    in upcoming games. The first mini game I am creating is a side scrolling platformer and only Vikings with location backgrounds will be able to access 
                    those corresponding levels.
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
                    These are a select few example characters taken from the final collection showing the different items, banners, backgrounds, and traits. These 
                    are a good example of the diversity of the characters in the collection and how players might want to style or build their characters.
                </h2>

                <h2 className="project3--body">
                    The final collection consists of 1,111 randomly generated Viking warriors which was the culmination of 100's of hours of work. This is just version 1
                    and there is a version 2 in the works which are a bit weaker and have less items but will start to introduce next character classes like Pirates and Knights.
                </h2>

                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://opensea.io/collection/warriors-of-ether-viking" target="_blank">
                        Here is the official collection on OpenSea.
                    </a>
                </h2>

                <br></br>

            </div>

            <div className="project3--phase2-container">
                <br></br>
                <p className="project3--challenge">
                    Community Building, Website, and dApp to mint.
                </p>
                <h1 className="project3--title">
                    Website and Minting Site Wireframes
                </h1>
                <h2 className="project3--body">
                    As development was moving along I needed to create a website that would have the official roadmap, mint details, official links, etc. 
                </h2>
                <h2 className="project3--body">
                    Because of time constraints, I decided to use Squarespace to build a no code site. I created some simple wireframes about what the structure 
                    needed to look like, and I do have a bit of experience with HTML, CSS, etc. I felt to meet deadlines and create a successful launch a no code 
                    simple site was the best option.
                </h2>
                <h2 className="project3--body">
                    Below are the wireframes for the main site and the minting site, I wanted to use a large visual to bring the user in with a strong CTA. During 
                    development the CTA button would bring visitors to the Discord where we could try and get them to join the community. That would be followed by 
                    a small about us, key dates, and a simple road map, and then some examples of the artwork.
                </h2>
                <h2 className="project3--body">
                    For the Minting site I worked with my friend who developed a simple React app which would show how many Vikings were left, a way to connect 
                    the user’s wallet, and quick mint buttons to mint 1, 3, or 5 Vikings. I also needed to have some disclaimers and advice about how to set the 
                    gas fees for Ethereum.
                </h2>

                <div className="project3--redesign-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/site_wireframe.png"/>
                        <p className="project3--img-desc">Main website wireframe, staring with the main background image and CTA, leads into a gallery and project roadmap,
                        a large gallery to show off the current artwork, and then links to all socials.</p>
                    </div>
                

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/dapp_wireframe.png"/>
                        <p className="project3--img-desc">Design for simple dApp to mint the Viking characters. Main panel with the number of Vikings left, gifs 
                        on the side that show example Vikings so users can see what they might mint, once connected quick mint buttons and warnings about Ethereum.</p>
                    </div>

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/bw_site.png"/>
                        <p className="project3--img-desc">What the main site looked like, large Viking village image, title and CTA to launch minting site, before mint this would push 
                        to our social media links to try and build followers.</p>
                    </div>

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/bw_dapp_site.png"/>
                        <p className="project3--img-desc">Minting site showing how many Vikings are left, example Vikings on the sides to show users what they could mint, and quick 
                        mint buttons letting users know they can mint 1, 3, or 5 at a time.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    he site was a great way to onboard Web2 users, help get the roadmap and articles out, and drive traffic to our social medial accounts. Before launching the mint 
                    site this helped me grow the Discord community over 200% to 3,000 members, and our Twitter over 150% to more than 5,000 followers.
                </h2>

                <div>
                    <h1 className="project3--title">
                        Keeping users up to date and bringing them into the design process.
                    </h1>
                    <h2 className="project3--body">
                        As I was building the project I was constantly working with the community, getting feedback, and making iterative changes. At the beginning there was some 
                        scope creep as more and more features and content were added. This led to some confusion among new members as it became difficult to keep all the documentation current.
                    </h2>

                    <h2 className="project3--body">
                        One way I felt that worked well was creating a series of Medium articles that laid out the vision for the project, a lose timeline, new details as development 
                        continued, and any important updates. We could then link to these from our site and our social media accounts which was helpful to new members.
                    </h2>

                    <div className="project3--medium-links-container">
                        <div className="project3--img-container">
                            <a href="https://battlevikingnft.medium.com/battle-warriors-vikings-of-eth-553df4cae393" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/bw_banner.png"/>
                                <p className="project3--img-desc">Very short article introducing the project, and trying to get readers to join our Discord server where we were 
                                building our community.</p>
                            </a>
                        </div>

                        <div className="project3--img-container">
                            <a href="https://battlevikingnft.medium.com/looks-rare-or-does-it-fc49b56dcc6a" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/power_stones.png"/>
                                <p className="project3--img-desc">Short article on rarity, the power stones, upgrades and customizations, and again trying to get the reader to join our Discord.</p>
                            </a>
                        </div>

                        <div className="project3--img-container">
                        <a href="https://battlevikingnft.medium.com/whats-in-a-rank-281d0aaaa9ed" target="_blank">
                                <img className="project3--medium-img" src="../img/case_studies/project3/stats_card.png"/>
                                <p className="project3--img-desc">More detailed breakdown on how the characters would work, covering ranks, stats, items, and levels.</p>
                            </a>
                        </div>
                    </div>

                    <h2 className="project3--body">
                        In addition to the Medium articles, we held some AMA's and took questions from the community to create an FAQ. Here is the old official site, 
                        I'm currently in the process of transferring the content to our new site as I build out the next stage of the project but have left this one up so 
                        people could see how far the project has come.
                    </h2>

                    <div className="project3--site-links-container">
                        <div className="project3--site-img-container">
                            <a href="https://www.battlewarriors.io" target="_blank">
                                <img className="project3--site-img" src="../img/case_studies/project3/bw_site.png"/>
                                <p className="project3--img-desc">You can see the old official page here, there is a new site being built to better fit the new 
                                project content but this site will stay up so everyone can see how far the project has come.</p>
                            </a>
                        </div>
                    </div>

                    <br></br>

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
                    After finishing the Art work, and creating the site and social media account, I experimented with some Google Collab Notebooks using python 
                    to randomly generate the Viking characters and metadata.
                </h2>

                <h2 className="project3--body">
                    Below is a link to an early notebook that you can play around with and generate your own army, and again a link to the official collection on OpenSea.
                </h2>

                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://colab.research.google.com/drive/1nEi4GZ3nvS39wP7S1XKtQcEkcbsCPH8U?usp=sharing" target="_blank">
                        You can see the Google Collab Notebook I used to test generating Vikings and traits here.
                    </a>
                </h2>
                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://opensea.io/collection/warriors-of-ether-viking" target="_blank">
                        Here is the official collection on OpenSea.
                    </a>
                </h2>

                <br></br>

                <div className="project3--traits-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/set_traits_1.png"/>
                        <p className="project3--img-desc">Screen shot from the notebook that sets the number of Vikings and creates lists for the traits.</p>
                    </div>
                

                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/set_traits_2.png"/>
                        <p className="project3--img-desc">More traits being set up, when the main function to create Viking is called these will be randomly picked to 
                        build the characters.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    After generating Viking characters I created a Pandas Dataframe, set the columns, and printed out the first 5 rows to see how things were looking.
                </h2>

                <div className="project3--wide-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/df_head.png"/>
                        <p className="project3--img-desc">Print out of the new Dataframe, checking to make sure the column names are correct, and to see if there are any 
                        obvious errors.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    After checking the data I realized there were a few mistakes or items I wanted to change, some of the traits clashed a bit more than expected so it took 
                    some cleaning to correct those.
                </h2>

                <h2 className="project3--body">
                    After cleaning the Dataframe was saved as a cvs file and I brought it into excel to do some analysis and build some tables.
                </h2>

                <div className="project3--counts-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/bg_counts.png"/>
                        <p className="project3--img-desc">Tables created to look at the Background trait, examining the counts of each and the percentage which gives an insight into 
                        the rarity.</p>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/counts_2.png"/>
                        <p className="project3--img-desc">Some more tables look at the various traits and rarities, I'm checking to make sure I like the balance and nothing seems out of 
                        whack. These are a bit misleading since they combine Male and Female characters but it gives a good overview.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Once I break down the basic traits, I'm able to see how the balance is looking, I needed to make a few adjustments and did this process a few times before I found 
                    the final mix I really liked. It was difficult finding the balance of randomly generated characters with manual adjustments, but the end result was great.
                </h2>

                <h2 className="project3--body">
                    After the basic traits were finished, I turned to the weapons, and this is where things got the most complicated. There are tons of different combinations 
                    which is great but creates an issue where everything becomes rare which isn't great but since the plan is to allow players to grow and customize their Vikings 
                    and the base traits have good rarities it’s not a huge issue.
                </h2>

                <div className="project3--weapon-count-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/weapon_count_1.png"/>
                        <p className="project3--img-desc">Each Viking has a main and offhand that they can use to hold weapons, if the weapon is a 2 handed weapon, they will only 
                        have a main weapon. Due to all the different weapon variations everything is rare, but if we group things by level or class of weapon the rarity 
                        distribution looks a bit better.</p>
                    </div>
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/weapon_count_2.png"/>
                        <p className="project3--img-desc">Digging into the off hand weapons and seeing the rarity of Vikings with matching main and off hand weapons.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Data has now been cleaned, rarities look good, and traits balanced so it was time to create the metadata and build the images.
                </h2>

                <h2 className="project3--body">
                    Below is an example of one of the Female Vikings picked from the Dataframe and the image generated from the traits. After running a few more tests the 
                    metadata was generated, the images created and saved to IPFS using pinata.
                </h2>

                <div className="project3--weapon-count-container">
                    <div className="project3--img-container">
                        <img className="project3--img" src="../img/case_studies/project3/viking_113.png"/>
                        <p className="project3--img-desc">Example female Viking from the dateframe, checking that the image matches the traits and there are no 
                        glaring issues.</p>
                    </div>
                </div>

                <h2 className="project3--body">
                    Once finished I was able to get ready for launch and minting, unfortunately due to my back surgery and some health complications the project was delayed 
                    and eventually launched as a free mint where users just needed to pay the gas for the mint transaction.
                </h2>

                <h2 className="project3--body">
                    Once the mint was finished I was able to start building the mini game which is still in development currently.
                </h2>

                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://colab.research.google.com/drive/1nEi4GZ3nvS39wP7S1XKtQcEkcbsCPH8U?usp=sharing" target="_blank">
                        You can see the Google Colab Notebook I used to test generating Vikings and traits here.
                    </a>
                </h2>
                <h2 className="project3--body">
                    <a className="project3--link-to-button" href="https://opensea.io/collection/warriors-of-ether-viking" target="_blank">
                        Here is the official collection on OpenSea.
                    </a>
                </h2>
                <br></br>

                <h1 className="project3--title">
                    Next Steps
                </h1>

                <h2 className="project2--sub-head">
                    Now that the base characters were finished the next step was to start building a simple game where players could use their Vikings to play, the case study for part 2 is&nbsp;  
                        <Link to="/battle-warriors-part-2" style={{ textDecoration: 'underline' }} className="project3--case-study-link">here.</Link>  
                </h2>

                <div className="projec4--footer"> 
                    <Link to="/projects" style={{ textDecoration: 'underline' }} className="project3--back-to-button">Back to projects</Link>
                    <br></br>
                </div>
            </div>

        </div>
    )
}
