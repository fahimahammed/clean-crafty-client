import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import blogImg1 from '../../../images/cleanBlog-1.png';
import blogImg2 from '../../../images/cleanBlog-2.png';
import blogImg3 from '../../../images/cleanBlog-3.png';
import './Blog.css';

const blogData = [
    {
        _id: 1,
        title: 'Professional Carpet Cleaning',
        date: '16 March, 2021',
        post: 'Cleaning is the process of removing unwanted substances, such as dirt, infectious agents. Cleaning tasks such as dusting, mopping, waxing floors and vacuuming.',
        image: blogImg1
    },
    {
        _id: 2,
        title: 'Confessions of an Office Cleaner ',
        date: '09 June, 2020',
        post: ' Allow yourself 2 1/2 hours a week to clean a two-bedroom home. You should also add an extra 1 hour a week when you decide to deep clean. If you have a typical',
        image: blogImg2
    },
    {
        _id: 3,
        title: 'Ensure Good Hygiene at the Office',
        date: '29 March, 2020',
        post: 'Cleaning tasks such as dusting, sweeping floors and vacuuming. Refilling supplies, such as toilet paper. Cleaning spills, broken glass and other messes.',
        image: blogImg3
    }
]

const Blog = () => {
    return (
        <section className='blog-container mt-5 py-5'>
            <div className="container">
                <h1 className='text-center'>Cleaning Industry <span>News</span></h1>
                <p className='text-center'>We write about industry developments, training, health and safety, eco-friendly cleaning products, recycling practices and advice for working with professional cleaners.</p>
                <div className="blog-post">
                    {
                        blogData.map(blog => <BlogPost key={blog._id} blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;