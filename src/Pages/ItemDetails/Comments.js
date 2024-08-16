import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/AuthProvider';
// import AddComments from './AddComments';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal';
import Loading from '../Shared/Loading';
import EditComment from './EditComment';


const Comments = () => {
    const [deletingComment, setDeletingComment] = useState(null);

    const closeModal = () => {
        setDeletingComment(null);
    }

    const { data: userComment = [], isLoading, refetch } = useQuery({
        queryKey: ['com'],
        queryFn: () => fetch('http://localhost:5000/comments').then(res => res.json())
    })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(authContext);

    const handleAddComment = data => {
        const comment = {
            name: data.name,
            email: user.email,
            comments: data.comments,
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                toast.success(`${data.comments} is added successfully`);
                refetch();
            })
    }


    // Delete Comment

    const handleDeleteComment = comment => {
        // console.log(comment)
        fetch(`http://localhost:5000/comments/${comment._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${comment.comments} deleted successfully`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center '>
            <div className="overflow-x-auto">
                <h1 className='text-center'>My comment</h1>
                <table className="table">
                    {/* head */}
                    {/* <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody className='flex flex-col-reverse'>
                        {
                            userComment.map((comment, i) =>
                                <tr key={comment._id}>
                                    <td>
                                        <div className="flex item-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={comment.img} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{comment.name}</div>
                                                <div className="text-sm opacity-50">comment date</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {comment.comments}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{comment.email}</span>
                                    </td>
                                    <td>{comment.review}</td>
                                    <th>
                                        <EditComment comment={comment.comments} id={comment._id}>
                                            <button className="btn btn-xs btn-primary">Edit</button>
                                        </EditComment>
                                    </th>
                                    {/* if user email = comment email => show delet button */}
                                    <th>
                                        <label onClick={() => setDeletingComment(comment)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    </th>
                                </tr>
                            )}
                    </tbody>

                </table>
                {
                    deletingComment && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingComment.comments}. It cannot be undone.`}
                        successAction={handleDeleteComment}
                        successButtonName="Delete"
                        modalData={deletingComment}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
            {/* Comment Box */}
            <div className='w-96 p-7'>

                <h2 className="text-4xl flex justify-center">Comment Box</h2>

                <form onSubmit={handleSubmit(handleAddComment)}>
                    <div className="form-control">
                        <label className="label justify-center">
                            <span className="label-text">Write your Comments</span>
                        </label>
                        <textarea type="text" {...register("comments", {
                            required: "comments is Required"

                        })} className="input input-bordered w-full max-w-xs h-24" />
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Send" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Comments;