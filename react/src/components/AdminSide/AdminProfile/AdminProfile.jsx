import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../AdminNavbar/AdminNavbar'
import './AdminProfile.css';

export default function AdminProfile() {
    return (
        <div>
            <UserNavbar />
            <div className="container-fluid " id="userProfileId" >
                <div className="row">
                    <div className="col-md-8 user-profile-info-outer">
                        <div className="user-profile-info row" >
                            <div className="col-lg-6">
                                <p >Name   <span className=" user-profile-info-text2" > :  Jennifer Aniston</span></p>
                                <p>Email  <span className=" user-profile-info-text2" > :  rachelgreen@iamneo.ai</span></p>
                                <p>Mobile No <span className=" user-profile-info-text2" > :  1234567890 </span> </p>
                                <p>Password  <span className=" user-profile-info-text2" >  :  <input type="password" value="12345678" style={{ width: "130px", cursor: "none" }} /></span>  </p>
                            </div>
                            <div className="col-lg-6">

                                <p >Comapany Name   <span className=" user-profile-info-text2" > :  Virtusa</span></p>
                                <p>Company Address  <span className=" user-profile-info-text2" > :  1/74A, Area, Locality, District, pincode</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 edit-profile-right-outer">
                        <div className="edit-profile-right">
                            <img src="https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg" className="profile-pic" /><br />
                            <Link to={`/admin/editProfile/${123}`} ><button type="button" class="btn btn-lg btn-warning  ">Edit Profile</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
