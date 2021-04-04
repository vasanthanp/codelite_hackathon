import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import config from '../../../Services/config'
import helperService from '../../../Services/helperService'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AddNewBike.css'
import { confirmAlert } from 'react-confirm-alert'; // Import alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import alert css

function AddNewBike(props) {
    const [bikeDetail, setBikeDetail] = useState(config.addBikeObj);

    let validation = ()=>{
        let t = bikeDetail;
        if(t.bikeModel==""||t.type==""||t.price==""){
            throw  "Please enter all the field";
        }
        if(t.price<1)throw "Invalid price"; 
    }
    let addBike = async(e)=>{
        e.preventDefault();
        try{
            validation();
            await helperService.addNewBikeAndSave(bikeDetail,props);
        }
        catch(err){
            let e = "" + err; 
            confirmAlert({
                message: e,
                buttons: [{label: 'close',}]
            });
        }
    }
    return (
        <div > 
            <AdminNavbar/>
            <div className="row container-fluid">
               <div className="col-md-5 offset-sm-3 my-5">
                  <div className="card offset-sm-3" id="editBikeBox">
                     <div className="card-body">
                        <Link to="/admin/dashboard"><p className="backtodashboard" align="left"><i className="fa fa-chevron-left"></i> back</p></Link>
                            <form>
                                <div className="form-group">
                                    <label>Bike Model</label>
                                    <input type="text" className="form-control" id="bikeModel"  name="bikeModel" onChange={(e)=>{setBikeDetail({...bikeDetail, bikeModel:e.target.value})}}  ></input>
                                </div> 
                                <div className="form-group">
                                    <label>Bike Rent Price</label>
                                    <input type="text" name="bikeRentPrice" id="bikePrice" className="form-control"  onChange={(e)=>{setBikeDetail({...bikeDetail, price:e.target.value})}} ></input>
                                </div>
                                <div className="form-group">
                                    <label>Bike Type</label>
                                    <input type="text" name="bike type" id="bikeType" className="form-control" onChange={(e)=>{setBikeDetail({...bikeDetail, type:e.target.value})}}   ></input>
                                </div><br></br>
                                
                                <input type="submit" onClick={(e)=>{addBike(e)}} className="form-control col-sm-12" id="addBikeButton" value="Add Bike" name="addBike"></input><br></br>

                            </form>
                        </div>
                     </div>
                </div>
            </div>
        </div> 
    )
}

export default AddNewBike
