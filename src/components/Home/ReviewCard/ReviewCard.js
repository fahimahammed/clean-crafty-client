import React, { useState } from 'react';
import './ReviewCard.css';


const ReviewCard = ({singleReview}) => {
    const {displayName, designation, comment, photo} = singleReview;

    return (
        <div className='review-card'>
            <div className="d-flex">
                <div className='user-photo'>
                    <img src={photo} alt=""/>
                </div>
                <div className="user card-header">
                    <h6>- {displayName} </h6>
                    <small><i>( {designation} )</i></small>
                </div>
            </div>
            <p><i>"{comment}"</i> </p>
            
        </div>
    );
};

export default ReviewCard;