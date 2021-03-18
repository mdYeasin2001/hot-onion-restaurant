import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Foods.css'
import fakeData from '../../fakeData/fakeData.json';
import Food from '../Food/Food';


const Foods = () => {
    const [foodsCategory, setFoodsCategory] = useState('breakfast');
    // console.log(foodsCategory);
    const [foods, setFoods] = useState([]);
    // console.log(foods);
    useEffect(() => {
        const selectedFoods = fakeData.filter(food => food.foodCategory === foodsCategory);
        setFoods(selectedFoods);
    }, [foodsCategory]);
    return (
        <div className="container py-5">
            <div className="foods-category mb-5">
                <Link className="food-type" onClick={() => setFoodsCategory('breakfast')} to="/breakfast">Breakfast</Link>
                <Link className="food-type" onClick={() => setFoodsCategory('lunch')} to="/lunch">Lunch</Link>
                <Link className="food-type" onClick={() => setFoodsCategory('dinner')} to="/dinner">Dinner</Link>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    foods.map(food => <Food key={food.key} food={food} />)
                }
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-secondary">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Foods;