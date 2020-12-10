import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";
import Detail from "./Detail";
import jhonData from '../jhonData';

const charPoses = {};

class SectionTwo extends Component {
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

  SectionView() {
    return (
      <div className="section fp-section fp-tabble">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Benefits</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Emergency Service
                    </SplitText>
                  </h2>
                  <p>
                    Be there when it counts. Get them the help they need when they need them.
                  </p>
                  <a href="#" className="see_btn" data-text="See Projects" onClick={this.toggleView}>
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
                    src={require("../../image/new-page/slider_img2.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {
            !this.state.isMasterView ? <Detail page="emergencyservice" toggleView={this.toggleView} jhonData={jhonData} imageNo="1" /> : <></>
          }
        </div>
      </div>
    );
  }
  
  render() {
    return this.SectionView();
  }
  
}

export default SectionTwo;
