import React from 'react';

const IndividualItemCard = (items) => {
    const { name, img } = items.items;
    // console.log(items)
    return (
        < div className="card card-compact w-96 bg-base-100 shadow-xl" >
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default IndividualItemCard;