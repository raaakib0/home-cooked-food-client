import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { set, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn } = useContext(authContext);
    const [logInError, setLogInError] = useState('');

    const handleLogin = (data) => {
        console.log(data)
        setLogInError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message);
                setLogInError(error.message);
            });
    }
    console.log(logInError)

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
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <p role="alert" className='text-red-600' >{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: "Password is required" })} type="password" name='password' placeholder="password" className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600' >{errors.password.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {
                                logInError && <p className='text-red-600'>{logInError}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="divider">OR</div>
                    </form>
                    <p className='text-center'>Create a New Account  <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;