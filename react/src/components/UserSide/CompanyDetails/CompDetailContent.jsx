import React from 'react'
import { Link } from 'react-router-dom';
import './CompDetailContent.css';

export default function CompDetailContent() {
    return (
        <div id="companyDetails">
            <div className="Comp-Details">
                <p className="comp-name">Company name</p>
                <p className="comp-address">1/7A, Area, Locality,</p>
                <p className="comp-address">District, pincode.</p>
                <p className="comp-number">9876543210</p>
            </div> 
            <div className="bikes-details container-fluid">
                <Link to={`/user/bikeDetail/${123}`}  >
                    <div className="row bike-detail">
                        <div className="col-4 bike-modal">Bike Model : Model Name</div>
                        <div className="col-3 bike-otherDetail">Bike Price</div>
                        <div className="col-3 bike-otherDetail">Bike Type</div>
                        <div className="col-2 bike-otherDetail">Booked</div>
                    </div>
                    <div className="row bike-detail">
                        <div className="col-4 bike-modal">Bike Model : Model Name</div>
                        <div className="col-3 bike-otherDetail">Bike Price</div>
                        <div className="col-3 bike-otherDetail">Bike Type</div>
                        <div className="col-2 bike-otherDetail">Booked</div>
                    </div>
                    <div className="row bike-detail">
                        <div className="col-4 bike-modal">Bike Model : Model Name</div>
                        <div className="col-3 bike-otherDetail">Bike Price</div>
                        <div className="col-3 bike-otherDetail">Bike Type</div>
                        <div className="col-2 bike-otherDetail">Booked</div>
                    </div>
                    
                </Link>
               
               
            </div>
        </div>
    )
}
