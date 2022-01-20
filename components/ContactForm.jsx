import React from 'react';
import './ContactForm.css';

function ContactForm(){
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
                                    <input type="text" name="Name" placeholder='Your name'/>
                                    <input type="email" name="E-Mail" placeholder='E-Mail' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="row-content">
                                    <input type="text" name="Budget" placeholder='Budget' />
                                    <input type="text" name="Residence" placeholder='Residence' />
                                </div>
                            </div>
                            <div className="row">
                                <textarea name="Message" id="message" cols="30" rows="10" placeholder='Message to us'></textarea>
                            </div>
                            <div className="row">
                                <input type="submit" id="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                    <div className="contact-information">
                        <h1>Contact Information</h1>
                        <p>Address: TBA</p>
                        <p>City: TBA</p>
                        <p>Canada</p>
                        <br />
                        <p>E-Mail: TBA</p>
                        <br />
                        <p>Working days: Monday - Friday</p>
                        <p>09:00AM - 17:00PM</p>
                        <br />
                        <h1>Follow Us</h1>
                        <a href="https://www.instagram.com/na.hardware/" target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;