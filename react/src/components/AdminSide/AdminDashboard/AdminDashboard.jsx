import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import helperService from "../../../Services/helperService";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  useEffect(() => {
    console.log("useeffext");
    helperService.adminDashboard();
    
  }, [])
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-9 col-sm-12 my-3">
            <h2 id="companyNames" align="center">
              Bike Company Name
            </h2>
            <br />
            <div className="container" id="align1">
              <span id="status">Booked</span>
              <div className="row">
                <div className="col-lg-12" id="colors">
                  <div className="col-lg-12">
                    <br />
                    <p>Bike Model: Yamaha R15 v3</p>
                    <div className="col-sm-10  float-right">
                      <p className="typebike offset-lg-3">
                        Type: Bike
                        <Link to="/admin/editBike">
                          {" "}
                          <button className="btn offset-lg-1 editbtn">
                            <i className="fa fa-edit"></i>
                          </button>
                        </Link>
                        <button className="right btn deletebtn">
                          <i className="fa fa-trash"></i>
                        </button>
                      </p>
                    </div>
                    <p className="float left">Price:$200| per day</p>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 my-3">
            <div className="earnings-alignment">
              <br />
              <h4>Earnings</h4>
              <br />
              <span>Total Today</span>
              <p>$200</p>
              <hr
                className="text-center"
                size="5"
                width="40%"
                color="black"
              ></hr>
              <br />
              <span>Monthly</span>
              <p>$700</p>
              <br />
            </div>
            <br />
            <div class="earnings-alignment">
              <br />
              <h5>Want to add a New Bike</h5>
              <br />
              
              <Link to="/admin/addBike" id="addbike">
              <button type="button" className="btn btn-warning addbike">
                <i className="fa fa-plus-circle"></i>
                  {" "}
                  Add bike
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
