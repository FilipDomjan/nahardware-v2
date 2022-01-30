import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactForm(){
    const updateCounter = () => {
        let x = document.getElementById("message").value;
        let y = 500 - x.length;

        document.getElementById("word-counter").innerHTML = y;

    }

    return(
        <>
            <div className="contact">
                <div className="container">
                    <div className="contact-form">
                        <h1>Lets work together!</h1>
                        <p>Let us know a little more about you.</p>
                        <form method="POST" action="https://formspree.io/f/mjvjnwbq" autoComplete='off'>
                            <div className="row">
                                <div className="row-content">
                                    <div className="row-top">
                                        <label htmlFor="">Name</label>
                                        <br />
                                        <input type="text" name="Name" placeholder='John Doe' required maxLength={44}/>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="row-top">
                                        <label htmlFor="">E-Mail</label>
                                        <br />
                                        <input type="email" name="E-Mail" placeholder='john@doe.com' required maxLength={44}/>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row-content">
                                    <div className="row-middle">
                                        <label htmlFor="">Budget</label>
                                        <br />
                                        <input type="text" name="Budget" placeholder='500' required maxLength={9}/>
                                        <label className='budget-in'>CAD</label>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="row-middle">
                                        <label htmlFor="">Residence</label>
                                        <br />
                                        <input type="text" name="Residence" placeholder='Canada' required maxLength={40}/>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row-bottom">
                                    <label htmlFor="">Message</label>
                                    <textarea name="Message" id="message" cols="30" rows="10" placeholder='Hey, I need a budget gaming pc...' required maxLength={500} onInput={() => updateCounter()}></textarea>
                                    <label id="word-counter">500</label>
                                    <div className="underline underline-textarea"></div>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" id="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                    <div className="contact-information">
                        <h1>Contact Information</h1>
                        <p>Canada, Toronto</p>
                        <p>North America</p>
                        <br />
                        <p><a href="mailto:info@nahardware.com" class="mail-to">info@nahardware.com</a></p>
                        <br />
                        <p>Working days: Monday - Friday</p>
                        <p>09:00AM - 17:00PM</p>
                        <br />
                        <h1>Follow Us</h1>
                        <a href="https://www.instagram.com/na.hardware/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;