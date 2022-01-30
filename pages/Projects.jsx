import React from 'react';
import { Helmet } from 'react-helmet';
import Images from '../components/Images';
import '../components/Home.css';
import '../components/Projects.css';
import ProjectsHero from '../components/ProjectsHero';


function Projects(){
    return(
        <>
            <Helmet>
                <title>Projects | NorthAmerican Hardware</title>
            </Helmet>
            <ProjectsHero />
            <Images />
        </>
    )
}

export default Projects;