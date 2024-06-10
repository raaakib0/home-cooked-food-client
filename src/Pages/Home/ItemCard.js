import React, { useEffect, useState } from 'react';
import IndividualItemCard from './IndividualItemCard';



const ItemCard = () => {

    const [cookedItem, setCookedItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/itemCategories')
            .then(res => res.json())
            .then(data => setCookedItem(data))
    }, [])


    return (

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cookedItem.map(item => <IndividualItemCard
                    key={item._id}
                    items={item}
                ></IndividualItemCard>)
            }
        </div>

    );
};

export default ItemCard;