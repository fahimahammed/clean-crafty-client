import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {displayName, photoURL} = loggedInUser;

    const onSubmit = data => {
        //console.log(data);
        const reviewData = {
            ...data,
            photo: photoURL
        }
        const url = `https://morning-retreat-13723.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => {
            
        });
        alert('Thank you for your review');
        history.replace(from);
    }
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 m-2 p-2">
                <h1>Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <h6>Your Name</h6>
                        <input defaultValue={displayName} {...register("displayName")} placeholder='Your Name' size='47'/> <br/>
                        {errors.displayName && <span>This field is required</span>} <br/>

                        <h6>Designation</h6>
                        <input {...register("designation", { required: true })} placeholder='Designation' size='47' /> <br/>
                        {errors.designation && <span>This field is required</span>} <br/>

                        <h6>Comment</h6>
                        <textarea {...register("comment", { required: true })} placeholder='Write your Comment' rows="4" cols="50" /> <br/>
                        {errors.comment && <span>This field is required</span>} <br/>

                        <input className='btn btn-primary' type="submit" />
                    </form>
            </div>
            
            
        </section>
    );
};

export default AddReview;