import React from "react";
import { Link } from "react-router-dom";
import "./Usernavbar.css";

export default function UserNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark "
      id="userNavbar"
    >
      <Link className="navbar-brand" to="/user/dashboard">
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
              to="/user/dashboard"
              id="userDashboardLink"
            >
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/user/profile`}
              id="userProfileList"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/user/bookings/${123}`}
              id="userBookingList"
            >
              My Booking
            </Link>
          </li>
        </ul>
        <span className=" my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                id="userLogoutButton"
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
