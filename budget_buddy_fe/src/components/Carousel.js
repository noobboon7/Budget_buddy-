import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class CarouselReg extends Component {
  render() {
    return (
      <div id="pictures" className="ui container">
      <Carousel>
            <div>
                <img alt="" src="/desk.jpg" />
                <p className="legend">BUDGET</p>
            </div>
            <div>
                <img alt="" src="buildings.jpg" />
                <p className="legend">DREAM</p>
            </div>
            <div>
                <img alt="" src="papers.jpg" />
                <p className="legend">SAVE</p>
            </div>
            <div>
                <img alt="" src="planner.jpg" />
                <p className="legend">PLAN</p>
            </div>
        </Carousel>
        </div>
    );
  }
};
