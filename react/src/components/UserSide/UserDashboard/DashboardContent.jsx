import React from 'react'
import { Link } from 'react-router-dom';
import "./DashboardContent.css";
export default function DashboardContent() {
    return (
        <div className="container-dashboardContent" id="userDashboard">
            <Link to={`/user/companyDetail/${123}`} >
                <div className="row user-company-row">
                    <div className="col-5 col-sm-4 ">
                        <img src="https://img.etimg.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg" className="user-dash-img" />
                        <span className="user-dash-company-name">Company Name</span>
                    </div>
                    <div className="col-5 col-sm-5"><p className="user-dash-company-address">Company Address</p></div>
                    <div className="col-2 col-sm-3"><p className="user-dash-company-number">Mobile number</p></div>
                </div>    
                        
            </Link>

            
        </div>
       
    )
}
