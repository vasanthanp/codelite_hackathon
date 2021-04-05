import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helperService from "../../../Services/helperService";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminDashboard.css";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css
import config from "../../../Services/config";

export default function AdminDashboard() {
  const [bikelist, setBikelist] = useState([]);
  const [compDetails, setCompDetails] = useState(config.adminProfileObj);
  let getCompanyDetails = async () => {
    try {
      setCompDetails(await helperService.getAdminProfile());
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  let getCompanyBikes = async () => {
    try {
      setBikelist(await helperService.adminDashboard());
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  useEffect(() => {
    getCompanyBikes();
    getCompanyDetails();
  }, []);
  let deleteBike = (id) => {
    helperService.DeletBike(id);
    setBikelist(bikelist.filter((ele) => ele.id != id));
  };
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid mt-2" data-testid = "adminDashboard" id="adminDashboard">
        <div className="row">
          <div className="col-lg-9 col-sm-12 my-3">
            <h2 id="companyNames" align="center">
              {compDetails.companyName}
            </h2>
            <br />
            {bikelist.map((bike) => {
              return (
                <div className="container" id="align1" key={bike.id}>
                  {bike.status === "true" ? (
                    <span id="status" className="bg-danger">
                      Booked
                    </span>
                  ) : (
                    <span id="status" className="bg-success">
                      Available
                    </span>
                  )}
                  <div className="row">
                    <div className="col-lg-12" id="colors">
                      <div className="col-lg-12">
                        <br />
                        <p>Bike Model: {bike.bikeModel}</p>
                        <div className="col-sm-9  float-right">
                          <p className="typebike offset-lg-3">
                            Type: {bike.type}
                            <Link to={`/admin/editBike/${bike.id}`}>
                              {" "}
                              <button className="btn offset-lg-1 editbtn">
                                <i className="fa fa-edit"></i>
                              </button>
                            </Link>
                            <button
                              className="right btn deletebtn"
                              onClick={() => deleteBike(bike.id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </p>
                        </div>
                        <p className="float left">
                          Price:${bike.price} | per day
                        </p>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-sm-12 my-3">
            <div className="earnings-alignment">
              <br />
              <h4>Earnings</h4>
              <br />
              <span>Total Today</span>
              <p>${compDetails.earnings}</p>
              <hr
                className="text-center"
                size="5"
                width="40%"
                color="black"
              ></hr>
              <br />
              <span>Monthly</span>
              <p>${compDetails.earnings}</p>
              <br />
            </div>
            <br />
            <div className="earnings-alignment">
              <br />
              <h5>Want to add a New Bike</h5>
              <br />

              <Link
                to={{ pathname: "/admin/addBike", routerpassVal: { bikelist } }}
                id="addbike"
              >
                <button type="button" className="btn btn-warning addbike" data-testid="addBikeButton" id="addBikeButton">
                  <i className="fa fa-plus-circle"></i> Add bike
                </button>
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
