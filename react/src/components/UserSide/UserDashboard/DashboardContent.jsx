import React from "react";
import { Link } from "react-router-dom";
import "./DashboardContent.css";
export default function DashboardContent({
  companyId,
  companyImageURL,
  companyName,
  companyAddress,
  mobileNumber,
}) {
  return (
    <Link to={`/user/companyDetail/${companyId}`}>
      <div className="row user-company-row">
        <div className="col-5 col-sm-4 ">
          <img
            src={`${companyImageURL}`}
            className="user-dash-img"
            alt="company-avtar"
          />
          <span className="user-dash-company-name">{companyName}</span>
        </div>
        <div className="col-5 col-sm-5">
          <p className="user-dash-company-address">{companyAddress}</p>
        </div>
        <div className="col-2 col-sm-3">
          <p className="user-dash-company-number">{mobileNumber}</p>
        </div>
      </div>
    </Link>
  );
}
