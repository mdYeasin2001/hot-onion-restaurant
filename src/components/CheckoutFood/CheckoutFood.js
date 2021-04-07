import React from 'react';

const CheckoutFood = ({ food }) => {
    const { strMealThumb, strMeal , quantity} = food
    return (
        <div className="d-flex justify-content-between align-items-center bg-light shadow p-2 rounded mb-3">
            <img className="img-fluid w-25" src={strMealThumb} alt="meal thumb" />
            <div>
                <h6>{strMeal}</h6>
                <h4 className="text-danger">${55}</h4>
                <h6 className="text-muted">Delivery free</h6>
            </div>
            <div>
                <h3>- {quantity} +</h3>
            </div>
        </div>
    );
};

export default CheckoutFood;