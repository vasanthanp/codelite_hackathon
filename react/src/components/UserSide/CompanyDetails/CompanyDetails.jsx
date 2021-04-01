import React from 'react'
import { useParams } from 'react-router';
import UserNavbar from '../UserNavbar/UserNavbar'
import CompDetailContent from './CompDetailContent';

export default function CompanyDetails() {
    let { topicId } = useParams();
    return (
        <div>
            <UserNavbar />
            <div className="container-fluid">
                <CompDetailContent />
            </div>
        </div>
    )
}
