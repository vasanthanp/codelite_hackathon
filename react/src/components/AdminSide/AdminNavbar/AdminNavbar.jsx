import React from "react";
import { Link } from "react-router-dom";
import "./AdminNabar.css";

export default function AdminNavbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark "
      id="userNavbar"
    >
      <Link className="navbar-brand" to="/admin/dashboard">
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
              className="nav-link"
              to="/admin/dashboard"
              id="userDashboardLink"
            >
              <i className="fa fa-tachometer-alt"></i> Dashboard{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/admin/profile/`}
              id="userProfileList"
            >
              <i className="fa fa-user-circle"></i> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/admin/bookings/`}
              id="userBookingList"
            >
              <i className="fa fa-book"></i> Booking
            </Link>
          </li>
        </ul>
        <span className=" my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                id="adminLogoutButton"
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
}
