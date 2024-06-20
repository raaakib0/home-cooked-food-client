import React from 'react';
import Comments from './Comments';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    // const { _id, name, price, email, description, img } = useLoaderData();

    return (
        <div>
            <h1>Item Details{ }</h1>
            <Comments></Comments>
        </div>
    );
};

export default ItemDetails;