import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipe: false,
    };
    return (
      <div className="Fourth-div">
        <h2 className="Fourth-divhead"> Skills</h2>
        <Slider {...settings}>
          <div>
            <img
              className="Fourth-divimg"
              src="https://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="https://micdropagency.com/media/pages/home/c3f6419dfa-1655934961/logo-cocacola.png"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="https://micdropagency.com/media/pages/home/c3f6419dfa-1655934961/logo-cocacola.png"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="https://micdropagency.com/media/pages/home/c3f6419dfa-1655934961/logo-cocacola.png"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="https://micdropagency.com/media/pages/home/c3f6419dfa-1655934961/logo-cocacola.png"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="https://micdropagency.com/media/pages/home/c3f6419dfa-1655934961/logo-cocacola.png"
              height="100"
              width="100"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
}
