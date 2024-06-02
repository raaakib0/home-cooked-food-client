import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit } = useForm()

    const handleLogin = (data) => console.log(data)

    return (
        <div className="hero w-full my-20 bg-blue-200 dark:bg-base-200">
            <Helmet>
                <title>Login | HCF</title>
            </Helmet>
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    {/* <img className='w-3/4' src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    {/* <form onSubmit={handleLogin} className="card-body"> */}
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true})} type="text" name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <p role="alert" className='text-red-600' >{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" name='password' placeholder="password" className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600' >{errors.password.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {/* {loginError && <p className='text-red-600'>{loginError == "Firebase: Error (auth/user-not-found)." ? "User Not Found" : ""}</p>}
                            {loginError && <p className='text-red-600'>{loginError == "Firebase: Error (auth/invalid-email)." ? "Invalid Email" : ""}</p>}
                            {loginError && <p className='text-red-600'>{loginError == "Firebase: Error (auth/wrong-password)." ? "Wrong Password" : ""}</p>} */}
                            {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                            <div className="divider">OR</div>
                        </div>
                    </form>
                    {/* <p className='text-center'>New to Enjoy Trip <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p> */}
                    <p className='text-center'>New to Home Cooked Food Sign Up </p>
                    {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>
    );
};

export default Login;