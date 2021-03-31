import React from "react";
import SuperAdminNavbar from "../SuperAdminNavbar/SuperAdminNavbar";
import "./SuperAdminDashboard.css";
const SuperAdminDashboard = () => {
  return (
    <div className="super-admin-home">
      <SuperAdminNavbar />
      <div
        className="containter-fluid super-admin-dashboard"
        id="allUserDetails"
      >
        <div className="userdetails d-flex flex-column w-100 px-lg-5 px-md-4 px-sm-2 px-1">
          <div className="list col-sm-12 d-flex align-items-center px-3 py-2 my-3">
            <div className="col-sm-2 text-center">
              <img
                src="https://image.freepik.com/free-photo/smiling-caucasian-elegant-businessman-drinking-coffee-cafe-using-laptop-looking-trough-window-push-yourself-because-no-one-is-going-it-you_232070-2828.jpg"
                alt="admin-img"
              />
            </div>
            <div className="col-sm-2 text-center">
              <h3>Admin Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Company Name</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Company Address</h3>
            </div>
            <div className="col-sm-2 text-center">
              <h3>Mobile Number</h3>
            </div>
            <div className="col-sm-2 text-center">
              <div className="delete-btn btn text-center px-lg-4 px-3 py-2">
                <i className="fas fa-trash mt-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
