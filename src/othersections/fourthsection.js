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
              src="xd.svg"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="css.svg"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="html.svg"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="javascript.svg"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="bootstrap.svg"
              height="100"
              width="100"
            ></img>
          </div>
          <div>
            <img
              className="Fourth-divimg"
              src="react.svg"
              height="100"
              width="100"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
}
