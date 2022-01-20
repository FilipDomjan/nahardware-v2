import React from 'react';
import { Helmet } from 'react-helmet';
import '../components/Home.css';
import '../components/Videos.css';
import VideoGallery from '../components/VideoGallery';
import VideosHero from '../components/VideosHero';
import Error from '../components/Error';



function Videos(){
    return(
        <>
            <Helmet>
                <title>NorthAmerican Hardware | Video Gallery</title>
            </Helmet>
            <Error />
        </>
    )
}

export default Videos;