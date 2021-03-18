import React from 'react';
import './SignIn.css';
import logo from '../../images/logo2.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div className="sign-in">
            <div className="container py-5">
                <div className="col-md-4 offset-md-4 text-center">
                    <img className="img-fluid w-50" src={logo} alt="" />
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" name="name" placeholder="Name" className="form-control my-3 form-control-lg" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger">Name is required</span>}

                        <input type="email" name="email" placeholder="Email" className="form-control form-control-lg mb-3" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger">Email is required</span>}

                        <input type="password" name="password" placeholder="Password" className="form-control form-control-lg mb-3" ref={register({ required: true })} />
                        {errors.password && <span className="text-danger">Password is required</span>}

                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control form-control-lg mb-3" ref={register({ required: true })} />
                        {errors.confirmPassword && <span className="text-danger">Confirm Password is required</span>}

                        <input className="btn btn-danger btn-lg d-block w-100" type="submit" value="Sign in" />
                    </form>
                    <Link className="text-danger text-decoration-none text-center d-block pt-2" to="/login">Already have and account</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;