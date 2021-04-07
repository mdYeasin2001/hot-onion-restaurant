import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BuySingleFoodContext } from '../../BuySingleFoodContext';
import { LoggedInUserContext } from '../../LoggedInUserContext';
import CheckoutFood from '../CheckoutFood/CheckoutFood';
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md';

const CheckOut = () => {
    const [food] = useContext(BuySingleFoodContext);
    const [loggedInUser] = useContext(LoggedInUserContext);
    const [foods, setFoods] = useState([]);
    const [deliveryDetails, setDeliveryDetails] = useState({});
    const {name, tel, address} = deliveryDetails;
    console.log(deliveryDetails);
    const subtotal = foods.length * 55;
    const tax = subtotal / 20;
    const delivery = 2;
    const total = subtotal + tax + delivery;
    console.log(foods);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food.id}`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [food.id])
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setDeliveryDetails(data);
    };
    // console.log(watch("example"));
    return (
        <div className="container py-5">
            <div className="row gy-4">
                <div className="col-md-5">
                    <h3 className="border-bottom py-2">Edit Delivery Details</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="my-3">
                            <input type="text" name="name" placeholder="Your business Name" className="form-control form-control-lg" ref={register({ required: true })} />
                            {errors.name && <span className="text-danger">Enter your business name</span>}
                        </div>

                        <div className="mb-3">
                            <input type="tel" name="tel" placeholder="Your phone number" className="form-control form-control-lg" ref={register({ required: true })} />
                            {errors.tel && <span className="text-danger">Enter your phone number</span>}
                        </div>

                        <div className="mb-3">
                            <input type="text" name="region" placeholder="Region or city" className="form-control form-control-lg" ref={register({ required: true })} />
                            {errors.region && <span className="text-danger">Enter your region or city name</span>}
                        </div>

                        <div className="mb-3">
                            <input type="text" name="address" placeholder="Address. for example: House# 123 Street# 123 ABC road" className="form-control form-control-lg" ref={register({ required: true })} />
                            {errors.address && <span className="text-danger">Enter your details address</span>}
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control" name="descriptions" placeholder="Add delivery introductions..." id="" cols="30" rows="5" ref={register({ required: true })}></textarea>
                            {errors.descriptions && <span className="text-danger">Add delivery introductions</span>}
                        </div>




                        <input className="btn btn-danger btn-lg d-block w-100" type="submit" value="Save & Continue" />
                    </form>
                </div>
                <div className="col-md-4 offset-md-3">
                    <h3 className="border-bottom py-2">Shipping & Billing</h3>
                    {deliveryDetails &&
                        <div className="bg-light shadow p-2 rounded mb-2">
                            <h4><MdLocationOn className="me-2"/>{name}</h4>
                            <h5 className="lead ms-4">{address}</h5>
                            <h5 className="lead"><MdCall className="me-2"/>{tel}</h5>
                            <h5 className="lead"><MdEmail className="me-2"/>{loggedInUser.email}</h5>
                        </div>
                    }
                    {foods.map(food => <CheckoutFood key={food.idMeal} food={food}/>)}
                    <div className="d-flex justify-content-between">
                        <p className="lead">Subtotal: {foods.length} items</p>
                        <p className="lead fw-bold">${subtotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="lead">Tax(5%):</p>
                        <p className="lead fw-bold">${tax}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="lead">Delivery fee:</p>
                        <p className="lead fw-bold">${delivery}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>Total:</h4>
                        <h4>${total}</h4>
                    </div>
                    <button className={`btn btn-danger btn-lg d-block w-100 ${name && tel && address ? "" : "disabled"}`}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;