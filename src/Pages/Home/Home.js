import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Helmet</title>
            </Helmet>
            <Banner></Banner>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;