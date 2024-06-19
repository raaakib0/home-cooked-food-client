import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyItems = () => {

    // const { data: MyItem = [], isLoading } = useQuery({
    //     queryKey: ['allItem'],
    //     queryFn: () => fetch('http://localhost:5000/allItem')
    //         .then(res => res.json())
    // })

    const { data: myCookedItems = [], isLoading } = useQuery({
        queryKey: ['allItem'],
        queryFn: () => fetch('http://localhost:5000/allItem')
            .then(res => res.json())
    })
    console.log(myCookedItems);

    return (
        <div className="overflow-x-auto">
            <h1>My Items</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCookedItems.map((Items, i) =>
                            <tr key={Items._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={Items.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{Items.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {Items.description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        )}
                </tbody>

            </table>
        </div>
    );
};

export default MyItems;