import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white mx-md-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="logo" src={logo2} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link mb-3 mx-2" aria-current="page" to="/"><FontAwesomeIcon icon={faShoppingCart} className="fs-5 shopping-cart" /></Link>
                        <Link className="btn btn-outline-danger mb-3 mx-2 onion-btn" aria-current="page" to="/">Login</Link>
                        <Link className="btn btn-danger mb-3 mx-2 onion-btn" to="/">Sign up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;