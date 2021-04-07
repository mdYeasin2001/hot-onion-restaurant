import React, { useContext } from 'react';
import './SignIn.css';
import logo from '../../images/logo2.png';
import { useForm } from 'react-hook-form';
import { UserTypeContext } from '../../UserTypeContext';
import { FcGoogle } from 'react-icons/fc';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { LoggedInUserContext } from '../../LoggedInUserContext';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    const [newUser, setNewUser] = useContext(UserTypeContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));



    // authentication providers
    var provider = new firebase.auth.GoogleAuthProvider();

    // Google sign in
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { email, displayName, photoURL } = result.user;
                setLoggedInUser({ name: displayName, email, image: photoURL })
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
            });
    }
    return (
        <div className="sign-in">
            <div className="container py-5">
                <div className="col-md-4 offset-md-4 card bg-transparent p-3">
                    <div className="text-center">
                        <img className="img-fluid w-50" src={logo} alt="logo" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {newUser &&
                            <div className="my-3">
                                <input type="text" name="name" placeholder="Name" className="form-control form-control-lg" ref={register({ required: true })} />
                                {errors.name && <span className="text-danger">Name is required</span>}
                            </div>
                        }

                        <div className="my-3">
                            <input type="email" name="email" placeholder="Email" className="form-control form-control-lg" ref={register({ required: true })} />
                            {errors.email && <span className="text-danger">Email is required</span>}
                        </div>

                        <div className="mb-3">
                            <input type="password" name="password" placeholder="Password" className="form-control form-control-lg" ref={register({ required: true })} />
                            {errors.password && <span className="text-danger">Password is required</span>}
                        </div>

                        {newUser &&
                            <div className="mb-3">
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control form-control-lg" ref={register({ required: true })} />
                                {errors.confirmPassword && <span className="text-danger">Confirm Password is required</span>}
                            </div>
                        }

                        <input className="btn btn-danger btn-lg d-block w-100" type="submit" value={newUser ? 'Sign up' : 'Log in'} disabled/>
                    </form>

                    <span onClick={() => setNewUser(!newUser)} className="text-danger text-decoration-none text-center d-block pt-2 toggler-log-sign-in">{newUser ? "Don't have an account?" : "Already have an account"}</span>
                    <span className="text-danger text-decoration-none text-center d-block pt-5">or</span>
                    <button onClick={handleGoogleSignIn} className="btn btn-danger btn-lg w-100 mt-5"><FcGoogle className="fs-3 me-5" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;