import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const { data: Users = [], isLoading, refetch } = useQuery({
        queryKey: ['allItem'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
    })
    console.log(Users);

    return (
        <div className="overflow-x-auto">
            <h1>All Users</h1>
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
                        Users.map((user, i) =>
                            <tr key={user._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <h3>{i + 1}</h3>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>

                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                                <th>
                                    {/* <label onClick={() => setDeletingItem(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label> */}
                                    <label  htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                </th>
                            </tr>
                        )}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default AllUser;