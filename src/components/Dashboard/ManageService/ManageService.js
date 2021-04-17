import React, { useEffect, useState } from 'react';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect( () => {
        fetch('https://morning-retreat-13723.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceList(data));
    })
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h3 className='text-primary'>Manage Services</h3> <hr/>
                <div className="row text-success">
                    <div className="col-md-3"><h5>Service Title</h5></div>
                    <div className="col-md-1 text-center"><h5>Price</h5></div>
                    <div className="col-md-4"><h5>Description</h5></div>
                    <div className="col-md-3 text-center"><h5>Action</h5></div>
                </div> <hr/>
                {
                    serviceList.map(service => <ManageServiceCard key={service._id} service={service}></ManageServiceCard>)
                }
            </div>
        </section>
    );
};

export default ManageService;