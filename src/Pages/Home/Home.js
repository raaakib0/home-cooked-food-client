import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import { Helmet } from 'react-helmet';
import ItemCard from './ItemCard';

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home | HCF</title>
            </Helmet>
            <Banner></Banner>
            <ItemCard></ItemCard>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;