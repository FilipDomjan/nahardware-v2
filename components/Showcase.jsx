import React from 'react';
import './Showcase.css';
import mouse from '../img/mouse.png';
import { Link } from 'react-router-dom';

function Showcase(){
    return(
        <>
            <div className="showcase">
                <video src="/videos/showcase-video.mp4" autoPlay loop muted playsInline disablePictureInPicture />
                <div className="container">
                    <div className="buttons">
                        <h1>Upgrade Your Gaming Life With Us</h1>
                        <p>We build professional grade gaming computers from scratch. We begin our approach with getting to know you and your goals.</p>
                        <Link to="/contact">GET IN TOUCH</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase;