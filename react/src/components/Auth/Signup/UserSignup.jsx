import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css

function UserSignup(props) {
  const [usignup, setUsignup] = useState(config.userSignupObj);
  let validation = () => {
    let t = usignup;
    if (
      t.email === "" ||
      t.password === "" ||
      t.username === "" ||
      t.mobileNumber === "" ||
      t.age === ""
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
    if (t.username.length < 3) throw "Enter minimum 3 character for username";
    if (t.age < 1 || t.age > 100) throw "Invalid age";
    return true;
  };
  let Signup = async (e) => {
    e.preventDefault();
    try {
      validation();
      await helperService.userSignup(usignup, props);
    } catch (err) {
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
        <div className="col-sm-8 col-lg-7 my-5" id={styles.signupBox}>
          <div className="card" id={styles.signupcard}>
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
                      setUsignup({ ...usignup, email: e.target.value });
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
                      setUsignup({ ...usignup, password: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="number"
                    name="phoneNo"
                    id={styles.mobilenumber}
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => {
                      setUsignup({ ...usignup, mobileNumber: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <select className="form-control" id={styles.userrole}>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="name"
                    name="name"
                    id={styles.username}
                    className="form-control"
                    placeholder="Enter Username"
                    onChange={(e) => {
                      setUsignup({ ...usignup, username: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="form-group input-group-lg">
                  <input
                    type="number"
                    name="age"
                    id={styles.age}
                    className="form-control"
                    placeholder="Enter Age"
                    onChange={(e) => {
                      setUsignup({ ...usignup, age: e.target.value });
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
                    Click Here{" "}
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
export default UserSignup;
