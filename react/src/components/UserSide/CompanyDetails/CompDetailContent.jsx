import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import helperService from "../../../Services/helperService";
import "./CompDetailContent.css";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css";
export default function CompDetailContent() {
  const { compId } = useParams();
  const [company, setCompany] = useState({});
  const [bikes, setBikes] = useState([]);
  const getCompanyDetail = async () => {
    try {
      setCompany(await helperService.companyDetailWithAdminId(compId));
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  const getAdminBikes = async () => {
    try {
      setBikes(await helperService.bikesWithAdminId({ email: company.email }));
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  useEffect(() => {
    getCompanyDetail();
  }, []);
  useEffect(() => {
    if (company.email) getAdminBikes();
  }, [company]);
  const { companyName, companyAddress, mobileNumber } = company;
  return (
    <div id="companyDetails">
      <div className="Comp-Details">
        <p className="comp-name">{companyName}</p>
        <p className="comp-address">{companyAddress}</p>
        {/* <p className="comp-address">District, pincode.</p> */}
        <p className="comp-number">{mobileNumber}</p>
      </div>
      <div className="bikes-details container-fluid">
        {console.log(bikes)}
        {bikes.length > 0 &&
          bikes.map((bike) => (
            <Link to={`/user/bikeDetail/${bike.bikeID}`} key={bike.bikeID}>
              <div className="row bike-detail">
                <div className="col-4 bike-modal">
                  Bike Model : {bike.bikeModel}
                </div>
                <div className="col-3 bike-otherDetail">{bike.price}</div>
                <div className="col-3 bike-otherDetail">{bike.type}</div>
                <div className="col-2 bike-otherDetail">{bike.status}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
