import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import serviceImg_1 from '../Assets/Images/1.jpg';
import serviceImg_2 from '../Assets/Images/2.jpg';
import serviceImg_3 from '../Assets/Images/3.jpg';
import serviceImg_4 from '../Assets/Images/4.jpg';
import serviceImg_5 from '../Assets/Images/5.jpg';
import serviceImg_6 from '../Assets/Images/6.jpg';

import cLanguage from '../Assets/Images/cLanguage.jpg';
import javascript2 from '../Assets/Images/javascript2.jpg';
import html2 from '../Assets/Images/html2.jpg';
import reactNew2 from '../Assets/Images/reactNew2.png';
import vue2 from '../Assets/Images/vue2.png';
import node2 from '../Assets/Images/node2.png';

class Service extends Component {
    render () {
        return (
            <div id="service" className="hx-service-area ptb-100-70">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <span></span>
                            <h2>Technologies I've Worked With</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={cLanguage} alt=''/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>C#</h3>
                                        <p>----</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={javascript2} alt=''/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>JavaScript</h3>
                                        <p>----</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={html2} alt=''/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>HTML</h3>
                                        <p>----</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={node2} alt=''/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Node.JS</h3>
                                        <p>----</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={reactNew2} alt=''/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>React.JS</h3>
                                        <p>----</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={vue2} alt=''/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h3>Vue.JS</h3>
                                        <p>----</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;