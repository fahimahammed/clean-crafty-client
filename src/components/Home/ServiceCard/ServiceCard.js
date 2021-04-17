import React from 'react';
import { Link } from 'react-router-dom';
import './ServeceCard.css';

const ServiceCard = ({item}) => {
    const {_id, name, description, imageURL, price} = item;
    return (
        <section className='servece-card-container'>
            <Link  to={`/checkout/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className='service-card p-2'>
                <img src={imageURL} className='img-fluid service-icon py-3' alt=""/>
                <h6>{name}</h6>
                <h5 className='text-primary'> $ {price} </h5>
                <p>{description}</p>
            </div>
        </Link>
        </section>
    );
};

export default ServiceCard;