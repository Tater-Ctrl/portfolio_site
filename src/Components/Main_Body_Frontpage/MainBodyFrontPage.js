import React from 'react';
import './MainBodyFrontPage.css';
import StardewFishingJPG        from '../../Resources/stardewfishing_small.jpg';
import MultiplayerInventoryJPG  from '../../Resources/multiplayer_inventory.jpg';
import StardewFishingGIF        from '../../Resources/fishing_mechanic.gif';
import MultiplayerInventoryGIF  from '../../Resources/multiplayer_inventory.gif';
import TerrainDeformation2DGIF  from '../../Resources/terrain_deformation_2d.gif';
import TerrainDeformation2DJPG  from '../../Resources/terrain_deformation_2d.jpg';
import HouseBuilding2DGIF       from '../../Resources/house_building_2d.gif';
import HouseBuilding2DJPG       from '../../Resources/house_building_2d.JPG';
import ProceduralMap2DJPG       from '../../Resources/procedural_map_2d.jpg';
import VoxelUE4JPG              from '../../Resources/VoxelUE4.JPG';
import VoxelUE4GIF              from '../../Resources/VoxelUE4.gif';

import VoxelCurrent             from '../../Resources/VoxelBigWorld.JPG'
import HobbySiteOne             from '../../Resources/website_hobby_one.JPG';
import HobbySiteTwo             from '../../Resources/website_hobby_two.JPG';
import Portfolio                from '../../Resources/portfolio_image.jpg';


var consoleText1 = false;
var consoleText2 = false;
var consoleText3 = false;

var GIFContainer = {
    stardew_valley_fishing: StardewFishingGIF,
    multiplayer_inventory: MultiplayerInventoryGIF,
    terrain_deformation_2d: TerrainDeformation2DGIF,
    house_building_2d: HouseBuilding2DGIF,
    procedural_map_2d: ProceduralMap2DJPG,
    cubeworld: VoxelUE4GIF,
}

var JPGContainer = {
    stardew_valley_fishing: StardewFishingJPG,
    multiplayer_inventory: MultiplayerInventoryJPG,
    terrain_deformation_2d: TerrainDeformation2DJPG,
    house_building_2d: HouseBuilding2DJPG,
    procedural_map_2d: ProceduralMap2DJPG,
    cubeworld: VoxelUE4JPG,
}

