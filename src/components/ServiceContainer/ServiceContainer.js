import React from 'react';
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ServiceContainer = () => {
    return (
        <section className='container'>
            <Navbar></Navbar>
            <Services></Services> <hr/>
            <Footer></Footer>
        </section>
    );
};

export default ServiceContainer;