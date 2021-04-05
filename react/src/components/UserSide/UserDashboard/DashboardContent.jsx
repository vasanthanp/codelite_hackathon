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
      <div className="d-flex justify-content-center user-company-row">
        <div className="col-lg-10 col-12 d-flex align-items-center justify-content-between px-lg-5 px-md-4 px-2">
          <div className="d-flex align-items-center">
            <img
              src={`${companyImageURL}`}
              className="img-fluid user-dash-img"
              alt="company-avtar"
            />
            <p className="ml-3 mb-0">{companyName}</p>
          </div>
          <p className=" m-0">{companyAddress}</p>
          <p className="m-0">{mobileNumber}</p>
        </div>
      </div>
    </Link>
  );
}
