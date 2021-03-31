import React from 'react'
import {Link} from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './EditBike.css'

function EditBike() {
    return (
        <div > 
            <AdminNavbar/>
            <div className="row container-fluid">
                <div class="col-md-5 offset-sm-3 my-5">
                    <div className="card offset-sm-3" id="editBikeBox">
                        <div className="card-body">
                            <Link to="/admin/dashboard"><p className="backtodashboard" align="left"><i class="fa fa-chevron-left"></i> back</p></Link>
                            <form>
                                <div className="form-group">
                                    <label>Bike Model</label>
                                    <input type="text" className="form-control" id="bikeModel"  name="bikeModel"  ></input>
                                </div>
                                <div className="form-group">
                                    <label>Bike Rent Price</label>
                                    <input type="text" name="bikeRentPrice" id="bikePrice" className="form-control"  ></input>
                                </div>
                                <div className="form-group">
                                    <label>Bike Type</label>
                                    <input type="text" name="bike type" id="bikeType" className="form-control" ></input>
                                </div><br></br>
                                
                                <input type="submit" className="form-control col-sm-12" id="editBikeButton" value="Save Change" name="Save Change"></input><br></br>
                            </form>
                        </div>
                     </div>
                </div>
             </div>
        </div> 
       
    )
}

export default EditBike
