import React, { Component } from 'react';
import newestImage from '../Assets/Images/newestImage.png';
import updatedResume from '../Assets/Resume/Updated-Resume.docx';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Web Developer</span>
                                    <h2>About Me</h2>
                                </div>
                                <p>I'm a United States military veteran that found a passion for coding and is fascinated with technology. I initially found my passion for coding during a business application development course while completing my bachelor of science degree at the University of South Florida. It was such an amazing and fulfilling experience to be able to create an application from scratch that I just had to continue the programming path.</p>
                                <p>I now seek to merge my web development and computer/network security skills to help build secure applications.</p>
                                
                                <div className="btns">
                                    <a href={updatedResume} className="theme-btn" download="Resume.doc">Download Resume</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={newestImage} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;