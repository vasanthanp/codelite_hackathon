import React from 'react';
import {Link} from 'react-router-dom';
import './AdminNabar.css'


export default function AdminNavbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id="userNavbar">
        <Link class="navbar-brand" to="/admin/dashboard">Neo Bikes</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/admin/dashboard" id="userDashboardLink"><i class="fa fa-tachometer-alt"></i> Dashboard <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={`/admin/profile/${123}`} id="userProfileList"><i class="fa fa-user-circle"></i> Profile</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={`/admin/bookings/${123}`} id="userBookingList"><i class="fa fa-book"></i> Booking</Link>
                </li>
            </ul>
            <span class=" my-2 my-lg-0">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/login" id="adminLogoutButton"   onClick={()=>localStorage.clear()} >Logout</Link>
                    </li>
                </ul> 
            </span>
        </div>
    </nav>
)
}


