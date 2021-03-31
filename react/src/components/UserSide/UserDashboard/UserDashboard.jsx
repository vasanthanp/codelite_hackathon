import React from 'react'
import UserNavbar from '../UserNavbar/UserNavbar'
import DashboardContent from './DashboardContent'

export default function UserDashboard() {
    return (
        <div >
            <UserNavbar />
            <div className="container-fluid">
                <DashboardContent />
            </div>
        </div>
    )
}
