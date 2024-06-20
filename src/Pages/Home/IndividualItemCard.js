import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const IndividualItemCard = (items) => {
    const { name, img, description } = items.items;
    // const items = useLoaderData();
    function loader() {
        return items;
    }
    // console.log(items)
    return (
        < div className="card card-compact w-96 bg-base-100 shadow-xl" >
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={'/ItemDetails'} ><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default IndividualItemCard;