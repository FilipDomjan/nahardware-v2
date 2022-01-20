import React from 'react';
import './Showcase.css';
import mouse from '../img/mouse.png';
import { Link } from 'react-router-dom';

function Showcase(){
    return(
        <>
            <div className="showcase">
                <video src="/videos/showcase-video.mp4" autoPlay loop muted playsInline disablePictureInPicture />
                <div className="buttons">
                    <h1>OFFICIAL NAHARDWARE WEBSITE</h1>
                    <Link to="/projects">PROJECTS</Link>
                </div>
                <div className="mouse">
                    <img src={mouse} alt="mouse" />
                </div>
            </div>
        </>
    )
}

export default Showcase;