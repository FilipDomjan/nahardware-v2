import React, { useState } from 'react';
import './VideoGallery.css';
import playButton from '../img/play-button.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

function VideoGallery(){
    function importVideos(r){
        return r.keys().map(r);
    }

    const listOfVideos = importVideos(require.context('../../public/videos/All', false, /\.(mp4)$/));

    const [isOpen, setOpen] = useState(false);
    const [clickedVideo, setClickedVideo] = useState("");

    const handleSetOpen = () => {
        setOpen(!isOpen);
    }

    const handleSetClickedVideo = (r) => {
        setClickedVideo(r);
    }

    const stopVideo = () => {
        document.getElementById("vid-expanded").pause();
    }
    
    return(
        <>
            <div className="videos">
                <div className="container">
                    <div className="video-container">
                        {
                            listOfVideos.map(
                                (video, index) => 
                                <>
                                    <div className="video-item">
                                        <video src={video} key={index} id="project-video" onLoad={e => e.target.currentTime = 5} disablePictureInPicture></video>
                                        <img src={playButton} alt="playButton" onClick={() => {handleSetOpen(); handleSetClickedVideo(video)}} />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                isOpen == true && (
                    <dialog className='video-dialog' open>
                        <video className='video-expanded' id="vid-expanded" src={clickedVideo} disablePictureInPicture controls autoPlay></video>
                        <FontAwesomeIcon icon={faTimesCircle} className='exit-button' onClick={() => {stopVideo(); handleSetOpen()}}/>
                    </dialog>
                )
            }
        </>
    )
    
}

export default VideoGallery;