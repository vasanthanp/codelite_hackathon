import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../../../Services/config";
import helperService from "../../../Services/helperService";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./EditBike.css";
import { confirmAlert } from "react-confirm-alert"; // Import alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import alert css

function EditBike(props) {
  let { id } = useParams();
  const [bikeDetail, setBikeDetail] = useState(config.editBikeObj);
  let getBikeDetails = async () => {
    try {
      //setBikelist(await helperService.adminDashboard());
      let res = await helperService.getBikeDetails(id);
      setBikeDetail(res);
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  useEffect(() => {
    getBikeDetails();
  }, []);
  let validation = () => {
    let t = bikeDetail;
    if (t.bikeModel == "" || t.type == "" || t.price == "") {
      throw "Please enter all the field";
    }
    if (t.price < 1) throw "Invalid price";
  };
  let editBike = async (e) => {
    e.preventDefault();
    try {
      validation();
      bikeDetail.id = id;
      await helperService.editBikeandSave(bikeDetail, props);
    } catch (err) {
      let e = "" + err;
      confirmAlert({
        message: e,
        buttons: [{ label: "close" }],
      });
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="row container-fluid">
        <div className="col-md-5 offset-sm-3 my-5">
          <div className="card offset-sm-3" id="editBikeBox">
            <div className="card-body">
              <Link to="/admin/dashboard">
                <p className="backtodashboard" align="left">
                  <i className="fa fa-chevron-left"></i> back
                </p>
              </Link>
              <form>
                <div className="form-group">
                  <label>Bike Model</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bikeModel"
                    name="bikeModel"
                    onChange={(e) => {
                      setBikeDetail({
                        ...bikeDetail,
                        bikeModel: e.target.value,
                      });
                    }}
                    value={bikeDetail.bikeModel}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Bike Rent Price</label>
                  <input
                    type="text"
                    name="bikeRentPrice"
                    id="bikePrice"
                    className="form-control"
                    onChange={(e) => {
                      setBikeDetail({ ...bikeDetail, price: e.target.value });
                    }}
                    value={bikeDetail.price}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Bike Type</label>
                  <input
                    type="text"
                    name="bike type"
                    id="bikeType"
                    className="form-control"
                    onChange={(e) => {
                      setBikeDetail({ ...bikeDetail, type: e.target.value });
                    }}
                    value={bikeDetail.type}
                  ></input>
                </div>
                <br></br>

                <input
                  type="submit"
                  onClick={(e) => {
                    editBike(e);
                  }}
                  className="form-control col-sm-12"
                  id="editBikeButton"
                  value="Save Change"
                  name="Save Change"
                ></input>
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBike;
