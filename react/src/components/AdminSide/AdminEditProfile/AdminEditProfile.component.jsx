import React from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminEditProfile.css";
import style from "./AdminEditProfile.module.css";
const AdminEditProfile = () => {
  return (
    <>
      <div className=" position-relative adminEditBox">
        <AdminNavbar />
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
              to={`/admin/profile/1`}
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
                id="adminName"
                name="adminName"
                placeholder="Seller 1"
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Email
              </p>
              <input
                type="email"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="adminEmail"
                name="adminEmail"
                placeholder="Seller101@gmail.com "
              />

              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Mobile Number
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="adminMobilenumber"
                name="adminMobilenumber"
                placeholder="98646468"
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Password
              </p>
              <input
                type="password"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                name="adminPassword"
                id="adminPassword"
                placeholder="Enter Password"
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Company Name
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="companyName"
                name="companyName"
                placeholder="Seller 1 nAME"
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Company Address
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="companyAddress"
                name="companyAddress"
                placeholder="100/d2,swEWLL PF FSeller 1"
              />

              <button
                type="submit"
                className={`col-11 px-3 py-2 mt-4 btn-block ${style.inputLabel}`}
                id="profileEditButton"
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

export default AdminEditProfile;
