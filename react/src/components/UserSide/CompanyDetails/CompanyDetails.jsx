import React from "react";
import UserNavbar from "../UserNavbar/UserNavbar";
import CompDetailContent from "./CompDetailContent";

export default function CompanyDetails() {
  return (
    <div>
      <UserNavbar />
      <div className="container-fluid">
        <CompDetailContent />
      </div>
    </div>
  );
}
