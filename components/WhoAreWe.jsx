import React from 'react';
import './WhoAreWe.css';
import gpu from '../img/gpu.PNG';

function WhoAreWe(){
    return(
        <>
            <div className="who-are-we">
                <div className="container">
                    <div className="about-us">
                        <p class="section-name">ABOUT US</p>
                        <h1>Who Are We</h1>
                        <p>Hey everybody! I'm Zain, owner of NorthAmerican Hardware. I'm a Canadian tech enthusiasts and entrepreneur who loves everything Tech! We started 
                            our journey by building various types of gaming PCs and now our journey continues as a Component retailer. My team and I are dedicated to what we do and deliver nothing but the best!</p>
                    </div>
                </div>
                <div className="left-panel">
                    <img src={gpu} alt="panel-image" />
                    <div className="stats-panel">
                        <div className="row">
                            <span>50+</span>
                            <p>Clients</p>
                        </div>
                        <div className="row">
                            <span>100+</span>
                            <p>Completed Builds</p>
                        </div>
                        <div className="row">
                            <span>5</span>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoAreWe;