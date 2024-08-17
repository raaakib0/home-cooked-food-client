import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal';

const MyItems = () => {
    const [deletingItem, setDeletingItem] = useState(null);
    
    const closeModal = () => {
        setDeletingItem(null);
    }

    // const { data: MyItem = [], isLoading } = useQuery({
    //     queryKey: ['allItem'],
    //     queryFn: () => fetch('http://localhost:5000/allItem')
    //         .then(res => res.json())
    // })

    const { data: myCookedItems = [], isLoading, refetch } = useQuery({
        queryKey: ['allItem'],
        queryFn: () => fetch('http://localhost:5000/allItem')
            .then(res => res.json())
    })
    console.log(myCookedItems);


    // Delete Comment

    const handleDeleteItems = Items => {
        // console.log(comment)
        fetch(`http://localhost:5000/allItem/${Items._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${Items.name} deleted successfully`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

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
                        <th>SL</th>
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
                                    <h3>{i + 1}</h3>
                                </td>
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
                                
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                                <th>
                                    <label onClick={() => setDeletingItem(Items)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                </th>
                            </tr>
                        )}
                </tbody>

            </table>
            {
                deletingItem &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingItem.name}. It cannot be undone.`}
                    successAction={handleDeleteItems}
                    successButtonName="Delete"
                    modalData={deletingItem}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyItems;