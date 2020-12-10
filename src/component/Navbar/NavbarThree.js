import React, { Component } from "react";

class NavbarThree extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    var { mainlogo } = this.props;
    return (
      <React.Fragment>
        <header className="header_area_one p_absoulte">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-9 col-7">
                <div className="menu_left">
                  <a href="/#" className="logo">
                    <img src={require("../../image/" + mainlogo)} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-5">
                <div className="menu_right">
                  <div className="burger_menu">
                    <span className="text" data-text="menu"></span>
                    <div
                      id="nav-icon2"
                      className={this.state.isExpanded ? "open" : ""}
                      onClick={() => this.handleToggle()}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className={
            this.state.isExpanded ? "offcanvas_menu open" : "offcanvas_menu"
          }
        >
          <div className="closer_icon" onClick={() => this.handleToggle()}>
            <i className="icon_close"></i>
          </div>
          <div className="menu_body">
            <div className="menu_title">
              <h2>Welcome to BP Watch</h2>
              <p>
                Designed for Seniors. A smartwatch created for your health, safety, and independence.
              </p>
            </div>
            <div className="off_menu">
              <ul id="menu" className="nav">
                <li data-menuanchor="Watch" className="">
                  <a href="#Watch">Watch</a>
                </li>
                <li data-menuanchor="Emergency" className="">
                  <a href="#Emergency">Emergency</a>
                </li>
                <li data-menuanchor="Tracking" className="">
                  <a href="#Tracking">Tracking</a>
                </li>
                <li data-menuanchor="Health" className="">
                  <a href="#Health">Health</a>
                </li>
                <li data-menuanchor="Contact" className="">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="copy_right_menu">
              <p>
                © <a href="/#">BP.Watch</a> 2020. All Rights Reseverd
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NavbarThree;
