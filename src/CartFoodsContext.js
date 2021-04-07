import React, { createContext, useState } from 'react';

export const CartFoodsContext = createContext();

export const CartFoodsProvider = props => {
    const [addedCartFoods, setAddedCartFoods] = useState([]);
    return (
        <CartFoodsContext.Provider value={[addedCartFoods, setAddedCartFoods]}>
            {props.children}
        </CartFoodsContext.Provider>
    );
};
