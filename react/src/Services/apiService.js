import axios from "axios";

const apiService = {
    superlogin : (val)=>{
        return (
            axios.post('http://localhost:8080/super/login', val)
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        )  
    },
    userlogin : (val)=>{
        return (
            axios.post('http://localhost:8080/user/login', val)
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        )  
    },
    adminlogin : (val)=>{
        return ( 
            axios.post('http://localhost:8080/admin/login', val)
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        )  
    },
    usersignup : (val)=>{
        return (
            axios.post('http://localhost:8080/user/signup', val)
            .then((res)=>{
                return res.data;
            })
        )  
    },
    adminsignup : (val)=>{
        console.log(val);
        return (
            axios.post('http://localhost:8080/admin/signup', val)
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        )  
    },
    adminDashboard : (val)=>{
       return (
        axios.post('http://localhost:8080/admin/dashboard', {"email" : val})
        .then((res)=>{
            console.log(res);
            return res.data;
        })
       );
    },
    addNewBikeAndSave : (val)=>{
        axios.post('http://localhost:8080/bike/save', val)
        .then((res)=>{
            console.log(res.data);
        })
    },
    editBikeandSave :(val)=>{
        axios.put('http://localhost:8080/bike/edit', val)
        .then((res)=>{
            console.log(res.data);
        })
    },
    DeletBike :(id)=>{
        return(
            axios.post('http://localhost:8080/bike/delete', {id})
            .then((res)=>{
                console.log(res.data);
            })
        );
    },
    getAdminBikes : (id)=>{
        console.log(id);
        return(
            axios.post('http://localhost:8080/admin/bookings', {"id":Number(id)})
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        );
    },
    getAdminProfile : (email)=>{
        console.log(email);
        return(
            axios.post('http://localhost:8080/admin/profile', {email})
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        );
    },
    getBikeDetais : (id)=>{
        return(
            axios.post('http://localhost:8080/user/bikeDetails', {id})
            .then((res)=>{
                console.log(res.data);
                return res.data;
            })
        );
    },
    userDashboard : () => {
      return (
        axios("http://localhost:8080/user/dashboard")
        .then(res =>{
            console.log(res.data);
            return res.data;
        } )
      ) 
    },
    companyDetailWithAdminId : (compId) => {
        return axios(`http://localhost:8080/user/companyDetail/${compId}`)
        .then(res => res.data)
    },
    bikesWithAdminId : (email) => {
        return axios.post("http://localhost:8080/admin/dashboard",email)
        .then(res =>{
                console.log(res);   
                return res.data;
        } )
    },
    bikeDetailWithBikeId : (id) => {
        return axios.post("http://localhost:8080/user/bikeDetails",{id})
        .then(res => res.data)
    },
    userDetailsWithEmail : () => {
        const email = localStorage.getItem("email");
        return axios.post("http://localhost:8080/user/profile",{email})
        .then(res => localStorage.setItem("userID", res.data.id))
    },
    updateUserWithId : (user) => {
        return axios.put("http://localhost:8080/user/edit",user)
        .then(res => res.data);
    },
    userBookings : () => {
        return axios.post("http://localhost:8080/user/bookings",{email:localStorage.getItem("email")})
        .then(res => res.data)
    },
    bookBike : (bikeDetail) => {
        return axios.post("http://localhost:8080/user/bookBike",bikeDetail)
        .then(res => console.log(res)) 
    },

  getAdmins: () => {
    return axios("http://localhost:8080/super/dashboard").then(
      (res) => res.data
    );
  },
  deleteAdmin: (adminId) => {
    return axios
      .post("http://localhost:8080/super/deleteAdmin", { id: adminId })
      .then((res) => res.data);
  },
  getAllBookings: () => {
    return axios("http://localhost:8080/super/allBookings").then(
      (res) => res.data
    );
  },
};
export default apiService;
