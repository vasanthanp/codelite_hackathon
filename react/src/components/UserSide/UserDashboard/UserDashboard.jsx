import React, { useEffect, useState } from "react";
import helperService from "../../../Services/helperService";
import UserNavbar from "../UserNavbar/UserNavbar";
import DashboardContent from "./DashboardContent";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css

export default function UserDashboard() {
  const [companies, setCompanies] = useState([]);
  const getCompanies = async () => {
    try {
      setCompanies(await helperService.userDashboard());
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <div>
      <UserNavbar />
      <div className="container-fluid">
        <div className="container-dashboardContent" id="userDashboard">
          {companies.map(
            ({
              id,
              companyImageURL,
              companyName,
              companyAddress,
              mobileNumber,
            }) => (
              <DashboardContent
                key={id}
                companyImageURL={companyImageURL}
                companyName={companyName}
                mobileNumber={mobileNumber}
                companyAddress={companyAddress}
                companyId={id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
