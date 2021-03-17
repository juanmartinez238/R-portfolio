import React, { Component} from 'react';
import Logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home_1 from '../Assets/Images/home/img-1.jpg';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import portfoliohomePage2 from '../Assets/Images/portfoliohomePage2.png';
import portfolioAboutMe2 from '../Assets/Images/portfolioAboutMe2.png';
import portfolioTechnologies from '../Assets/Images/portfolioTechnologies2.png';
import portfolioProjects from '../Assets/Images/portfolioProjects2.png';
import portfolioContact from '../Assets/Images/portfolioContact2.png';

class Header extends Component {

    state = {
        isOpen: false,

    }
    
    render() {

        return(
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} alt=''/>
                            </a>
                        </div>
                        <div id="navbar" className={ this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({isOpen: false})}>
                                <FontAwesomeIcon icon={faTimes} />    
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({isOpen: false})}>
                            <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <ul className="nav navbar-nav">
                                <li className="home">
                                    <a href="#home">
                                        <img src={portfoliohomePage2} alt=''/>
                                    </a>
                                </li>
                                <li className="about">
                                    <a href="#about">
                                        <img src={portfolioAboutMe2} alt=''/>
                                    </a>
                                </li>
                                <li className="service">
                                    <a href="#service">
                                        <img src={portfolioTechnologies} alt=''/>
                                    </a>
                                </li>
                                <li className="protfolio">
                                    <a href="#protfolio">
                                        <img src={portfolioProjects} alt=''/>
                                    </a>
                                </li>
                                <li className="contact">
                                    <a href="#contact">
                                        <img src={portfolioContact} alt=''/>
                                    </a>
                                </li>
                                <li className="home">
                                    <a href="#home">
                                        <img src={portfoliohomePage2} alt=''/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button className="menu-open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;