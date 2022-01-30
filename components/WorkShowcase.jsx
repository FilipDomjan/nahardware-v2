import React from 'react';
import './WorkShowcase.css';
import Slider from './Slider';
import triangle from '../img/triangle-white.png';
import { Link } from 'react-router-dom';

function WorkShowcase(){
    return(
        <>
            <div className="why-us">
                <div className="container">
                    <p className='section-name'>OUR PORTFOLIO</p>
                    <h1>Client Work Showcase</h1>
                    <p>We have worked with many clients over the years. Here are some featured projects from us.</p>
                    <Link to="/projects" class="contact-btn">OUR PROJECTS</Link>
                </div>
                <div className="image-slider">
                    <Slider />
                </div>
            </div>
        </>
    )
}

export default WorkShowcase;