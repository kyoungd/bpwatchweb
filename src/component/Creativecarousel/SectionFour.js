import React, { Component } from "react";
import SplitText from "react-pose-text";
import Detail from "./Detail";
import jhonData from '../jhonData';

import "./style.scss";

const charPoses = {};
class SectionFour extends Component {

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
                <div className="slider_content slider_content_three">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Health</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Health Monitoring
                    </SplitText>
                  </h2>
                  <p>
                    We will help you keep your loved ones healthy: Stress, heart rate, ECG, Sleep and Activity. We will alert you when they need attention.
                  </p>
                  <a href="#/" className="see_btn" data-text="See Projects" onClick={ this.toggleView }>
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
                    src={require("../../image/new-page/slider_img4.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {
            !this.state.isMasterView ? <Detail page="healthmonitoring" toggleView={this.toggleView} jhonData={jhonData} imageNo="3" /> : <></>
          }
        </div>
      </div>
    );
  }
}

export default SectionFour;
