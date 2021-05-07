import React, { useEffect, useState } from "react";
import helperService from "../../../Services/helperService";
import SuperAdminNavbar from "../SuperAdminNavbar/SuperAdminNavbar";
import "./SuperAdminDashboard.css";
const SuperAdminDashboard = () => {
  const [admins, setAdmins] = useState([]);
  const getAdmins = async () => {
    setAdmins(await helperService.getAdmins());
  };
  useEffect(() => {
    getAdmins();
  }, []);
  const deleteAdmin = async (admin) => {
    setAdmins(await helperService.deleteAdmin(admin));
  };
  return (
    <div className="super-admin-home">
      <SuperAdminNavbar />
      <div
        className="containter-fluid super-admin-dashboard"
        id="allUserDetails"
      >
        {admins.map((admin) => (
          <div
            className="userdetails d-flex flex-column w-100 px-lg-5 px-md-4 px-sm-2 px-1"
            key={admin.id}
          >
            <div className="list col-sm-12 d-flex align-items-center px-3 py-2 my-3">
              <div className="col-sm-2 text-center">
                <img src={admin.companyImageURL} alt="admin-img" />
              </div>
              <div className="col-sm-2 text-center">
                <h3>{admin.sellerName}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{admin.companyName}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{admin.companyAddress}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <h3>{admin.mobileNumber}</h3>
              </div>
              <div className="col-sm-2 text-center">
                <div
                  className="delete-btn btn text-center px-lg-4 px-3 py-2"
                  onClick={() => deleteAdmin(admin.id)}
                >
                  <i className="fas fa-trash mt-1"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
