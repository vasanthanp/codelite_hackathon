import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css

function AdminSignup(props) {
  const [asignup, setAsignup] = useState(config.adminSignupObj);
  let validation = () => {
    let t = asignup;
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
    return true;
  };
  let Signup = async (e) => {
    e.preventDefault();
    try {
      validation();
      await helperService.adminSignup(asignup, props);
    } catch (err) {
      //console.log(err);
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div class="col-sm-8 col-lg-7 my-5" id={styles.signupBox}>
          <div className="card" id={styles.signupcard1}>
            <div className="card-body">
              <h1 align="center">SIGN UP</h1>
              <form>
                <div className="form-group input-group-lg">
                  <input
                    type="email"
                    className="form-control"
                    id={styles.email}
                    name="mail"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setAsignup({ ...asignup, email: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="password"
                    name="password"
                    id={styles.password}
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(e) => {
                      setAsignup({ ...asignup, password: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="text"
                    name="phoneNo"
                    id={styles.mobilenumber}
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => {
                      setAsignup({ ...asignup, mobileNumber: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <select className="form-control" id={styles.userrole}>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="name"
                    name="name"
                    id={styles.sellername}
                    className="form-control"
                    placeholder="Enter Seller Name"
                    onChange={(e) => {
                      setAsignup({ ...asignup, sellerName: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="text"
                    name="age"
                    id={styles.companyname}
                    className="form-control"
                    placeholder="Enter Company Name"
                    onChange={(e) => {
                      setAsignup({ ...asignup, companyName: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="text"
                    name="age"
                    id={styles.companyImgUrl}
                    className="form-control"
                    placeholder="Enter Company Image Url"
                    onChange={(e) => {
                      setAsignup({
                        ...asignup,
                        companyImageURL: e.target.value,
                      });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="text"
                    name="age"
                    id={styles.companyAddress}
                    className="form-control"
                    placeholder="Enter Company Address"
                    onChange={(e) => {
                      setAsignup({
                        ...asignup,
                        companyAddress: e.target.value,
                      });
                    }}
                  ></input>
                </div>

                <input
                  type="submit"
                  className="form-control col-sm-12"
                  id={styles.submitbutton}
                  name="Submit"
                  onClick={(e) => Signup(e)}
                ></input>
                <br></br>
                <p align="center">
                  Go to Login{" "}
                  <Link to="/login" id={styles.loginLink}>
                    Click Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminSignup;
