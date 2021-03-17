import React, { Component } from 'react';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slide2 from '../Assets/Images/slide-2.jpg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={slide2}/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>I Am Juan Martinez</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Web Developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="theme-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Full Stack Web Developer</p></div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/juan-martinez-58231b71" target='#'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/juanmartinez238" target='#'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;