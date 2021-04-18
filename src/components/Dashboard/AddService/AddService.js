import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        //console.log(serviceData);
        const url = `https://morning-retreat-13723.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log(res));
        alert('Service added in database..');
    };


    const handleImageUpload =(event) =>{
        
        const imageData = new FormData();
        imageData.set('key', '8eae4c3e3fe826b3eb335a61e319bda4');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //console.log(imageURL);
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 m-2">
                <h3 className='text-primary p-2'>Add Service</h3> <hr/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className='text-primary'>Service Name</h6>
                            <input {...register("name", { required: true })} /> <br/>
                            {errors.name && <span style={{color: 'red'}}>Service name is required</span>} <br/>
                        </div>
                        <div className="col-md-3">
                            <h6 className='text-primary'>Service Charge</h6>
                            <input {...register("price", { required: true })} /> <br/>
                            {errors.price && <span style={{color: 'red'}}>Price is required</span>} <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className='text-primary'>Service Description</h6>
                            <input {...register("description", { required: true })} /> <br/>
                            {errors.description && <span style={{color: 'red'}}>Description is required</span>} <br/>
                        </div>
                        <div className="col-md-3">
                            <h6 className='text-primary'>Service Icon (Image)</h6>
                            <input name='image' type='file' onChange={handleImageUpload} /> <br/>
                            {errors.image && <span style={{color: 'red'}}>Photo/Icon is required</span>} <br/>
                        </div>
                    </div>
                    
                    <input className='btn btn-primary rounded-pill' type="submit" value='Add Service' />
                </form>
            </div>
        </section>
    );
};

export default AddService;