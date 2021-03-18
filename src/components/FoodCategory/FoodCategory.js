import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodCategoryContext } from '../../FoodCategoryContext';

const FoodCategory = () => {
    const [foodsCategory, setFoodsCategory] = useContext(FoodCategoryContext);
    return (
        <div>
            <div className="foods-category p-5">
                <Link className="food-type" onClick={() => setFoodsCategory('breakfast')} to="/breakfast">Breakfast</Link>
                <Link className="food-type" onClick={() => setFoodsCategory('soup')} to="/soup">Soup</Link>
                <Link className="food-type" onClick={() => setFoodsCategory('chicken')} to="/chicken">Chicken</Link>
            </div>
        </div>
    );
};

export default FoodCategory;