export default class MainBodyFrontPage extends React.Component {
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, true);
        this.consoleTextUnderline(this.console_text_one_underline);
        this.consoleTextUnderline(this.console_text_two_underline);
        this.consoleTextUnderline(this.console_text_three_underline);

        var gameMechanicsChildren = [].slice.call(document.getElementById("game_mechanics").children);

        gameMechanicsChildren.forEach(element => {
            element.addEventListener("mouseenter", e => this.swapGif(element));
            element.addEventListener("mouseleave", e => this.swapJPG(element));
        });
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
        if(this.consoleTextInViewport(0, this.console_text_three) && !consoleText3) {
            this.consoleTextAnim(this.console_text_three, this.console_text_three.innerHTML);
            consoleText3 = true;
        }
    }

    swapGif = (element) => {
        var image = element.firstChild;
        var gif = GIFContainer[element.id];
        image.src = gif;
    }
    
    swapJPG = (element) => {
        var image = element.firstChild;
        var jpg = JPGContainer[element.id];
        image.src = jpg;
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

    consoleTextInViewport = (offset, id) => {
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
                                    Been working to learn C++ to get a better understanding of lower level languages, been creating my own 2D and 3D Game Engines and using Unreal Engine 4/5 for practice, as well as reading The C++ Programming Language Fourth Edition by Bjarne Stroustrup.
                                </p>
                                <p>
                                    I've always had an interest for voxel based games, like Minecraft or Astroneer, my recent project is inspired by Cube World, I was disappointed to find out it was abandoned by it's original developer and it led me to wanna create something similar to the original Cube World.
                                </p>
                                <p className="main_project_text_1280">
                                    The game is split up into 32x32x256 chunks, each block being 60cm in unreal units. I use greedy meshing and occlusion culling to improve performance and limit draw calls, as well as a Texture Atlas containing all textures. The map itself is generated using a 2D simplex noise, and currently working to integrate a perlin / simplex worms algorithm to generate caves.
                                </p>
                                <p className="main_project_text_1600">
                                    The more I've learned about C++, the more I start to appreciate the extra control and performance it gives you, but with the extra control it also allows the programmer to make more mistakes than other languages.
                                </p>
                                <a href="home" >
                                    <h3 className="main_project_button">Read More</h3>
                                </a>
                            </div>
                            <img src={ VoxelCurrent } alt="Unreal Engine 4 Cube World Inspiration" id="main_project_element"/>
                        </div>
                    </div>
                    <div className="container_title" id="portfolio">
                        <div id="console_text_container">
                            <h1 ref={(el) => this.console_text_one = el}>Game Mechanics</h1>
                            <h1 ref={(el) => this.console_text_one_underline = el}>_</h1>
                        </div>
                    </div>
                    <div className="project_card_container" id="game_mechanics">
                        <a href="https://github.com/Tater-Ctrl/UE4-Voxel-World" target="_blank" rel="noreferrer" className="project_card" id="cubeworld">
                            <img src={ VoxelUE4JPG } alt="Unreal Engine 4 Voxel World"></img>
                            <div>
                                <h2>Unreal Engine 4 Voxel World</h2>
                            </div>
                        </a>
                        <a href="https://github.com/Tater-Ctrl/2D-RPG-Mechanics/tree/master/Inventory" target="_blank" rel="noreferrer" className="project_card" id="multiplayer_inventory">
                            <img src={ MultiplayerInventoryJPG } alt="Unity Multiplayer Inventory"></img>
                            <div>
                                <h2>Unity Multiplayer Inventory</h2>
                            </div>
                        </a>
                        <a href="https://github.com/Tater-Ctrl/2D-RPG-Mechanics/tree/master/Map%20Generation" target="_blank" rel="noreferrer" className="project_card" id="procedural_map_2d">
                            <img src={ ProceduralMap2DJPG } alt="Unity Procedural Map Generation"></img>
                            <div>
                                <h2>Unity Procedural Map Generation</h2>
                            </div>
                        </a>
                        <a href="https://github.com/Tater-Ctrl/2D-RPG-Mechanics/tree/master/Terraforming" target="_blank" rel="noreferrer" className="project_card" id="terrain_deformation_2d">
                            <img src={ TerrainDeformation2DJPG } alt="Unity Terraforming 2D"></img>
                            <div>
                                <h2>Terraforming and Water Flow 2D</h2>
                            </div>
                        </a>
                        <a href="https://github.com/Tater-Ctrl/2D-RPG-Mechanics/tree/master/Base%20Building" target="_blank" rel="noreferrer" className="project_card" id="house_building_2d">
                            <img src={ HouseBuilding2DJPG } alt="Unity Multiplayer Inventory"></img>
                            <div>
                                <h2>Unity House Building 2D</h2>
                            </div>
                        </a>
                        <a href="https://github.com/Tater-Ctrl/2D-RPG-Mechanics/tree/master/Fishing" target="_blank" rel="noreferrer" className="project_card" id="stardew_valley_fishing">
                            <img src={ StardewFishingJPG } alt="Unity Stardew Valley Replicated Fishing Mechanic"></img>
                            <div>
                                <h2>Unity Stardew Valley Fishing Mechanic</h2>
                            </div>
                        </a>
                    </div>
                    
                    {/* START OF GAME JAM SECTION */}
                    <div className="container_title">
                        <div id="console_text_container">
                            <h1 ref={(el) => this.console_text_two = el}>Game Jams</h1>
                            <h1 ref={(el) => this.console_text_two_underline = el}>_</h1>
                        </div>
                    </div>
                        <div className="project_card_container" id="gamejams">
                            <h2 style={{color: "white"}}>
                               - Currently Empty -
                            </h2>
                        </div>

                    {/* START OF WEBSITE SECTION */}
                    <div className="container_title">
                        <div id="console_text_container">
                            <h1 ref={(el) => this.console_text_three = el}>Websites</h1>
                            <h1 ref={(el) => this.console_text_three_underline = el}>_</h1>
                        </div>
                    </div>

                    <div className="project_card_container" id="websites">
                        <a href="https://tater-ctrl.github.io/Hobby-Project-Site/" target="_blank" rel="noreferrer" className="project_card" id="website_hobby_one">
                            <img src={ HobbySiteOne } alt="Website I used to practice on"></img>
                            <div>
                                <h2>Website Practice</h2>
                            </div>
                        </a>
                        <a href="https://tater-ctrl.github.io/Hobby-Project-2/" target="_bank" rel="noreferrer" className="project_card" id="website_hobby_two">
                            <img src={ HobbySiteTwo } alt="Website I used to practice on"></img>
                            <div>
                                <h2>Website Practice 2 (Only Mobile)</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}