import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="col-md-3">
                    <a rel="noopener noreferrer" href="//" target="_blank" >Link Here</a>
                    <a rel="noopener noreferrer" href="//" target="_blank" >Read our blog</a>
                    <a rel="noopener noreferrer" href="//" target="_blank" >Sign up to delivery</a>
                    <a rel="noopener noreferrer" href="//" target="_blank" >Add your restaurant</a>
                    </div>
                    <div className="col-md-3">
                    <a rel="noopener noreferrer" href="//" target="_blank" >Get help</a>
                    <a rel="noopener noreferrer" href="//" target="_blank" >Read FAQs</a>
                    <a rel="noopener noreferrer" href="//" target="_blank" >View all cities</a>
                    <a rel="noopener noreferrer" href="//" target="_blank" >Restaurants near me</a>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-6">
                        <span>Copyright &copy; {new Date().getFullYear()} Red Onion Restaurant</span>
                    </div>
                    <div className="col-md-2">
                    <a rel="noopener noreferrer" href="//" target="_blank" >Privacy Policy</a>
                    </div>
                    <div className="col-md-2">
                    <a rel="noopener noreferrer" href="//" target="_blank" >Terms of Use</a>
                    </div>
                    <div className="col-md-2">
                    <a rel="noopener noreferrer" href="//" target="_blank" >Pricing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;