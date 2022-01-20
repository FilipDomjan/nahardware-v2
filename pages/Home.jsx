import React from 'react';
import { Helmet } from 'react-helmet';
import Showcase from '../components/Showcase.jsx';
import About from '../components/About.jsx';
import Sponsors from '../components/Sponsors.jsx';
import Whyus from '../components/Whyus.jsx';
import '../components/Home.css';


function Home(){

    return(
        <>
            <Helmet>
                <title>NorthAmerican Hardware</title>
            </Helmet>
            <Showcase />
            <About />
            <Sponsors />
            <Whyus />
        </>
    )
}

export default Home;