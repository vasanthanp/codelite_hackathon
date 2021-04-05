import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./UserEditProfile.css";
import style from "./UserEditProfile.module.css";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import { confirmAlert } from "react-confirm-alert";
const UserEditProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState(config.userSignupObj);
  const [first, setFirst] = useState(true);
  const settingUser = async () =>
    setUser(await helperService.userDetailWithEmail());
  useEffect(() => {
    if (first) {
      setFirst(false);
      settingUser();
    }
  }, [first]);
  let validation = () => {
    let t = user;
    if (
      t.age === "" ||
      t.email === "" ||
      t.mobileNumber === "" ||
      t.password === "" ||
      t.username === ""
    ) {
      throw "Please enter all the field";
    }
    if (
      !t.email.includes("@gmail.com") ||
      t.email.replace("@gmail.com", "") === ""
    )
      throw "Enter valid email id ";
    if (t.password.length < 8) throw "Enter minimum 8 character for password";
    if (t.mobileNumber.length < 10 || t.mobileNumber.length > 10)
      throw "Invalid mobile number";
    if (t.mobileNumber.length < 3)
      throw "Enter minimum 3 character for mobileNumber";
    if (t.username.length < 3) throw "Enter minimum 3 character for username";
    if (t.age.length == 0) throw "Invalid age";
  };

  const editUserProfile = async (e) => {
    e.preventDefault();
    try {
      validation();
      const response = await helperService.updateUserWithId(user);
      if (response.data !== "") history.push("/user/profile");
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  return (
    <>
      <div className=" position-relative adminEditBox">
        <UserNavbar />
        <div
          className="login-box d-flex align-items-center justify-content-center w-100 "
          id="editProfileBox"
          style={{ height: "93%" }}
        >
          <div
            className="col-lg-6 col-md-8 col-sm-8 col-12 h-auto px-lg-3 px-sm-2  pt-2 pb-3 d-flex flex-column align-items-center justify-content-center"
            id="AdminLoginBox"
          >
            <NavLink
              to={`/user/profile`}
              className={`${style.backLink} px-4  pt-4 align-self-start`}
            >
              <i className="fas fa-chevron-left mr-2"></i>back
            </NavLink>
            <form
              id="AdminForm"
              className="py-3 w-100 d-flex flex-column align-items-center justify-content-center"
            >
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Name
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="userName"
                name="userName"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Email
              </p>
              <input
                type="email"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="userEmail"
                name="userEmail"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Password
              </p>
              <input
                type="password"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                name="userPassword"
                id="userPassword"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>Age</p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                name="userPassword"
                id="userPassword"
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Mobile Number
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="userMobilenumber"
                name="userMobilenumber"
                value={user.mobileNumber}
                onChange={(e) =>
                  setUser({ ...user, mobileNumber: e.target.value })
                }
              />

              <button
                type="submit"
                className={`col-11 px-3 py-2 mt-4 btn-block ${style.inputLabel}`}
                id="profileEditButton"
                onClick={editUserProfile}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditProfile;
