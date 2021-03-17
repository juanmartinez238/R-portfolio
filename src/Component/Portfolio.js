import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../Assets/Images/gallery/img-2.jpg';
import Gallery_3 from '../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../Assets/Images/gallery/img-6.jpg';

import moviestation from '../Assets/ProjectImages/projectmoviestation.png';
import weatherapp from '../Assets/ProjectImages/projectweatherapp.png';
import gamestation from '../Assets/ProjectImages/projectgamestation.png';
import news from '../Assets/ProjectImages/projectnews.jpeg';
import feelinglonely from '../Assets/ProjectImages/projectfeeling-lonely.png';
import kjtmovie from '../Assets/ProjectImages/projectfamily.jpeg';


class Porfolio extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
                onPhotography: true,
            });
        }

        // const webDesign = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onWebDesign: true,
        //         onPrintDesign: false,
        //         onWebApp: false,
        //         onPhotography: false,
        //         isOpen: true,
        //     });
        // }

        // const printDesign = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onPrintDesign: true,
        //         onWebDesign: false,
        //         onWebApp: false,
        //         onPhotography: false,
        //         isOpen: true,
        //     });
        // }

        // const webApp = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onWebApp: true,
        //         onPrintDesign: false,
        //         onWebDesign: false,
        //         onPhotography: false,
        //         isOpen: true,
        //     });
        // }

        // const Photography = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onPhotography: true,
        //         onWebApp: false,
        //         onPrintDesign: false,
        //         onWebDesign: false,
        //         isOpen: true,
        //     });
        // }


        console.log(this.state.onWebDesign);

        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>My Projects</h2>
                                </div>
                                <ul>
                                    <li><a data-filter="*" href="#" className="current" onClick={allElement}>All</a></li>
                                    {/* <li><a data-filter=".Web-Design" href="#" onClick={webDesign}>Web Design</a></li>
                                    <li><a data-filter=".Print-Design" href="#" onClick={printDesign}>Print Design</a></li>
                                    <li><a data-filter=".Web-Application" href="#" onClick={webApp}>Web Application</a></li>               
                                    <li><a data-filter=".Photography" href="#" onClick={Photography}>Photography</a></li>  */}
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                               
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                   <img src={moviestation} className="img img-responsive" alt='' />
                                    <div className="icon">
                                        <a href="https://moviestation.herokuapp.com/" target='#' className="view-icon">
                                            <h1>Movie Station</h1>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={weatherapp} alt='' className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://juans-vue-weather-app.netlify.app/" target='#' className="view-icon">
                                            <h1>Vue-Weather App</h1>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={gamestation} alt='' className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://juangamestation.herokuapp.com/" target='#' className="view-icon">
                                            <h1>Game Station</h1>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={news} alt='' className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://juan-news-scraper.herokuapp.com/" target='#' className="view-icon">
                                            <h1>News Web Scraper</h1>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={feelinglonely} alt='' className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://feeling-lonely-chat.herokuapp.com/" target='#' className="view-icon">
                                            <h1>Feeling Lonely Chat</h1>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={kjtmovie} alt='' className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://dry-brook-68206.herokuapp.com/" target='#' className="view-icon">
                                            <h1>KJT Movie Spree</h1>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Porfolio;