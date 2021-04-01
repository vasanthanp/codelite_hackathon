import React,{useState} from 'react';
import styles from './Signup.module.css';
import { BrowserRouter as Router,Link} from 'react-router-dom';

function AdminSignup() {
    let Signup = (e)=>{
        e.preventDefault();
        //user helper service........
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-sm-8 col-lg-7 my-5" id={styles.signupBox}>
                <div className="card" id={styles.signupcard1}>
                    <div className="card-body">
                        <h1 align="center">SIGN UP</h1>
                        <form>
                            <div className="form-group input-group-lg">
                                <input type="email" className="form-control" id={styles.email}  name="mail" placeholder="Enter Email" ></input>
                            </div>
                            <div className="form-group input-group-lg">
                                <input type="password" name="password" id={styles.password} className="form-control"  placeholder="Enter Password" ></input>
                            </div>
                            <div className="form-group input-group-lg">
                                <input type="text" name="phoneNo" id={styles.mobilenumber} className="form-control" placeholder="Enter Mobile Number"></input>
                            </div>
                            <div className="form-group input-group-lg">
                                <select className="form-control"  id={styles.userrole} >
                                   <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="form-group input-group-lg">
                                <input type="name" name="name" id={styles.sellername} className="form-control" placeholder="Enter Seller Name" ></input>
                            </div>
                            <div className="form-group input-group-lg">
                                <input type="text" name="age" id={styles.companyname} className="form-control" placeholder="Enter Company Name"></input>
                            </div>
                            <div className="form-group input-group-lg">
                                <input type="text" name="age" id={styles.companyImgUrl} className="form-control" placeholder="Enter Company Image Url"></input>
                            </div>
                            <div className="form-group input-group-lg">
                                <input type="text" name="age" id={styles.companyAddress} className="form-control" placeholder="Enter Company Address"></input>
                            </div>
                            

                            <input type="submit" className="form-control col-sm-12" id={styles.submitbutton} name="Submit" onClick={(e)=>Signup(e)} ></input><br></br>
                            <p align="center">
                                Go to Login <Link to="/login" id={styles.loginLink}>Click Here</Link>
                            </p>
                        </form>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    )
}
export default AdminSignup