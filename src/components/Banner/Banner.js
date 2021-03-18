import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner container-fluid">
            <div className="col-md-6">
                <h1 className="text-center display-md-6 display-lg-5 pb-3">Best food waiting for your belly</h1>
                <div className="px-lg-5">
                    <div className="input-group px-lg-5 search-box">
                        <input type="text" className="form-control" placeholder="Search for food items" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-danger onion-btn" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;