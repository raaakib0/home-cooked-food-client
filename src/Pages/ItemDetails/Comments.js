import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Comments = () => {

    const { data: userComment=[], isLoading} = useQuery({
        queryKey:['com'],
        queryFn: () => fetch('http://localhost:5000/comments').then(res=>res.json())
    })

    return (
        <div className="overflow-x-auto">
            <h1 className='text-center'>My comment</h1>
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
                        userComment.map((comment, i) =>
                            <tr key={comment._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex item-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={comment.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{comment.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {comment.comment}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{comment.review}</span>
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

export default Comments;