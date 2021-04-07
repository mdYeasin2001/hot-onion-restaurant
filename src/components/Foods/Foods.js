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
    const [loading, setLoading] = useState(true);
    // console.log(foods);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodsCategory}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals);
                setLoading(false);
            })
    }, [foodsCategory]);
    return (
        <div className="container py-5">
            {loading &&
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                    foods.map(food => <Food key={food.idMeal} food={food} />)
                }
            </div>
        </div>
    );
};

export default Foods;