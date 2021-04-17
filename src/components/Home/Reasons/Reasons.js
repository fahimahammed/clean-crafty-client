import React from 'react';
import './Reasons.css';
import modelCleaner from '../../../images/modelCleaner.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPagelines, faSuperpowers } from '@fortawesome/free-brands-svg-icons';

const Reasons = () => {
    return (
        <section className="container py-5">
            <div className="row">
            <div className="col-md-6 reason-title">
                <h1>Reasons to <span>Choose Us</span></h1>
                <p className='text-dark'><small>Behind our commitment to excellence are few key attributes that define who we are and what makes us different from any other.</small></p>
                
                <div className="characteristics">
                    <h5><FontAwesomeIcon icon={faBuilding} /> Top-Rated Company </h5>
                    <p>We hold a successful track record of satisfying our customers and getting back their bond money.</p>

                    <h5><FontAwesomeIcon icon={faSuperpowers} /> Superior Quality</h5>
                    <p>We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.</p>

                    <h5><FontAwesomeIcon icon={faPagelines} /> Eco-Friendly Products</h5>
                    <p>We use biodegradable products which do not harm the environment, pets or humans in any way.</p>
                </div>
            </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={modelCleaner} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Reasons;