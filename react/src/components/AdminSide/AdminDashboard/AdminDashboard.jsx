import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helperService from "../../../Services/helperService";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminDashboard.css";
import { confirmAlert } from 'react-confirm-alert'; // Import alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import alert css

export default function AdminDashboard() {
  const [bikelist, setBikelist] = useState([]);
  let getCompanyBikes = async () => {
    try {
      //setBikelist(await helperService.adminDashboard());

    }catch(err){
      let e = "" + err; 
      confirmAlert({
          message: e,
          buttons: [{label: 'close',}]
      });
    }
  }
  useEffect(() => {
    getCompanyBikes();
  }, [])
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-9 col-sm-12 my-3">
            <h2 id="companyNames" align="center">
              Bike Company Name
            </h2>
            <br />
            {console.log(bikelist)}
            {bikelist.map(bike => { 
               return(<div className="container" id="align1" key={bike.id}>
               <span id="status">Booked</span>
               <div className="row">
                 <div className="col-lg-12" id="colors">
                   <div className="col-lg-12">
                     <br />
                     <p>Bike Model: {bike.bikeModel}</p>
                     <div className="col-sm-10  float-right">
                       <p className="typebike offset-lg-3">
                         Type: {bike.type}
                       <Link to="/admin/editBike">
                           {" "}
                           <button className="btn offset-lg-1 editbtn">
                             <i className="fa fa-edit"></i>
                           </button>
                         </Link>
                         <button className="right btn deletebtn">
                           <i className="fa fa-trash"></i>
                         </button>
                       </p>
                     </div>
                     <p className="float left">Price:${bike.price} | per day</p>
                   </div>
                   <br />
                 </div>
               </div>
             </div>
              )
            })}

          </div>

          <div className="col-lg-3 col-sm-12 my-3">
            <div className="earnings-alignment">
              <br />
              <h4>Earnings</h4>
              <br />
              <span>Total Today</span>
              <p>$-</p>
              <hr
                className="text-center"
                size="5"
                width="40%"
                color="black"
              ></hr>
              <br />
              <span>Monthly</span>
              <p>$-</p>
              <br />
            </div>
            <br />
            <div className="earnings-alignment">
              <br />
              <h5>Want to add a New Bike</h5>
              <br />

              <Link to={{  pathname: "/admin/addBike",  routerpassVal:{bikelist} }} id="addbike">
                <button type="button" className="btn btn-warning addbike">
                  <i className="fa fa-plus-circle"></i>
                  {" "}
                  Add bike
              </button>

              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
