import React, { useState } from 'react';
import './Images.css';

function Images(){
    function importAll(r) {
        return r.keys().map(r);
    }

    function importFeatured(r){
        return r.keys().map(r);
    }

    const listOfImages = importAll(require.context('../img/builds/All_Builds', false, /\.(png|jpe?g|svg|webp)$/));

    const featuredBuilds = importFeatured(require.context('../img/builds/Featured', false, /\.(png|jpe?g|svg|webp)$/))

    const [isOpen, setIsOpen] = useState(false);
    const [clickedImage, setClickedImage] = useState("");

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClickedImage = (r) => {
        setClickedImage(r);
    }

    return(
        <>
            <div className="builds">
                <div className="container">
                    <div className="featured-builds">
                        <p>Featured builds</p>
                        <div className="builds-container">
                            <div className="builds-images">
                                {
                                    featuredBuilds.map(
                                        (image, index) => <img key={index} src={image} alt="build" onClick={(e) => {handleIsOpen(); handleClickedImage(image)}}></img>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="all-builds">
                        <p>All builds</p>
                        <div className="builds-container">
                            <div className="builds-images">
                                {
                                    listOfImages.map(
                                        (image, index) => <img key={index} src={image} alt="build" onClick={(e) => {handleIsOpen(); handleClickedImage(image)}}></img>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        {
                            isOpen == true && (
                                <dialog className='dialog' open onClick={handleIsOpen}>
                                    <img className='image' src={clickedImage} onClick={handleIsOpen} alt="image"/>
                                </dialog>
                            )
                        }
        </>
    )
}

export default Images;