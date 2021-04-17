import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Reasons from '../Reasons/Reasons';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="services">
            <Services></Services>
            </div>
            <Blog></Blog>
            <Reasons></Reasons>
            <Review></Review>
            <Overview></Overview>
            <Footer></Footer>
        </div>
    );
};

export default Home;