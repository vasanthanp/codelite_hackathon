import React, { useEffect, useState } from "react";
import helperService from "../../../Services/helperService";
import SuperAdminNavbar from "../SuperAdminNavbar/SuperAdminNavbar";
import "./SuperAdminBookings.css";
const SuperAdminBookings = () => {
  const [bookings, setBooking] = useState([]);
  const getAllBooking = async () =>
    setBooking(await helperService.getAllBookings());
  useEffect(() => {
    getAllBooking();
  }, []);
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
          {bookings.map((booking) => (
            <div
              className="list d-flex align-items-center super-book-row p-2"
              key={booking[0]}
            >
              <div className="col-sm-2 text-center">
                <h3>{booking[1]}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking[2]}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking[3]}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking[4]}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking[5]}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking[6]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuperAdminBookings;
