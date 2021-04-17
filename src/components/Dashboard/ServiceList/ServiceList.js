import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;

    useEffect(() => {
        fetch(`https://morning-retreat-13723.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then( data => setServiceList(data))
    },[])

    return (
        <section className='row'>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 m-2 p-2">
                    <h3 className='pb-3 text-primary'>Your ordered service list and service status</h3> <hr/>
                    <div className="d-flex flex-wrap">
                        {
                            serviceList.length && serviceList.map(userService => <ServiceListCard key={userService._id} service={userService}></ServiceListCard>)
                        }
                    </div>
                </div>
        </section>
    );
};

export default ServiceList;