import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

    
    const contacts = [
        {name: "93/A Dhaka, Bangladesh-1207" , link: "//google.com/map"},
        {name: "Google Map" , link: "//google.com/map"}
    ]
    const cleaningServices = [
        {name: "Commercial Cleaning" , link: "/services"},
        {name: "Apartment Cleaning" , link: "/services"},
        {name: "Window Cleaning" , link: "/sercvices"},
        {name: "Office Cleaning" , link: "/services"},
        {name: "Car Wash" , link: "/services"},
        {name: "After Renovation" , link: "/services"},
        {name: "Move In / Move out" , link: "/services"}
    ]

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <img className='img-fluid w-50' src={logo} alt=""/> <br/> <br/> <br/>
                        <p>We use natural and eco-friendly cleaning products and have a customer satisfaction guarantee.</p>
                        <p>Our online scheduling and payment system is safe.</p>
                        <Link to='/services'><button className="btn btn-outline-primary rounded-pill border border-5 border-primary">Get Our Services</button></Link>
                    </div>
                    <FooterCol key={1} menuTitle="Our Services" menuItems={cleaningServices}/>
                    <FooterCol key={2} menuTitle="Contacts" menuItems={contacts}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item text-primary"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item text-primary"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item text-primary"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            <li className="list-inline-item text-primary"><a href="//youtube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                        <div className='pt-3'>
                            <h6>Hotline</h6>
                            <h3 className='text-primary'>+000 111 909</h3>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <hr/>
                    <p>Copyright {(new Date()).getFullYear()}, Clean Crafty - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;