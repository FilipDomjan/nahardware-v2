import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm';
import ContactHero from '../components/ContactHero';
import '../components/Home.css';
import '../components/Contact.css';



function Contact(){
    return(
        <>
            <Helmet>
                <title>NorthAmerican Hardware | Contact Us</title>
            </Helmet>
            <ContactHero />
            <ContactForm />
        </>
    )
}

export default Contact;