import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div className="sign-in">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <h3 className="display-6 border-bottom border-dark py-2">Edit Delivery Details</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" name="name" placeholder="Name" className="form-control my-3 form-control-lg" ref={register({ required: true })} />
                            {errors.name && <span className="text-danger">Name is required</span>}

                            <input type="email" name="email" placeholder="Email" className="form-control form-control-lg mb-3" ref={register({ required: true })} />
                            {errors.email && <span className="text-danger">Email is required</span>}

                            <input type="text" name="address" placeholder="Address" className="form-control my-3 form-control-lg" ref={register({ required: true })} />
                            {errors.address && <span className="text-danger">Address is required</span>}

                            <input className="btn btn-danger btn-lg d-block w-100" type="submit" value="Save & Continue" />
                        </form>
                    </div>
                    <div className="col-md-4 offset-md-3">
                        <h1>This is Cart</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;