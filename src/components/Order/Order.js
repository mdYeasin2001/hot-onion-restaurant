import React from 'react';

const Order = ({order}) => {
    const {total, orderDate, foodDetails} = order;
    return (
        <tr>
            <th scope="row" className="fw-normal text-start">{foodDetails?.length}</th>
            <td>${total}</td>
            <td>{orderDate}</td>
        </tr>
    );
};

export default Order;