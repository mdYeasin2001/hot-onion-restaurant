import { createContext, useState } from "react";

export const BuySingleFoodContext = createContext();

export const SingleFoodProvider = props => {
    const [food, setFood] = useState({});
    return(
        <BuySingleFoodContext.Provider value={[food, setFood]}>
            {props.children}
        </BuySingleFoodContext.Provider>
    );
}