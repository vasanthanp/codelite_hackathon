import React from 'react'
import { Link } from 'react-router-dom';
import UserNavbar from '../UserNavbar/UserNavbar';
import './BikeDetails.css';

export default function BikeDetails() {
    return (
        <div>
            <UserNavbar />
            <div className="user-Bike-content" id="bikeBookingPage">
                <div className="row ">
                    <div className="col-sm-5 col-12">
                        <div className="row"><div className="bike-mainimg-div"></div></div>
                        <div className="row container-fluid small-row">
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                        </div>
                        <div className="row container-fluid small-row">
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                            <div className="col-3"><div className="bike-smallimg-div"></div></div>
                        </div>
                    </div>
                    <div className="col-sm-7 col-12 bike-right-content">
                        <p className="user-bike-info">Bike Model   <span>:  Model Name</span> </p>
                        <p className="user-bike-info">Price <span> :  $200</span> </p>
                        <p className="user-bike-info">Type  <span>  :  Bike Type </span> </p>
                        <p className="user-bike-info">Description </p>
                        <div className="user-bike-description"></div>
                        <Link to='/user/dashboard'><button type="button" class="btn btn-lg btn-success user-book-btn disabled">Book the Bike</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
