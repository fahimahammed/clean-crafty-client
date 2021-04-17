import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';

const Review = () => {
    const [reviewData, setReviewData] = useState({});
    useEffect(()=>{
        fetch('https://morning-retreat-13723.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviewData(data))
    })
    return (
        <section className='review-container'>
            <h1 className='text-center py-5'>Happy <span>Customers</span>, Happy Homes</h1>
            <div className="review-card-container pb-5">
                {
                    reviewData.length && reviewData.map(singleReview => <ReviewCard key={singleReview._id} singleReview={singleReview}></ReviewCard>)
                }  
            </div>
        </section>
    );
};

export default Review;