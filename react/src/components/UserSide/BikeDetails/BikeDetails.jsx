import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import helperService from "../../../Services/helperService";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./BikeDetails.css";

export default function BikeDetails() {
  const { bikeId } = useParams();
  const [bike, setBike] = useState({});

  const getBikeDetail = async () => {
    setBike(await helperService.bikeDetailWithBikeId(bikeId));
  };
  useEffect(() => {
    getBikeDetail();
  }, []);

  const bookeBike = async(e) => {
    e.preventDefault();
    helperService.userDetailWithEmail();
    let obj = bike;
    obj['userID'] = localStorage.getItem("userID");
    obj["bikeID"] = obj["id"]; 
    obj["days"] = 1;
    obj["rent"] = obj["price"];
    helperService.bookBike(obj);
  };
  return (
    <div>
      <UserNavbar />
      <div className="user-Bike-content" id="bikeBookingPage">
        <div className="row ">
          <div className="col-sm-5 col-12">
            <div className="row">
              <div className="bike-mainimg-div"></div>
            </div>
            <div className="row container-fluid small-row">
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
            </div>
            <div className="row container-fluid small-row">
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
              <div className="col-3">
                <div className="bike-smallimg-div"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-12 bike-right-content">
            <p className="user-bike-info">
              Bike Model <span>: {bike.bikeModel}</span>{" "}
            </p>
            <p className="user-bike-info">
              Price <span> : ${bike.price}</span>{" "}
            </p>
            <p className="user-bike-info">
              Type <span> : {bike.type} </span>{" "}
            </p>
            <p className="user-bike-info">Description </p>
            <div className="user-bike-description"></div>
            {/* <Link to="/user/dashboard"> */}
            <button
              disabled={bike.status === "true"?true:false}
              type="button"
              class="btn btn-lg btn-success user-book-btn "
              onClick={bookeBike}
            >
              Book the Bike
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
