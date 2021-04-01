import React from "react";
import { Link } from "react-router-dom";
import "./SuperAdminNavbar.css";
const SuperAdminNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id="userNavbar">
      <Link class="navbar-brand">
        Neo Bikes
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to='/superadmin/adminList' class="nav-link" id="userDashboardLink">
              Dashboard <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to='/superadmin/adminBookings' class="nav-link" id="userBookingList">
              My Booking
            </Link>
          </li>
        </ul>
        <span class=" my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" id="userLogoutButton">
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
