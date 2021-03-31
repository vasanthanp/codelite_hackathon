import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../UserNavbar/UserNavbar'
import './UserProfile.css';

export default function UserProfile() {
    return (
        <div>
            <UserNavbar />
            <div className="container-fluid " id="userProfileId" >
                <div className="row">
                    <div className="col-md-8 user-profile-info-outer">
                        <div className="user-profile-info">
                            <p >Name   <span className="user-profile-info-text" > :  Jennifer Aniston</span></p>
                            <p>Email  <span className="user-profile-info-text" > :  rachelgreen@iamneo.ai</span></p>
                            <p>Password  <span className="user-profile-info-text" >  :  <input type="password" value="12345678"  style={{width : "130px",cursor: "none"}}/></span>  </p>
                            <p>Age    <span className="user-profile-info-text" >   :  27 </span></p>
                            <p>Mobile Number <span className="user-profile-info-text" > :  1234567890 </span> </p>
                        </div>
                    </div>
                    <div className="col-md-4 edit-profile-right-outer">
                        <div className="edit-profile-right">
                            <img src="https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg" className="profile-pic" /><br/>
                            <Link to={`/user/editProfile/${123}`} ><button type="button" class="btn btn-lg btn-warning  ">Edit Profile</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
