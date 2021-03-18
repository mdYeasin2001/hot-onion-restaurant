import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Services.css'

const Services = () => {
    return (
        <div className="container py-5">
            <div className="text-center">
            <h2 className="display-6">Why You Choose Us</h2>
            <p className="lead">Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                <div className="col">
                    <div className="card services-card">
                        <img src="https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVsaXZlcnklMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">First Delivery</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" className="stretched-link more-btn">See more<FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon ms-2" /></a>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card services-card">
                        <img src="https://images.unsplash.com/photo-1516554646385-7642248096d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">A Good Auto Delivery</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" className="stretched-link more-btn">See more<FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon ms-2" /></a>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card services-card">
                        <img src="https://images.unsplash.com/photo-1614359836922-7dedb40d7c27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBkZWxpdmVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Home Delivery</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" className="stretched-link more-btn">See more<FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon ms-2" /></a>
                        </div>
                    </div>
                </div>
            </div>

















        </div>
    );
};

export default Services;