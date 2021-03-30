import React from 'react';
import './TopPage.css';
import FishingImg from '../../Resources/stardewfishingcropped.jpg';
import ProcGen from '../../Resources/procworldcropped.jpg';
import VoxWorld from '../../Resources/voxelworldcropped.jpg';

class TopPage extends React.Component {
    render() {
        return (
            <div className="top_container">
                <img src={ VoxWorld } id="image1" alt="Illustrating procedurally generated voxel map"></img>
                <img src={ FishingImg } id="image2" alt="2D Character Fishing in Lake"></img>
                <img src={ ProcGen } id="image1" alt="Illustrating procedurally generated plane map"></img>
            </div>
        )
    }
}

export default TopPage;