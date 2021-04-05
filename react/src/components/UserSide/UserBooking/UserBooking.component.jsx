import React, { useEffect, useState } from "react";
import helperService from "../../../Services/helperService";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./UserBooking.css";
const UserBooking = () => {
  const [bookings, setBookings] = useState([]);
  const getBooking = async () => {
    setBookings(await helperService.userBookings());
  };
  useEffect(() => {
    getBooking();
  }, []);
  return (
    <>
      <UserNavbar />
      <div
        id="userBookingBody"
        className="bookings d-flex flex-column align-items-center justify-content-center my-3"
      >
        <div
          id="bookingList"
          className="lists col-sm-11 col-lg-10 d-flex flex-column p-2"
        >
          <div className="list book-details-list d-flex align-items-center p-2">
            <div className="col-sm-4 text-center">
              <h3>Company Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Bike Model</h3>
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
              className="list book-details-list  d-flex align-items-center p-2"
              key={booking.bikeID}
            >
              <div className="col-sm-4 text-center">
                <h3>{booking.companyName} </h3>
              </div>

              <div className="col-sm-2 text-center">
                <h3>{booking.bikeModel}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking.rent}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking.days}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{booking.totalPrice}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserBooking;
