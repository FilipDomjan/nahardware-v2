import React from 'react';
import './Whyus.css';
import Slider from './Slider';
import triangle from '../img/triangle-white.png';
import { Link } from 'react-router-dom';

function Whyus(){
    return(
        <>
            <div className="why-us">
                <img src={triangle} />
                <div className="container">
                    <h1>WHAT SETS US APART</h1>
                    <p>We strictly place customers first. All your wishes are heard and we work really hard to make them come true. Requesting a PC build is very easy, simply shoot us an email through the contact form
                        and we will take it from there. We will get back to you and make a plan, once we do that we will start working on your build. We can guarantee that
                        you will be satisifed with the service we offer.
                    </p>
                    <Link to="/contact" class="contact-btn">CONTACT</Link>
                </div>
                <div className="image-slider">
                    <Link to="/projects" className='our-work'>Our work <span>{`>`}</span></Link>
                    <Slider />
                </div>
            </div>
        </>
    )
}

export default Whyus;