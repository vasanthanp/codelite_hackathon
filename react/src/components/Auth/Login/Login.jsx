import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../Services/apiService";
import "./Login.css";
const Login = () => {
  let [toggle, setToggle] = useState(true);
  let [email , setEmail] = useState("");
  let [pass , setPass] = useState("");
  let Login = (e)=>{
    e.preventDefault();
    let val = {
      email ,
      pass,
      toggle
    }
    apiService.login(val);
  } 
  return (
    <div className="container-fluid position-relative login">
      <div className="login-box d-flex align-items-center justify-content-center w-100 h-100">
        <div
          className="col-lg-6 col-md-8 col-sm-8 col-12 h-auto p-0 pb-5 d-flex flex-column align-items-center justify-content-center"
          id="LoginBox"
        >
          <div className="login-members d-flex align-item-center col-12 p-0">
            <div
              onClick={() => setToggle(true)}
              className={`member col-6 text-center py-2 h-100 ${!toggle ? "shadow1" : ""}` } id="userTab"
            >
              <h1 className="py-2">User</h1>
            </div>
            <div
              onClick={() => setToggle(false)}
              className={`member col-6 text-center py-2 h-100 ${toggle ? "shadow" : ""}`} id="adminTab"
            >
              <h1 className="py-2">Admin</h1>
            </div>
          </div>
          <h1 className="mt-5 mb-2" >LOGIN</h1>
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
              onChange={(e)=>{setEmail(e.target.value)}}
            ></input>

            <input
              type="password"
              className="form-control col-11 my-3 py-3 px-4 text-dark"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e)=>{setPass(e.target.value)}}
            ></input>

            <button
              type="submit"
              className="col-9 col-md-9 px-3 py-2 mt-2"
              id="submitbutton"
              onClick={(e)=>Login(e)}
            >
              Submit
            </button>
            <br />
            <p>
              New to Booking? <Link to={toggle?"/user/signup":"/admin/signup"} className="signupLink" id={toggle ? "userSignupLink" : "adminSignupLink"}> Click Here </Link> 
            </p>
            <p>
              Login as Super Admin <Link to='/superAdmin/login' className="signupLink" > Click Here </Link> 
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
