import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CartFoodsContext } from '../../CartFoodsContext';
import { LoggedInUserContext } from '../../LoggedInUserContext';
import CartFood from '../CartFood/CartFood';

const Cart = () => {
    const history = useHistory();
    const [addedCartFoods, setAddedCartFoods] = useContext(CartFoodsContext);
    const [loading, setLoading] = useState(true)
    const [cartFoods, setCartFoods] = useState([]);
    const [loggedInUser] = useContext(LoggedInUserContext);
    useEffect(() => {
        fetch(`https://stormy-anchorage-65547.herokuapp.com/cartFoods/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setCartFoods(data);
                setAddedCartFoods(data);
                setLoading(false)

            })
    }, [loggedInUser.email, setAddedCartFoods]);
    const subtotal = cartFoods.reduce((sum, food) => sum = sum + food.price * food.quantity, 0);
    const tax = subtotal / 20;
    let shippingFee = 0;
    if (subtotal > 100) {
        shippingFee = 10
    } else if (subtotal > 50) {
        shippingFee = 15
    } else if (subtotal >= 0) {
        shippingFee = 0
    }
    const total = subtotal + tax + shippingFee;

    const handleCheckout = () => {
        history.push('/checkout');
    };
    return (
        <div className="container-fluid px-5">
            {loading &&
                <div className="d-flex justify-content-center pt-5">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {cartFoods.length > 0 &&
                <div className="row g-4">
                    <div className="col-md-8">
                        {cartFoods.map(food => <CartFood key={food._id} food={food} />)}
                    </div>
                    <div className="col-md-4">
                        <div className="my-3 bg-light rounded shadow p-2">
                            <h2 className="display-6 fs-2">Order Summary</h2>
                            <div className="d-flex justify-content-between">
                                <p className="lead">Subtotal ({cartFoods.length} items)</p>
                                <p className="fw-bold lead">${subtotal}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="lead">Shipping Fee</p>
                                <p className="fw-bold lead">${shippingFee}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="lead">Tax(5%)</p>
                                <p className="fw-bold lead">${tax}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="lead fw-bold">Total</p>
                                <p className="fw-bold lead">${total}</p>
                            </div>
                            <button onClick={handleCheckout} className="btn btn-danger d-block w-100">Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            }
            {cartFoods.length > 0 ||
                <h3 className="display-6 fs-1 text-muted text-center pt-5">There is no food items added in cart</h3>
            }
        </div>
    );
};

export default Cart;