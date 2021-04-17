import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServiceCard = ({service}) => {
    const {_id, name, price, description} = service;
    const deleteProduct = id =>{
        fetch(`https://morning-retreat-13723.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div className="row m-2 bg-light">
                <div className="col-md-3">{name}</div>
                <div className="col-md-1 text-center">{price}</div>
                <div className="col-md-4">{description}</div>
                <div className="col-md-3 text-center">
                    <button onClick={()=>deleteProduct(_id)}  className='btn btn-danger'> <FontAwesomeIcon icon={faTrashAlt} /> </button>
                </div>
        </div>
    );
};

export default ManageServiceCard;