import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../images/logo.png';
import logo2 from '../../images/logo2.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid mx-md-5">
                <a className="navbar-brand" href="/"><img className="w-25" src={logo2} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/">Features</Link>
                        <a className="nav-link" href="/">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;