import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const EditComment = (id, comment) => {
    const [editComent, setEditComent] = useState(null);
    console.log(id)
    console.log(id.comment)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleEditComment = data => {
        // const formData = new FormData();
        
        console.log(id.id)
        console.log(data.editComments)
        // console.log(data)
        // console.log(formData)
    }


    return (
        <div>
            {/* edit */}
            <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-xs btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">

                        {/* edit comment */}
                        <div className='w-96 p-2 '>
                            <h2 className="text-4xl flex justify-center mt-3">Edit Comment</h2>
                            <form onSubmit={handleSubmit(handleEditComment)}>
                                <div className="form-control">
                                    <label className="label justify-center">
                                        <span className="label-text ">Write your Comments</span>
                                    </label>
                                    <textarea type="text" {...register("editComments", {
                                        required: "comments is Required"
                                    })} defaultValue={ id?.comment} className="input input-bordered w-full max-w-xs h-24" />
                                </div>
                                <input className=' modal-action btn btn-accent w-full mt-4' value="Save" type="submit" />
                            </form>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <input className=' btn btn-accent w-full' value="Close" type="submit" />
                            </form>
                        </div>
                    </div>
                </dialog>
            </th>
        </div>
    );
};

export default EditComment;