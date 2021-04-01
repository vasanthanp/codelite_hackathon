import React from 'react'
import { Link } from 'react-router-dom';
import './Usernavbar.css';

export default function UserNavbar() {
    let Logout = (e)=>{
        e.preventDefault();
        localStorage.clear();
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id="userNavbar">
            <Link class="navbar-brand" to="/user/dashboard">Neo Bikes</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/user/dashboard" id="userDashboardLink">Dashboard <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={`/user/profile/${123}`} id="userProfileList">Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={`/user/bookings/${123}`} id="userBookingList">My Booking</Link>
                    </li>
                </ul>
                <span class=" my-2 my-lg-0">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/login" id="userLogoutButton"   onClick={()=>localStorage.clear()} >Logout</Link>
                        </li>
                    </ul> 
                </span>
            </div>
        </nav>
    )
}
