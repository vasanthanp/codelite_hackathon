import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helperService from "../../../Services/helperService";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./UserProfile.css";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const getProfile = async () => {
    setUser(await helperService.userDetailWithEmail());
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <UserNavbar />
      <div className="container-fluid " id="userProfileId">
        <div className="row">
          <div className="col-md-8 user-profile-info-outer">
            <div className="user-profile-info">
              <p>
                Name{" "}
                <span className="user-profile-info-text">
                  {" "}
                  : {user.username}
                </span>
              </p>
              <p>
                Email{" "}
                <span className="user-profile-info-text"> : {user.email}</span>
              </p>
              <p>
                Password{" "}
                <span className="user-profile-info-text">
                  {" "}
                  :{" "}
                  <input
                    type="password"
                    value={user.password}
                    style={{ width: "130px", cursor: "none" }}
                  />
                </span>{" "}
              </p>
              <p>
                Age{" "}
                <span className="user-profile-info-text"> : {user.age} </span>
              </p>
              <p>
                Mobile Number{" "}
                <span className="user-profile-info-text">
                  {" "}
                  : {user.mobileNumber}{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 edit-profile-right-outer">
            <div className="edit-profile-right">
              <img
                src="https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"
                className="profile-pic"
                alt="user-avtar"
              />
              <br />
              <Link to={`/user/editProfile/${user.id}`}>
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
