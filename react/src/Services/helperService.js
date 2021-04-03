import { Redirect } from "react-router";
import apiService from "./apiService";

const helperService = {
    checkLogin : ()=>{
        const isLogin = localStorage.getItem("email")!==null;
        const userRole = localStorage.getItem("userRole");
        const currentroute = window.location.pathname;
        // console.log(currentroute.substring(0,11));
        if(!isLogin) {
            if(currentroute!=="/login"||currentroute!=="/user/signup"||currentroute!=="/admin/signup"||currentroute!=="/superadmin/login"){
                return <Redirect to="/login" />
            }
        }
        if(userRole==="user"){
            if(isLogin){
                if(currentroute==="/login"||currentroute==="/user/signup"||currentroute.substring(0,6) ==="/admin"||currentroute.substring(0,11) ==="/superadmin"){
                    return <Redirect to="/user/dashboard" />
                }
            }
        }else if(userRole==="admin"){
            if(isLogin){
                if(currentroute==="/login"||currentroute==="/admin/signup"||currentroute.substring(0,5) ==="/user"||currentroute.substring(0,11) ==="/superadmin"){
                    return <Redirect to="/admin/dashboard" />
                }
             }
        }else if(userRole==="superadmin"){
            if(isLogin){
                if(currentroute==="/login"||currentroute==="/superadmin/login"||currentroute.substring(0,6) ==="/admin"||currentroute.substring(0,5) ==="/user"){
                    return <Redirect to="/superadmin/adminList" />
                }
            }
        }
    },
    login : async (userobj,user,props)=>{
        props.history.push("/login");
        if(user){  
            let res = await  apiService.userlogin(userobj);
            if(res){
                props.history.push("/user/dashboard");
            }else{
                throw "Invalid credentials Try again ."
            }
            localStorage.setItem("email" ,userobj.email);
            localStorage.setItem("userRole" , "user");
        }else{
            let res = await  apiService.adminlogin(userobj);
            if(res){
                props.history.push("/admin/dashboard");
            }else{
                throw "Invalid credentials Try again ."
            }
            localStorage.setItem("email" ,userobj.email);
            localStorage.setItem("userRole" , "admin");
        }
    },
    superAdminLogin : async(superobj,props)=>{
        let res = await  apiService.superlogin(superobj);
        if(res){
            props.history.push("/superadmin/adminList");
        }else{
            throw "Invalid credentials Try again ."
        }
        localStorage.setItem("email" ,superobj.email);
        localStorage.setItem("userRole" , "superadmin");
    },
    userSignup : async (userobj,props)=>{
        let res = await  apiService.usersignup(userobj);
        if(res!==""){
            props.history.push("/login");
        }else{
            throw "Already Email id exist.Try with another email id." ;
        }
    },
    adminSignup : async (adminobj,props)=>{
        let res = await  apiService.adminsignup(adminobj);
        if(res!==""){
            props.history.push("/login");
        }else{
            throw "Already Email id exist.Try with another email id." ;
        }
    },
    adminDashboard : async()=>{
        let email = localStorage.getItem("email");
        return await apiService.adminDashboard(email);
    },
    userDashboard: async () => {
        return await apiService.userDashboard();
        
    },
    companyDetailWithAdminId : async (compId) => {
        return await apiService.companyDetailWithAdminId(compId);
    },
    bikesWithAdminId : async (email) => {
        // console.log(email)
        return await apiService.bikesWithAdminId(email);
    },
    bikeDetailWithBikeId : async (bikeID) => {
        return await apiService.bikeDetailWithBikeId(bikeID)
    },
    userDetailWithEmail : async () => {
        return await apiService.userDetailsWithEmail();
    },
    updateUserWithId : async (user) => {
        return await apiService.updateUserWithId(user);
    },
    userBookings : async () => {
        return await apiService.userBookings();
    },
    bookBike : async (bikeDetail) => {
        return await apiService.bookBike(bikeDetail);
    }
};
export default helperService; 