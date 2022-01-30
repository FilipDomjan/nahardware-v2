import React from 'react';
import { Helmet } from 'react-helmet';
import Showcase from '../components/Showcase.jsx';
import Services from '../components/Services.jsx';
import WhoAreWe from '../components/WhoAreWe.jsx';
import Sponsors from '../components/Sponsors.jsx';
import WorkShowcase from '../components/WorkShowcase.jsx';
import '../components/Home.css';


function Home(){

    return(
        <>
            <Helmet>
                <title>NorthAmerican Hardware</title>
            </Helmet>
            <Showcase />
            <Services />
            <WhoAreWe />
            <WorkShowcase />
            <Sponsors />
        </>
    )
}

export default Home;