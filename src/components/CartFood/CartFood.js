import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const CartFood = ({food}) => {
    console.log(food);
    const [removed, setRemoved] = useState(false);
    const {strMealThumb, AddDate, price, quantity, strMeal, strCategory, _id} = food;
    const removeFromCart = (id) => {
        fetch(`https://stormy-anchorage-65547.herokuapp.com/removeFromCart/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => setRemoved(data))

    }
    return (
        <div className={`col d-flex justify-content-between align-items-center my-3 bg-light rounded shadow p-2 ${removed ? "d-none": ""}`}>
            <img className="img-fluid w-25" src={strMealThumb} alt="MealThumb"/>
            <div>
                <h4>{strMeal}</h4>
                <h6>Category: {strCategory}</h6>
                <h6>Add Date: {AddDate}</h6>
            </div>
            <div>
                <h3>${price}</h3>
            </div>
            <div className="flex-column">
                <h3>- {quantity} +</h3>
                <button onClick={() => removeFromCart(_id)} className="mt-5 btn btn-danger"><MdDelete/></button>
            </div>
        </div>
    );
};

export default CartFood;