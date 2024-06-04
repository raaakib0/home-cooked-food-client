import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(authContext);

    const handleSignUp = (data) => {

        const name = data.name;
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user.email);
                // navigate(from, { replace: true })
                // toast.success('User Created Successfully.');
                {
                    <div className="toast toast-top toast-center">
                        <div className="alert alert-success">
                            <span>Message sent successfully.</span>
                        </div>
                    </div>;
                }
                // setAuthToken(user);
                // console.log(name);
                const userInfo = {
                    displayName: name
                }
                // saveUser(name, email);
            })
            .catch(error => {
                // console.log(error)
                // setSignUPError(error.message)
            });
    }

    return (
        <div className="hero w-full my-20">
            <Helmet>
                <title>SignUp | HCF</title>
            </Helmet>
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    {/* <img className='w-3/4' src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "Name is required" })} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { minLength: { value: 6, message: "Password must be 6 character" } }, { required: "password is required" })} name='password' placeholder="password" className="input input-bordered" required />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control">
                            {/* <label className="cursor-pointer label">
                                <span className="label-text">Request for Seller</span>
                                <input type="checkbox" name="checkbox" className="checkbox checkbox-info" />
                            </label> */}

                            {/* {signUpError && <p className='text-red-600'>{signUpError == "Firebase: Error (auth/user-not-found)." ? "User Not Found" : ""}</p>}
                            {signUpError && <p className='text-red-600'>{signUpError == "Firebase: Error (auth/invalid-email)." ? "Invalid Email" : ""}</p>}
                            {signUpError && <p className='text-red-600'>{signUpError == "Firebase: Error (auth/wrong-password)." ? "Wrong Password" : ""}</p>}
                            {signUpError && <p className='text-red-600'>{signUpError == "Firebase: Password should be at least 6 characters (auth/weak-password)." ? "Weak password enter at least 6 characters" : ""}</p>}
                            {signUpError && <p className='text-red-600'>{signUpError == "Firebase: Error (auth/email-already-in-use)." ? "Email already in use" : ""}</p>} */}
                            {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}

                        </div>
                        <div className="form-control mt-6">
                            {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;