import React from 'react';
import './ServiceListCard.css';

const ServiceListCard = ({service}) => {
    const {serviceName, price, cardBrand, status, address, phone} = service;
    //console.log(service);
    return (
        <div className='user-service-card'>
            <div className="d-flex justify-content-between">
                <h5>{serviceName}</h5>
                <button style={{color: status==='Done' ? 'green' : status==='Pending' ? 'red' : status==='On Going' ? 'darkOrange' : ''}} className="btn btn-outline-primary">{status}</button>
            </div>
            <p>$ {price}</p>
            <h6>Payment Status: <span className='text-success'>Paid</span></h6>
            <p>Address: {address}</p>
            
        </div>
    );
};

export default ServiceListCard;