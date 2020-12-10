import React, { Component } from "react";
import SplitText from "react-pose-text";
import Detail from "./Detail";
import jhonData from '../jhonData';

const charPoses = {};

class SectionOne extends Component {

  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);
    this.state = {
      isMasterView: true,
    };
  }

  toggleView(e) {
    this.setState({isMasterView: !this.state.isMasterView});
  }

  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Overview</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Designed for seniors
                    </SplitText>
                  </h2>
                  <p>
                    Maintain your parent's independence at any age.  Keep them safe with emergency services, health monitoring and location tracking in a watch.
                  </p>
                  <a href="#/" className="see_btn" data-text="See Projects" onClick={this.toggleView}>
                    See Projects
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/slider_img1.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {
            !this.state.isMasterView ? <Detail page="overview" toggleView={this.toggleView} jhonData={jhonData} imageNo="0" /> : <></>
          }
        </div>
      </div>
    );
  }
}

export default SectionOne;
