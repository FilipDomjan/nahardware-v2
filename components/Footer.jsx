import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="top-section">
                        <h1>Get In Touch With Us!</h1>
                        <div className="top-section-text">
                            <p>There are many reasons why you should work with us and why we should be your first choice of pc builders.</p>
                        </div>
                        <div className="top-section-button">
                            <Link to="/contact">WORK WITH US</Link>
                        </div>
                    </div>
                    <hr />
                    <div className="bottom-section">
                        <div className="column">
                            <h1>NorthAmerican Hardware</h1>
                            <p>Toronto, CA</p>
                            <p>Canada, North America</p>
                            <a href="mailto:info@nahardware.com" class="column-email">info@nahardware.com</a>
                            <p>&copy; NorthAmerican Hardware 2022.<br />All rights reserved <Link to="/" className='policy'>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Policies</Link></p>
                        </div>
                        <div className="column">
                            <h1>Web Links</h1>
                            <Link to="/">Home</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/videos">Videos</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="column">
                            <h1>Technologies</h1>
                            <a href="https://reactjs.org" target="_blank">React.js</a>
                            <Link to="/">HTML</Link>
                            <Link to="/">CSS</Link>
                            <a href="https://www.javascript.com" target="_blank">JavaScript</a>
                        </div>
                        <div className="column">
                            <h1>Social Media</h1>
                            <a href="https://www.instagram.com/na.hardware/" target="_blank">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;