import React from "react";
import SuperAdminNavbar from "../SuperAdminNavbar/SuperAdminNavbar";
import "./SuperAdminBookings.css";
const SuperAdminBookings = () => {
  return (
    <>
      <SuperAdminNavbar />
      <div className="bookings d-flex flex-column align-items-center justify-content-center my-3">
        <div className="lists col-sm-11 col-lg-10 d-flex flex-column p-2">
          <div className="list d-flex align-items-center super-book-row p-2">
            <div className="col-sm-2 text-center">
              <h3>Admin Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Company Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Bike model</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Rent</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Days</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Total price</h3>
            </div>
          </div>
          <div className="list d-flex align-items-center super-book-row p-2">
            <div className="col-sm-2 text-center">
              <h3>Admin Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Company Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Bike model</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Rent</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Days</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Total price</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminBookings;
