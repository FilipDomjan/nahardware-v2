import React from 'react';
import './Services.css';
import build from '../img/sketch.png';
import troubleshoot from '../img/troubleshoot.png';
import upgrade from '../img/upgrade.png';
import { Link } from 'react-router-dom';

//Hey everybody! I'm Zain, owner of NorthAmerican Hardware. I'm a Canadian tech enthusiasts and entrepreneur who loves everything Tech! We started our journey by building various types of gaming PCs and now our journey continues as a Component retailer. My team and I are dedicated to what we do and deliver nothing but the best!

function Services(){
    return(
        <>
            <div className="services">
                <div className="container">
                    <p class="section-name">OUR SERVICES</p>
                    <div className="what-we-do">
                        <h1>What We Do</h1>
                        <p>We are gaming and pc enthusiasts from Canada. We specialize in building professional grade computers for clients.</p>
                        <Link to="/contact">GET IN TOUCH</Link>
                    </div>
                    <div className="our-services">
                        <div className="item">
                            <img src={build} alt="build" />
                            <h1>PC BUILDING</h1>
                            <p>We build professional grade computers of all kinds. Wether its a productivity, gaming or extreme PC build, we will do our best to build it for you.</p>
                        </div>
                        <div className="item">
                            <img src={troubleshoot} alt="troubleshoot" />
                            <h1>TROUBLESHOOTING</h1>
                            <p>Apart from building the computers, we offer troubleshooting services. If you have problems with your computer, we can arrange a repair session.</p>
                        </div>
                        <div className="item">
                            <img src={upgrade} alt="upgrade" />
                            <h1>UPGRADES</h1>
                            <p>Want to upgrade your existing computer? No problem! We offer upgrade services as well. Just like building a new computer, we will work closely with you to determine the best upgrade approach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;