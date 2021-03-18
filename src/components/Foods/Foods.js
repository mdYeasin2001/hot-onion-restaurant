import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Foods.css'
import Food from '../Food/Food';
import { FoodCategoryContext } from '../../FoodCategoryContext';


const Foods = () => {
    const [foodsCategory, setFoodsCategory] = useContext(FoodCategoryContext);
    // console.log(foodsCategory);
    const [foods, setFoods] = useState([]);
    // console.log(foods);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodsCategory}`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [foodsCategory]);
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                    foods.map(food => <Food key={food.idMeal} food={food} />)
                }
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-secondary">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Foods;