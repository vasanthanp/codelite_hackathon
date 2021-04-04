import React, { useEffect, useState } from "react";
import "./AdminBooking.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar"
import helperService from "../../../Services/helperService";
import config from "../../../Services/config";
const AdminBookings = () => {
  const [bikeList, setBikelist] = useState([]);
  let getBikeList = async()=>{
    setBikelist(await helperService.getAdminBikes());
  }
  useEffect(() => {
    getBikeList();
  }, [])
  return (
    <>
    <AdminNavbar />
      <div
        id="adminBooking"
        className="bookings d-flex flex-column align-items-center justify-content-center my-3"
      >
        <div
          id="bookingList"
          className="lists col-sm-11 col-lg-10 d-flex flex-column p-2 "
        >
          <div className="list d-flex align-items-center p-2 admin-book-row">
            <div className="col-sm-2 text-center">
              <h3>Booking ID</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>User ID</h3>
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
          {
            bikeList.map((bikeList)=>{
              return(
                <div className="list d-flex align-items-center p-2 admin-book-row">
                <div className="col-sm-2 text-center">
                  <h3>{bikeList.id} </h3>
                </div>
                <div className="col-sm-2 text-center">
                  <h3>{bikeList.userID}</h3>
                </div>
                <div className="col-sm-2 text-center">
                  <h3>{bikeList.bikeModel}</h3>
                </div>
                <div className="col-sm-2 text-center">
                  <h3>{bikeList.rent}</h3>
                </div>
                <div className="col-sm-2 text-center">
                  <h3>{bikeList.days}</h3>
                </div>
                <div className="col-sm-2 text-center">
                  <h3>{bikeList.totalPrice}</h3>
                </div>
              </div>
    
              )
            })
          }
          </div>
      </div>
    </>
  );
};

export default AdminBookings;
