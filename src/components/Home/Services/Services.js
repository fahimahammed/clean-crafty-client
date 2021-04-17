import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [serviceData, setServiceData] = useState({});
    useEffect(()=>{
        fetch('https://morning-retreat-13723.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])

    //console.log(serviceData);
    return (
        <section className='container'>
            <div className="text-center my-5 pt-5 service-title">
                <h1>Our Cleaning <span> Services</span> </h1>
                <p>Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and healthy environment for your employees, customers and guests.</p>
            </div>
            <div className="service-container">
                {
                    serviceData.length && serviceData.map(item => <ServiceCard key={item._id} item={item}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;