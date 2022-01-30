import React, { Component } from 'react';
import './Slider.css'
import Slide from './Slide.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default class Slider extends Component {
constructor(props) {
    super(props)
    this.state = {
        width: 300,
        height: 300,
        images: ['build2.webp', 'build3.webp', 'Build5.webp', 'Build6.webp', 'Build11.webp', 'Build16.webp', 'Build18.webp', 'Build19.webp', 'Build21.webp'],
    }
}

slideLeft() {
    let last = this.state.images.slice(-1)
    let rest = this.state.images.slice(0, -1)
    let images = [last, ...rest]
    this.setState({images: images});
  }

  slideRight() {
    let [first, ...rest] = this.state.images;
    let images = [...rest, first];
    this.setState({images: images});
  }
  
renderNavigation() {
    return (
        <div className="container">
            <div className="slider-arrows">
                <div className="arrows">
                    <a className="arrow left" onClick={() => this.slideLeft()}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </a>
                </div>
                <div className="arrows">
                    <a className="arrow right" onClick={() => this.slideRight()}>
                    <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
)
}
renderSlides() {
const images = this.state.images;
return (
    <div className="slider-items">
        {
            images.map((image, index) => {
                return (
                    <Slide image={image} width={this.state.width} height={this.state.height} key={index} />
                    )
                })
            }
        </div>
    )
}
render() {
return (
    <>  
        <div className="nav">
            {this.renderNavigation()}
        </div>
        <div className="wrapper">
            <div className="slider">
                {this.renderSlides()}
            </div>
        </div>
    </>
    )
}
}