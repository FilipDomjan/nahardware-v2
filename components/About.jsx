import React from 'react';
import './About.css';
import zain from '../img/team_nahardware.png';
import dev from '../img/team_dev.png';
import face from '../img/team_6face.png';

function About(){
    return(
        <>
            <div className="about-us">
                <h1>ABOUT US</h1>
                <div className="container">
                    <div className="about-container">
                        <div className="who-are-we">
                            <h2>Who are we</h2>
                            <p>Hey everybody! I'm Zain, owner of NorthAmerican Hardware. I'm a Canadian tech enthusiasts and entrepreneur who loves everything Tech! We started our journey by building various types of gaming PCs and now our journey continues as a Component retailer. 
                                My team and I are dedicated to what we do and deliver nothing but the best!
                            </p>
                        </div>
                        <div className="meet-the-team">
                            <h2>Our Team</h2>
                            <div className="team-item">
                                <div className="item-content">
                                    <img src={zain} alt="zain" />
                                </div>
                                <div className="item-content">
                                    <h3>Zain / <a href="https://www.instagram.com/na.hardware/" target="_blank">@na.hardware</a></h3>
                                    <p>Highly experienced tech enthusiast and PC builder with long history of PC building. Takes care of all the design and building process.</p>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="item-content">
                                    <img src={face} alt="6facefilms" />
                                </div>
                                <div className="item-content">
                                    <h3>Akshayan / <a href="https://www.instagram.com/6facefilms/" target="_blank">@6facefilms</a></h3>
                                    <p>Professional video photographer who makes sure that our projects impress and are shown in style on our social media and website.</p>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="item-content">
                                    <img src={dev} alt="dev" />
                                </div>
                                <div className="item-content">
                                    <h3>Filip / <a href="https://www.instagram.com/rgb_domi/" target="_blank">@rgb_domi</a></h3>
                                    <p>Fullstack Web/Software Developer, takes care of our digital footprint and makes sure that we look good on the web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;