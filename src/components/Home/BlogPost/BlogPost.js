import React from 'react';
import './BlogPost.css';

const BlogPost = ({ blog }) => {
    const { title, image, post, date } = blog;
    return (
        <div className="card blog-card m-3">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p><small> {date} </small></p>
                    <h4> {title} </h4>
                    <p className="card-text"> {post} </p>
                    <button className='btn btn-outline-primary rounded-pill'>Learn More</button>
                </div>
        </div>
    );
};

export default BlogPost;