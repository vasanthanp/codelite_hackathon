import axios from "axios";

const apiService = {
  superlogin: (val) => {
    return axios
      .post("http://localhost:8080/super/login", { ...val, id: 1 })
      .then((res) => {
        return res.data;
      });
  },
  userlogin: (val) => {
    return axios.post("http://localhost:8080/user/login", val).then((res) => {
      return res.data;
    });
  },
  adminlogin: (val) => {
    return axios.post("http://localhost:8080/admin/login", val).then((res) => {
      return res.data;
    });
  },
  usersignup: (val) => {
    return axios.post("http://localhost:8080/user/signup", val).then((res) => {
      return res.data;
    });
  },
  adminsignup: (val) => {
    return axios.post("http://localhost:8080/admin/signup", val).then((res) => {
      return res.data;
    });
  },
  adminDashboard: (email) => {
    return axios
      .post("http://localhost:8080/admin/dashboard", { email })
      .then((res) => res.data);
  },
  addNewBikeAndSave: (val) => {
    axios.post("http://localhost:8080/bike/save", val).then((res) => {});
  },
  editBikeandSave: (val) => {
    axios.put("http://localhost:8080/bike/edit", val).then((res) => {});
  },
  DeletBike: (id) => {
    return axios
      .post("http://localhost:8080/bike/delete", { id })
      .then((res) => {});
  },
  getAdminProfile: (email) => {
    return axios
      .post("http://localhost:8080/admin/profile", { email })
      .then((res) => res.data);
  },
  adminEditProfile: (val) => {
    return axios
      .put("http://localhost:8080/admin/edit", val)
      .then((res) => res.data);
  },
  getAdminBikes: (id) => {
    return axios
      .post("http://localhost:8080/admin/bookings", { id: Number(id) })
      .then((res) => res.data);
  },
  getBikeDetais: (id) => {
    return axios
      .post("http://localhost:8080/user/bikeDetails", { id })
      .then((res) => res.data);
  },
  userDashboard: () => {
    return axios("http://localhost:8080/user/dashboard").then((res) => {
      return res.data;
    });
  },
  companyDetailWithAdminId: (compId) => {
    return axios(`http://localhost:8080/user/companyDetail/${compId}`).then(
      (res) => res.data
    );
  },
  bikesWithAdminId: (email) => {
    return axios
      .post("http://localhost:8080/admin/dashboard", email)
      .then((res) => res.data);
  },
  bikesWithAdminId: (email) => {
    return axios
      .post("http://localhost:8080/admin/dashboard", email)
      .then((res) => res.data);
  },
  bikeDetailWithBikeId: (id) => {
    return axios
      .post("http://localhost:8080/user/bikeDetails", { id })
      .then((res) => res.data);
  },
  userDetailsWithEmail: () => {
    const email = localStorage.getItem("email");
    return axios
      .post("http://localhost:8080/user/profile", { email })
      .then((res) => {
        localStorage.setItem("userID", res.data.id);
        return res.data;
      });
  },
  updateUserWithId: (user) => {
    return axios.put("http://localhost:8080/user/edit", user).then((res) => {
      localStorage.setItem("email", res.data.email);
      return res.data;
    });
  },
  userBookings: () => {
    return axios
      .post("http://localhost:8080/user/bookings", {
        email: localStorage.getItem("email"),
      })
      .then((res) => res.data);
  },
  bookBike: (bikeDetail) => {
    return axios
      .post("http://localhost:8080/user/bookBike", bikeDetail)
      .then((res) => {});
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
