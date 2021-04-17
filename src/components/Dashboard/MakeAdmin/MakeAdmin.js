import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = {
            email: data.email,
            role: 'admin'
        }
        console.log(serviceData);
        const url = `https://morning-retreat-13723.herokuapp.com/admin/add`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log(res));
        alert('Admin added successfully.');
    };
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 m-2">
                <h3 className='py-3 text-primary'>Make Admin</h3> <hr/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} placeholder='Enter Email' size='50'/> <br/>
                    {errors.email && <span>This field is required</span>} <br/>

                    <input className='btn btn-primary' type="submit" value='Make Admin' />
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;