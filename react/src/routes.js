import { Switch, Route, Redirect } from "react-router-dom";
import AdminEditProfile from "./components/AdminSide/AdminEditProfile/AdminEditProfile.component";
import AdminBooking from "./components/AdminSide/AdminBooking/AdminBooking.component";
import UserBooking from "./components/UserSide/UserBooking/UserBooking.component";
import BikeDetails from "./components/UserSide/BikeDetails/BikeDetails";
import CompanyDetails from "./components/UserSide/CompanyDetails/CompanyDetails";
import UserDashboard from "./components/UserSide/UserDashboard/UserDashboard";
import UserProfile from "./components/UserSide/UserProfile/UserProfile";
import UserEditProfile from "./components/UserSide/UserEditProfile/UserEditProfile";
import Login from "./components/Auth/Login/Login";
import SuperAdminLogin from "./components/Auth/Login/SuperAdminLogin/SuperAdminLogin";
import SuperAdminBookings from "./components/SuperAdmin/SuperAdminBookings/SuperAdminBookings";
import SuperAdminDashboard from "./components/SuperAdmin/SuperAdminDashboard/SuperAdminDashboard";
import AddNewBike from "./components/AdminSide/AdminDashboard/AddNewBike";
import AdminDashboard from "./components/AdminSide/AdminDashboard/AdminDashboard";
import EditBike from "./components/AdminSide/AdminDashboard/EditBike";
import AdminProfile from "./components/AdminSide/AdminProfile/AdminProfile";
import UserSignup from "./components/Auth/Signup/UserSignup";
import AdminSignup from "./components/Auth/Signup/AdminSignup";
const routes = (
  <Switch>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/user/signup" component={UserSignup}></Route>
    <Route exact path="/admin/signup" component={AdminSignup}></Route>

    <Route exact path="/admin/profile/:adminId">
      <AdminProfile />
    </Route>
    <Route exact path="/admin/editprofile/:adminId">
      <AdminEditProfile />{" "}
    </Route>
    <Route exact path="/admin/bookings/:adminId">
      <AdminBooking />
    </Route>
    <Route exact path="/admin/dashboard" component={AdminDashboard}></Route>
    <Route exact path="/admin/editBike" component={EditBike}></Route>
    <Route exact path="/admin/addBike" component={AddNewBike}></Route>

    <Route exact path="/user/dashboard" component={UserDashboard} />
    <Route
      exact
      path="/user/companyDetail/:compId"
      component={CompanyDetails}
    />
    <Route exact path="/user/bikeDetail/:bikeId" component={BikeDetails} />
    <Route exact path="/user/profile" component={UserProfile} />
    <Route exact path="/user/editProfile/:userId" component={UserEditProfile} />
    <Route exact path="/user/bookings/:userId">
      {" "}
      <UserBooking />
    </Route>

    <Route exact path="/superadmin/login" component={SuperAdminLogin} />
    <Route exact path="/superadmin/adminList">
      <SuperAdminDashboard />
    </Route>
    <Route exact path="/superadmin/adminBookings">
      {" "}
      <SuperAdminBookings />
    </Route>

    <Route>
      <Redirect to="/login" />
    </Route>
  </Switch>
);

export default routes;
