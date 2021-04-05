import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminEditProfile.css";
import style from "./AdminEditProfile.module.css";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css
const AdminEditProfile = (props) => {
  const [proDetails, setProDetails] = useState(config.adminProfileObj);
  let getAdminProfile = async () => {
    setProDetails(await helperService.getAdminProfile());
  };
  useEffect(() => {
    getAdminProfile();
  }, []);
  let validation = () => {
    let t = proDetails;
    if (
      t.email === "" ||
      t.password === "" ||
      t.sellerName === "" ||
      t.mobileNumber === "" ||
      t.companyAddress === "" ||
      t.companyImageURL === "" ||
      t.companyName === ""
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
    if (t.sellerName.length < 3)
      throw "Enter minimum 3 character for Seller name";
    if (t.companyName.length < 3)
      throw "Enter minimum 3 character for comapany name";
    if (t.companyAddress.length < 3) throw "Invalid company address";
  };
  let adminEditProfile = async (e) => {
    e.preventDefault();
    try {
      validation();
      await helperService.adminEditProfile(proDetails, props);
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
                value={proDetails.sellerName}
                onChange={(e) => {
                  setProDetails({ ...proDetails, sellerName: e.target.value });
                }}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Email
              </p>
              <input
                type="email"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="adminEmail"
                name="adminEmail"
                value={proDetails.email}
                onChange={(e) => {
                  setProDetails({ ...proDetails, email: e.target.value });
                }}
              />

              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Mobile Number
              </p>
              <input
                type="number"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="adminMobilenumber"
                name="adminMobilenumber"
                value={proDetails.mobileNumber}
                onChange={(e) => {
                  setProDetails({
                    ...proDetails,
                    mobileNumber: e.target.value,
                  });
                }}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Password
              </p>
              <input
                type="password"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                name="adminPassword"
                id="adminPassword"
                onChange={(e) => {
                  setProDetails({ ...proDetails, password: e.target.value });
                }}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Company Name
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="companyName"
                name="companyName"
                value={proDetails.companyName}
                onChange={(e) => {
                  setProDetails({ ...proDetails, companyName: e.target.value });
                }}
              />
              <p className={`px-4 align-self-start ${style.inputLabel}`}>
                Company Address
              </p>
              <input
                type="text"
                className="form-control col-11 mt-0 mb-3 py-3 px-4 text-dark"
                id="companyAddress"
                name="companyAddress"
                value={proDetails.companyAddress}
                onChange={(e) => {
                  setProDetails({
                    ...proDetails,
                    companyAddress: e.target.value,
                  });
                }}
              />

              <button
                type="submit"
                className={`col-11 px-3 py-2 mt-4 btn-block ${style.inputLabel}`}
                id="profileEditButton"
                onClick={(e) => adminEditProfile(e)}
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
