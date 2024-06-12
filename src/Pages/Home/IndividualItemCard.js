import React from 'react';

const IndividualItemCard = (items) => {
    const { name, img, description } = items.items;
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
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>

        </div>
    );
};

export default IndividualItemCard;