import React from 'react';
import logo from '../../images/logo2.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div className="sign-in">
            <div className="container py-5">
                <div className="col-md-4 offset-md-4 text-center">
                    <img className="img-fluid w-50" src={logo} alt="" />
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" name="email" placeholder="Email" className="form-control form-control-lg my-3" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger">Email is required</span>}

                        <input type="password" name="password" placeholder="Password" className="form-control form-control-lg mb-3" ref={register({ required: true })} />
                        {errors.password && <span className="text-danger">Password is required</span>}

                        <input className="btn btn-danger btn-lg d-block w-100" type="submit" value="Log in" />
                    </form>
                    <Link className="text-danger text-decoration-none text-center d-block pt-2" to="/signIn">Don't have an account?Create one</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;