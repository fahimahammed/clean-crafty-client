import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { id } = useParams();
    const [checkService, setCheckServece] = useState([]);
    const [order, setOrder] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //console.log(loggedInUser.email);
    const {displayName} = loggedInUser;
    useEffect(() => {
        fetch('https://morning-retreat-13723.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setCheckServece(data))
    }, [])

    const clickedService = checkService.filter(service => service._id === id);
    //console.log(clickedService[0]);

    const { name, price } = clickedService[0] || {};
    const onSubmit = data => {
        const orderData={
            userName: data.displayName,
            email: loggedInUser.email,
            phone: data.phone,
            address: data.address,
            serviceName: name,
            price: price
        }
        setOrder(orderData);
    };
    //console.log('cliked service: ', clickedService[0])
   //console.log('data:----', order)
    return (
        <div className='row'>
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div style={{display: order ? 'none' : 'block'}} className='col-md-8 p-5'>
                <h3 className='pb-2 text-info'>Checkout</h3><hr/>
                <h5 className='pt-2 text-primary'>Service Name: {name}</h5>
                <p className="pb-2 text-primary">Service Charge: $ {price}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Your Name</h6>
                    <input defaultValue={displayName} {...register("displayName")} placeholder='Your Name' size='50'/> <br/>
                    {errors.displayName && <span style={{color: 'red'}}>Name is required</span>} <br/>

                    <h6>Your Phone no</h6>
                    <input {...register("phone", { required: true })} placeholder='Your Phone no' size='50'/> <br/>
                    {errors.phone && <span style={{color: 'red'}}>Phone no is required</span>} <br/>

                    <h6>Your Address</h6>
                    <input {...register("address", { required: true })} placeholder='Your Address' size='50'/> <br/>
                    {errors.address && <span style={{color: 'red'}}>Address is required</span>} <br/>

                    {
                        !clickedService[0] ? <div>
                            <p style={{color: 'red'}}><FontAwesomeIcon icon={faExclamationCircle} /> Please select a service. 
                                <Link to='/home'>Go to Home</Link>
                            </p>
                            <input className='btn btn-dark' type="submit" value='Proced to Pay' disabled/> 
                        </div>: <input className='btn btn-primary' type="submit" value='Proced to Pay'/>
                    }
                </form>
            </div>
            <div style={{display: order ? 'block' : 'none'}} className='col-md-5 p-2 m-2'>
                <h3 className='text-primary'>Payment <small>(Pay with Stripe)</small></h3> <hr/>
                <h5 className='pt-3'>Service Name: {name}</h5>
                <h6 className="pb-2">You have to pay $ {price}</h6>
                <p className=' text-success'>Enter card information to PAY</p>
                <div className="border py-5 px-2">
                    <ProcessPayment order={order} ></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Checkout;