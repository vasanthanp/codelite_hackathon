import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import "./Login.css";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css

function Login(props) {
  let [toggle, setToggle] = useState(true);
  const [login, setLogin] = useState(config.login);

  let validation = () => {
    let t = login;
    if (t.email === "" || t.password === "") {
      throw "Please enter all the field";
    }
    if (
      !t.email.includes("@gmail.com") ||
      t.email.replace("@gmail.com", "") === ""
    )
      throw "Enter valid email id ";
  };
  let Login = async (e) => {
    e.preventDefault();
    try {
      validation();
      await helperService.login(login, toggle, props);
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  return (
    <div className="container-fluid position-relative login">
      {helperService.checkLogin()}
      <div className="login-box d-flex align-items-center justify-content-center w-100 h-100">
        <div
          className="col-lg-6 col-md-8 col-sm-8 col-12 h-auto p-0 pb-5 d-flex flex-column align-items-center justify-content-center"
          id="LoginBox"
        >
          <div className="login-members d-flex align-item-center col-12 p-0">
            <div
              onClick={() => setToggle(true)}
              className={`member col-6 text-center py-2 h-100 ${
                !toggle ? "shadow1" : ""
              }`}
              id="userTab"
            >
              <h1 className="py-2">User</h1>
            </div>
            <div
              onClick={() => setToggle(false)}
              className={`member col-6 text-center py-2 h-100 ${
                toggle ? "shadow" : ""
              }`}
              id="adminTab"
            >
              <h1 className="py-2">Admin</h1>
            </div>
          </div>
          <h1 className="mt-5 mb-2">LOGIN</h1>
          <form
            id="LoginForm"
            className="py-3 px-3 w-100 d-flex flex-column align-items-center justify-content-center"
          >
            <input
              type="email"
              className="form-control col-11 my-3 py-3 px-4 text-dark"
              id="email"
              name="mail"
              placeholder="Email"
              onChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
            ></input>

            <input
              type="password"
              className="form-control col-11 my-3 py-3 px-4 text-dark"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
            ></input>

            <button
              type="submit"
              className="col-9 col-md-9 px-3 py-2 mt-2"
              id="submitbutton"
              onClick={(e) => Login(e)}
            >
              Submit
            </button>
            <br />
            <p>
              New to Booking?{" "}
              <Link
                to={toggle ? "/user/signup" : "/admin/signup"}
                className="signupLink"
                id={toggle ? "userSignupLink" : "adminSignupLink"}
              >
                {" "}
                Click Here{" "}
              </Link>
            </p>
            <p>
              Login as Super Admin{" "}
              <Link to="/superAdmin/login" className="signupLink">
                {" "}
                Click Here{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
