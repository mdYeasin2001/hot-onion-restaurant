import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FoodDetails.css';

const FoodDetails = () => {
    const { idFood } = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    console.log(foodDetails);
    const { strMealThumb, strMeal, strCategory, strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = foodDetails;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`)
            .then(res => res.json())
            .then(data => setFoodDetails(...data.meals))
    }, [idFood])
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 p-5">
                    {strMeal && <h2 className="display-6">{strMeal}</h2>}
                    {strCategory && <h6>Category: {strCategory}</h6>}
                    {strArea && <h6>Area: {strArea}</h6>}
                    {strIngredient1 && <ul>
                        <li>{strIngredient1}</li>
                        <li>{strIngredient2}</li>
                        <li>{strIngredient3}</li>
                        <li>{strIngredient4}</li>
                        <li>{strIngredient5}</li>
                    </ul>}
                    <h2 className="display-6">${55}</h2>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark fs-3 fw-bold">-</button>
                        <input type="number" value={1} className="btn btn-outline-dark w-25" disabled/>
                        <button type="button" className="btn btn-outline-dark fs-3 fw-bold">+</button>
                    </div>
                    <button className="btn btn-danger onion-btn d-block mt-3">Add</button>
                </div>
                <div className="col-md-6">
                    {strMealThumb && <img className="img-fluid food-img" src={strMealThumb} alt="MealThumb" />}
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;