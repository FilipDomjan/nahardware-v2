import React, { useState } from 'react';
import './VideoGallery.css';

function VideoGallery(){
    function importAll(r) {
        return r.keys().map(r);
    }

    const allVideos = importAll(require.context('../../public/videos/All', true, /\.(mp4)$/));

    function importDarkflash(r) {
        return r.keys().map(r);
    }

    const dfVideos = importDarkflash(require.context('../../public/videos/darkflash', true, /\.(mp4)$/));


    function importDarkcube(r) {
        return r.keys().map(r);
    }

    const dcVideos = importDarkcube(require.context('../../public/videos/darkcube', true, /\.(mp4)$/));


    function importSp(r) {
        return r.keys().map(r);
    }

    const spVideos = importSp(require.context('../../public/videos/siliconpower', true, /\.(mp4)$/));


    function importArctic(r) {
        return r.keys().map(r);
    }

    const arcticVideos = importArctic(require.context('../../public/videos/arctic', true, /\.(mp4)$/));


    function importCollabs(r) {
        return r.keys().map(r);
    }

    const collabVideos = importCollabs(require.context('../../public/videos/collabs', true, /\.(mp4)$/));

    const [isOpen, setIsOpen] = useState(false);
    const [clickedVideo, setClickedVideo] = useState("");

    const handleIsOpen = () => {
        if(isOpen == true){
           document.getElementById('large-video').pause();
        }
        setIsOpen(!isOpen);
    }
    
    const handleClickedVideo = (r) => {
        setClickedVideo(r);
    }
    
    return(
        <>
            <div className="videos">
                <div className="container">
                    <p>Featured project</p>
                    <div className="featured-video">
                        <video src="/videos/Featured/NA.HARDWARE6.mp4" controls disablePictureInPicture></video>
                    </div>
                    <div className="sponsor-videos">
                        <p>Darkflash</p>
                        <div className="sponsor-videos-container">
                        {
                                        dfVideos.map(
                                            (vid, index) => 
                                            <div className='video-item'>
                                                <video key={index} src={vid} disablePictureInPicture onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0}} onClick={() => {handleIsOpen(); handleClickedVideo(vid)}} loop muted id="vid"></video>
                                            </div>
                                        )
                            }
                        </div>
                    </div>
                    <div className="sponsor-videos">
                        <p>Darkcube</p>
                        <div className="sponsor-videos-container">
                        {
                                        dcVideos.map(
                                            (vid, index) => 
                                            <div className='video-item'>
                                                <video key={index} src={vid} disablePictureInPicture onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0}} onClick={() => {handleIsOpen(); handleClickedVideo(vid)}} loop muted id="vid"></video>
                                            </div>
                                        )
                            }
                        </div>
                    </div>
                    <div className="sponsor-videos">
                        <p>Silicon Power</p>
                        <div className="sponsor-videos-container">
                        {
                                        spVideos.map(
                                            (vid, index) => 
                                            <div className='video-item'>
                                                <video key={index} src={vid} disablePictureInPicture onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0}} onClick={() => {handleIsOpen(); handleClickedVideo(vid)}} loop muted id="vid"></video>
                                            </div>
                                        )
                            }
                        </div>
                    </div>
                    <div className="sponsor-videos">
                        <p>Arctic</p>
                        <div className="sponsor-videos-container">
                        {
                                        arcticVideos.map(
                                            (vid, index) => 
                                            <div className='video-item'>
                                                <video key={index} src={vid} disablePictureInPicture onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0}} onClick={() => {handleIsOpen(); handleClickedVideo(vid)}} loop muted id="vid"></video>
                                            </div>
                                        )
                            }
                        </div>
                    </div>
                    <div className="all-videos">
                        <p>All videos</p>
                        <div className="all-videos-container">
    
                            {
                                        allVideos.map(
                                            (vid, index) => 
                                            <div className='video-item'>
                                                <video key={index} src={vid} disablePictureInPicture onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.pause(); e.target.currentTime = 0}} onClick={() => {handleIsOpen(); handleClickedVideo(vid)}} loop muted id="vid"></video>
                                            </div>
                                        )
                            }
                        </div>
                    </div>
                </div>

            </div>
            {
                isOpen == true && (
                    <dialog className='dialog' open>
                        <div className="dialog-content">
                            <button onClick={() => handleIsOpen()}>Exit</button>
                            <video 
                            id='large-video' 
                            src={clickedVideo}
                            controls
                            disablePictureInPicture
                            autoPlay
                            alt="video"/>
                        </div>
                    </dialog>
                )
            }
        </>
    )
    
}

export default VideoGallery;