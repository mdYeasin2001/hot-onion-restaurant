import React from 'react';
import { useHistory } from 'react-router';
import './Food.css';

const Food = ({food}) => {
    const {strMealThumb, strMeal, idMeal, strCategory, strArea} = food;
    const history = useHistory();

    const foodDetails = () => {
        history.push(`/foods/foodDetails/${idMeal}`);
    }
    return (
        <div className="col">
            <div onClick={foodDetails} className="card mx-4 h-100 border-0 food-card">
                <img className="img-fluid p-2" src={strMealThumb} alt="food-pic"/>
                <div className="card-body">
                    <h4 className="card-title">{strMeal}</h4>
                    <h6 className="text-muted">Category: {strCategory}</h6>
                    <h6 className="text-muted">Area: {strArea}</h6>
                </div>
            </div>
        </div>
    );
};

export default Food;