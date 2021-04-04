import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import UserNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminProfile.css";

export default function AdminProfile() {
  const [proDetails, setProDetails] = useState(config.adminProfileObj);
  let getAdminProfile = async()=>{
    setProDetails(await helperService.getAdminProfile());
  }
  useEffect(() => {
    getAdminProfile();
  }, [])
  return (
    <div>
      <UserNavbar />
      <div className="container-fluid " id="userProfileId">
        <div className="row">
          <div className="col-md-8 user-profile-info-outer">
            <div className="user-profile-info row">
              <div className="col-lg-6">
                <p>
                  Name{" "}
                  <span className=" user-profile-info-text2">
                    {" "}
                    : {proDetails.sellerName}
                  </span>
                </p>
                <p>
                  Email{" "}
                  <span className=" user-profile-info-text2">
                    {" "}
                    : {proDetails.email}
                  </span>
                </p>
                <p>
                  Mobile No{" "}
                  <span className=" user-profile-info-text2">
                    {" "}
                    : {proDetails.mobileNumber}{" "}
                  </span>{" "}
                </p>
                <p>
                  Password
                  <span className=" user-profile-info-text2">
                    {" "}
                    :{" "}
                    <input
                      disabled = {true}
                      type="password"
                      value={proDetails.password}
                      style={{ width: "130px"}}
                    />
                  </span>{" "}
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Comapany Name{" "}
                  <span className=" user-profile-info-text2"> : {proDetails.companyName}</span>
                </p>
                <p>
                  Company Address{" "}
                  <span className=" user-profile-info-text2">
                    {" "}
                    : {proDetails.companyAddress}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 edit-profile-right-outer">
            <div className="edit-profile-right">
              <img
                src="https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"
                className="profile-pic"
                alt="admin-avtar"
              />
              <br />
              <Link to={`/admin/editProfile/${proDetails.id}`}>
                <button type="button" class="btn btn-lg btn-warning  ">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
