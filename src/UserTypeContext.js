import React, { createContext, useState } from "react";

export const UserTypeContext = createContext();

export const UserTypeProvider = props => {
    const [newUser, setNewUser] = useState(false);
    return(
      <UserTypeContext.Provider value={[newUser, setNewUser]}>
          {props.children}
      </UserTypeContext.Provider>  
    );

}
