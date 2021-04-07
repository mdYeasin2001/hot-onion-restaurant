import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { LoggedInUserContext } from './LoggedInUserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(LoggedInUserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;