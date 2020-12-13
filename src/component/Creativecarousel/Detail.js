import React from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

const Detail = (props) => {
    const { page, toggleView, jhonData, imageNo } = props;
    const data = jhonData[page];
//    const imageName = '../../image/apporoach_man_img.png';
    const allImages = [
        require('../../image/apporoach_man_img.png'), 
        require('../../image/ambulance.png'), 
        require('../../image/welcome_home.png'), 
        require('../../image/slider_healthy.png')
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 d-flex align-items-center">
                    <Fade bottom cascade duration={1000}>
                        <div className="about_content">
                            <h6>{data.role}</h6>
                            <p>{data.aboutdetails}</p>
                            <Link to="#"  className="theme_btn active" onClick={toggleView}>Close</Link>
                        </div>
                    </Fade>
                </div>
                <div className="col-lg-5">
                    <div className="about_img">
                        <Reveal effect="fadeInRight" duration={1500}><img src={allImages[imageNo]} alt=""/></Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
