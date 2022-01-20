import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <>
            <div className="footer">
                <div class="back-to-top">
                    <a href="#"><FontAwesomeIcon icon={faArrowUp} />Back to top</a>
                </div>
                <div className="footer-content">
                    <div className="column">
                        <h3>Links</h3>
                        <a href="">Home</a>
                        <br />
                        <a href="">Projects</a>
                        <br />
                        <a href="">Videos</a>
                        <br />
                        <a href="">Contact</a>
                    </div>
                    <div class="column">
                        <h3>Legal Documents</h3>
                        <a href="">Terms of service</a>
                        <br />
                        <a href="">Privacy policy</a>
                        <br />
                        <a href="">Cookies policy</a>
                    </div>
                    <hr />
                    <p>&copy; NorthAmerican Hardware · 2021 - 2022. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;