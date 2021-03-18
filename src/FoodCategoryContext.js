import React, { createContext, useState } from 'react';

export const FoodCategoryContext = createContext();

export const FoodCategoryProvider = props => {
    const [foodCategory, setFoodsCategory] = useState('breakfast');
    console.log(foodCategory);
    return(
        <FoodCategoryContext.Provider value={[foodCategory, setFoodsCategory]}>
            {props.children}
        </FoodCategoryContext.Provider>

    );
}