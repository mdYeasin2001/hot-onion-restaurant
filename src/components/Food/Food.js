import React from 'react';
import './Food.css';

const Food = ({food}) => {
    const {foodThumb, foodName, about, foodPrice} = food;
    return (
        <div className="col">
            <div className="card mx-4 h-100 border-0 food-card">
                <img className="img-fluid p-2" src={foodThumb} alt="food-pic"/>
                <div className="card-body text-center">
                    <h4 className="card-title">{foodName}</h4>
                    <h6 className="text-muted">{about}</h6>
                    <h4>${foodPrice}</h4>
                </div>
            </div>
        </div>
    );
};

export default Food;