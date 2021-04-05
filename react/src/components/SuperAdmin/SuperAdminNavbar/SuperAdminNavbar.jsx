import React from "react";
import { Link } from "react-router-dom";
import "./SuperAdminNavbar.css";
const SuperAdminNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark "
      id="userNavbar"
    >
      <Link className="navbar-brand" to="/superadmin/adminList">
        Neo Bikes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              to="/superadmin/adminList"
              className="nav-link"
              id="userDashboardLink"
            >
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/superadmin/adminBookings"
              className="nav-link"
              id="userBookingList"
            >
              All Bookings
            </Link>
          </li>
        </ul>
        <span className=" my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                id="superAdminLogoutButton"
                onClick={() => localStorage.clear()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
