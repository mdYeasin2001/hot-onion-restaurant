import React, { useContext, useEffect, useState } from 'react';
import { LoggedInUserContext } from '../../LoggedInUserContext';
import Order from '../Order/Order';

const Orders = () => {
    const [loggedInUser] = useContext(LoggedInUserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://stormy-anchorage-65547.herokuapp.com/orders/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])
    console.log(orders);
    return (
        <>
        
        {orders.length > 0 &&
            <div className="container py-5">
                <h1 className="display-5">Your Orders:</h1>
                <h6>Your Email: {loggedInUser.email}</h6>
                <table className="table table-borderless text-center">
                    <thead>
                        <tr className="table-light">
                            <th scope="col" className="text-start">Food Items</th>
                            <th scope="col">Price</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map(order => <Order key={order._id} order={order}/>)}
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default Orders;