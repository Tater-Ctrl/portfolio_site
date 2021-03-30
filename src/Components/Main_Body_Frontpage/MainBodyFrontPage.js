import React from 'react';
import './MainBodyFrontPage.css';
import StardewFishingJPG from '../../Resources/stardewfishing_small.jpg';
import BrainJam from '../../Resources/brainjam.jpg';
import './MainBodyFunctions.js';

var consoleText1 = false;
var consoleText2 = false;

class MainBodyFrontPage extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.consoleTextUnderline(this.console_text_one_underline);
        this.consoleTextUnderline(this.console_text_two_underline);
    }
    
    handleScroll = () => {
        if(this.consoleTextInViewport(0, this.console_text_one) && !consoleText1) {
            this.consoleTextAnim(this.console_text_one, this.console_text_one.innerHTML);
            consoleText1 = true;
        }
        if(this.consoleTextInViewport(0, this.console_text_two) && !consoleText2) {
            this.consoleTextAnim(this.console_text_two, this.console_text_two.innerHTML);
            consoleText2 = true;
        }
    }

    consoleTextAnim = (id, textArray) => {
        var element = id;
        element.innerHTML = '';
    
        var index = 0;
    
        var console_text_one = setInterval(() => {
            element.innerHTML += textArray[index];
            index++
            if(index >= textArray.length) {
                clearInterval(console_text_one);
            }
        }, 200);
    }
    
    consoleTextUnderline = (id) => {
        var underline = id;
        var underlineToggle = false;
    
        setInterval(() => {
            underlineToggle = !underlineToggle;
    
            if(underlineToggle) {
                underline.style.opacity = "1";
            } else {
                underline.style.opacity = "0";
            }
        }, 1000);
    }

    consoleTextInViewport(offset, id) {
        if(!id) return false;
        const top = id.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    render() {
        return (
            <div className="main_body_container">
                <div className="project_container">
                    <div className="main_project">
                        <div className="main_project_container">
                            <div id="main_project_element">
                                <h1 >Current Project</h1>
                                <p>
                                    I've taken an interest in Game Jams lately, currently participating in Brain Jam | March 2021. {"\n"}
                                </p>
                                <p>
                                    I've switched my focus from creating game mechanics, to now creating small scope games, and Game Jams present a perfect opportunity for that, as well as having the chance to collaborate with other like-minded individuals.
                                </p>
                                <p className="main_project_text_1280">
                                    On this particular Game Jam I will be collaborating with 1 other individual programmer, using Unity for a 2D Platformer game most likely.
                                </p>
                                <p className="main_project_text_1600">
                                    Finally collaborating also gives me the opportunity to brush up on Source Control and get more familiar working alongside others, and also accomodate for their ideas and wishes when it comes to game development while making something interesting.
                                </p>
                                <a href="home" >
                                    <h3 className="main_project_button">Read More</h3>
                                </a>
                            </div>
                            <img src={ BrainJam } alt="Participating in a Game Jam called Brain Jam" id="main_project_element"/>
                        </div>
                    </div>
                    <div className="container_title">
                        <div id="console_text_container">
                            <h1 ref={(el) => this.console_text_one = el}>Game Mechanics</h1>
                            <h1 ref={(el) => this.console_text_one_underline = el}>_</h1>
                        </div>
                    </div>
                    <div className="project_card_container">
                        <a href="home" className="project_card" id="stardew_valley_fishing">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </a>
                        <a href="home" className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </a>
                        <a href="home" className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </a>
                        <a href="home" className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </a>
                        <a href="home" className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </a>
                    </div>
                    <div className="container_title">
                        <div id="console_text_container">
                            <h1 ref={(el) => this.console_text_two = el}>Game Jams</h1>
                            <h1 ref={(el) => this.console_text_two_underline = el}>_</h1>
                        </div>
                    </div>
                    <div className="project_card_container">
                        <div className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </div>
                        <div className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </div>
                        <div className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </div>
                        <div className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </div>
                        <div className="project_card">
                            <img src={ StardewFishingJPG } alt="Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBodyFrontPage;