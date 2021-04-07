import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FoodDetails.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { BuySingleFoodContext } from '../../BuySingleFoodContext';
import { LoggedInUserContext } from '../../LoggedInUserContext';

const FoodDetails = () => {
    const [loggedInUser] = useContext(LoggedInUserContext);
    const [food, setFood] = useContext(BuySingleFoodContext);
    const [addToCartSucceed, setAddToCartSucceed] = useState(false);
    const [loading, setLoading] = useState(true);

    const { idFood } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [foodDetails, setFoodDetails] = useState({});
    const history = useHistory();
    // console.log(foodDetails);
    const { strMealThumb, idMeal, strMeal, strCategory, strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = foodDetails;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`)
            .then(res => res.json())
            .then(data => {
                setFoodDetails(...data.meals);
                setLoading(false);
            })
    }, [idFood]);

    const handleBuyFood = (id) => {
        setFood({id});
        history.push('/checkout');
    };
    const handleAddToCart = (food) => {
        const cartFoodDetails = {email: loggedInUser.email, quantity, price: 55, AddDate: new Date().toDateString('dd/MM/yyyy'), ...food}
        // console.log(cartFoodDetails);
        fetch('https://stormy-anchorage-65547.herokuapp.com/addToCart', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(cartFoodDetails)
        })
        .then(res => res.json())
        .then(data => setAddToCartSucceed(data))
    }
    return (
        <div className="container py-5">
            {loading &&
                <div className="d-flex justify-content-center pt-5">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col-md-6 p-5">
                    {strMeal && <h2 className="display-6">{strMeal}</h2>}
                    {strCategory && <h6>Category: {strCategory}</h6>}
                    {strArea && <h6>Area: {strArea}</h6>}
                    {strIngredient1 &&
                        <>
                            <h5>Ingredients:</h5>
                            <ul>
                                <li>{strIngredient1}</li>
                                <li>{strIngredient2}</li>
                                <li>{strIngredient3}</li>
                                <li>{strIngredient4}</li>
                                <li>{strIngredient5}</li>
                            </ul>
                        </>
                    }
                    {strMealThumb &&
                        <>
                            <h2 className="display-6">${55}</h2>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" onClick={() =>quantity > 1 && setQuantity(quantity - 1)} className="btn btn-outline-dark fs-3 fw-bold">-</button>
                                <input type="number" value={quantity} className="btn btn-outline-dark w-25" disabled />
                                <button type="button" onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-dark fs-3 fw-bold">+</button>
                            </div>
                            <br/>
                            <button onClick={() => handleAddToCart(foodDetails)} className="btn btn-danger onion-btn mt-3 me-2"><ShoppingCartIcon className="me-3 fs-4"/>Add</button>
                            {/* <button onClick={() => handleBuyFood(idMeal)} className="btn btn-danger onion-btn mt-3">Buy Now<ArrowForwardIcon className="ms-3 fs-4"/></button> */}
                        </>
                    }
                </div>
                <div className="col-md-6">
                    {strMealThumb && <img className="img-fluid food-img" src={strMealThumb} alt="MealThumb" />}
                </div>
            </div>
            {addToCartSucceed && alert("Food add to cart successfully")}
        </div>
    );
};

export default FoodDetails;