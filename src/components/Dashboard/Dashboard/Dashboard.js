import React, { useContext, useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch(`https://morning-retreat-13723.herokuapp.com/admin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data[0] || 0))
    },[])
    //console.log(loggedInUser, isAdmin);
    return ( 
        <section>
            {
                isAdmin ? <OrderList></OrderList> : <ServiceList></ServiceList>
            }
        </section>
       
    );
};

export default Dashboard;