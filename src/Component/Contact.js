import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyForm from './MyForm';

class Contact extends Component {
    
    render() {
        
        return (
            <div id="contact" className="contact-page-area section-padding go-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="contact-page-item">
                                <h2>My Contact Information</h2>
                                <p>Thank you for viewing my portfolio. Your time and consideration are greatly appreciated. Feel free to contact me to further discuss my background and how I can add value to your company.</p>
                                {/* <div className="adress">
                                    <h3>Address</h3>
                                    <span>245 King Street, Touterie Victoria 8520 Australia</span>
                                </div>
                                <div className="phone">
                                    <h3>Phone</h3>
                                    <span>0-123-456-7890</span>
                                    <span>0-123-456-7890</span>
                                </div> */}
                                <div className="email">
                                    <h3>Email</h3>
                                    <span>jm175546@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7">
                           
                           <MyForm/>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" />
                               
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Contact;