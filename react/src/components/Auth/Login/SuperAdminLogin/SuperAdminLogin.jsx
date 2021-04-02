import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";
import config from "../../../../Services/config";
import helperService from "../../../../Services/helperService";
import "./SuperAdminLogin.css"
const SuperAdminLogin = (props) => {
  const [ login, setLogin] = useState(config.login);

  let validation = ()=>{
    let t = login;
    if(t.email==""||t.password==""){
        throw  "Please enter all the field";
    }
    if(!t.email.includes("@gmail.com")||t.email.replace("@gmail.com","")=="") throw  "Enter valid email id ";
  }
  let Login = async(e)=>{
    e.preventDefault();
    try{
        validation();
        await helperService.superAdminLogin(login,props);
    }
    catch(err){
        let e = "" + err; 
        confirmAlert({
            message: e,
            buttons: [{label: 'close',}]
        });
    }
  } 
  return (
    <div className="container-fluid position-relative super-admin">
      <div className="login-box d-flex align-items-center justify-content-center w-100 h-100">
        <div
          className="col-lg-6 col-md-8 col-sm-8 col-12 h-auto px-lg-3 px-sm-2 p-1 pt-5 pb-3 d-flex flex-column align-items-center justify-content-center"
          id="superAdminLoginBox"
        >
          <h1>Super Admin</h1>
          <form
            id="superAdminForm"
            className="py-3 w-100 d-flex flex-column align-items-center justify-content-center"
          >
            <input
              type="email"
              className="form-control col-11 my-3 py-3 px-4 text-dark"
              id="email"
              name="mail"
              placeholder="Enter Super Admin Email"
              onChange={(e)=>{setLogin({...login, email:e.target.value})}} 
            ></input>
 
            <input
              type="password"
              className="form-control col-11 my-3 py-3 px-4 text-dark"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e)=>{setLogin({...login, password :e.target.value})}} 
            ></input>

            <button
              type="submit"
              className="col-6 col-md-6 px-3 py-2 mt-4"
              id="submitbutton"
              onClick={(e)=>Login(e)}
            >
              Submit
            </button>
            <br></br>
            <p align="center">
              Go to Login <Link to="/login" id="loginLink"  >Click Here</Link> 
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
