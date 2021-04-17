import React, { useEffect, useState } from 'react';
import OrderListCard from '../OrderListCard/OrderListCard';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState({});
    useEffect(()=>{
        fetch('https://morning-retreat-13723.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-2">
                <h3 className='text-primary pt-2'>Order List</h3> <hr/>
                <div className="row text-success">
                    <div className="col-md-2"><h5>Service Name</h5></div>
                    <div className="col-md-2"> <h5>Cutomer Name</h5> </div>
                    <div className="col-md-2"> <h5>Address</h5> </div>
                    <div className="col-md-2"> <h5>Phone</h5> </div>
                    <div className="col-md-1 text-center"> <h5>Payment Status</h5> </div>
                    <div className="col-md-2 text-center"> <h5>Action</h5> </div>
                    
                </div> <hr/>
                {
                    orders.length && orders.map(order => <OrderListCard key={order._id} order={order}></OrderListCard>)
                }
            </div>
        </section>
    );
};

export default OrderList;