import axios from "axios";

// const baseURL = "https://8080-cbdcacdaabeeaebfeedaeaffecacedcaeb.examlyiopb.examly.io/";
const baseURL = "http://localhost:8080/";
const apiService = {
  superlogin: (val) => {
    return axios
      .post(`${baseURL}super/login`, { ...val, id: 1 })
      .then((res) => {
        return res.data;
      });
  },
  userlogin: (val) => {
    return axios.post(`${baseURL}user/login`, val).then((res) => {
      return res.data;
    });
  },
  adminlogin: (val) => {
    return axios.post(`${baseURL}admin/login`, val).then((res) => {
      return res.data;
    });
  },
  usersignup: (val) => {
    return axios.post(`${baseURL}user/signup`, val).then((res) => {
      return res.data;
    });
  },
  adminsignup: (val) => {
    return axios.post(`${baseURL}admin/signup`, val).then((res) => {
      return res.data;
    });
  },
  adminDashboard: (email) => {
    return axios
      .post(`${baseURL}admin/dashboard`, { email })
      .then((res) => res.data);
  },
  addNewBikeAndSave: (val) => {
    axios.post(`${baseURL}bike/save`, val).then((res) => {});
  },
  editBikeandSave: (val) => {
    axios.put(`${baseURL}bike/edit`, val).then((res) => {});
  },
  DeletBike: (id) => {
    return axios.post(`${baseURL}bike/delete`, { id }).then((res) => {});
  },
  getAdminProfile: (email) => {
    return axios
      .post(`${baseURL}admin/profile`, { email })
      .then((res) => res.data);
  },
  adminEditProfile: (val) => {
    return axios.put(`${baseURL}admin/edit`, val).then((res) => res.data);
  },
  getAdminBikes: (id) => {
    return axios
      .post(`${baseURL}admin/bookings`, { id: Number(id) })
      .then((res) => res.data);
  },
  getBikeDetais: (id) => {
    return axios
      .post(`${baseURL}user/bikeDetails`, { id })
      .then((res) => res.data);
  },
  userDashboard: () => {
    return axios(`${baseURL}user/dashboard`).then((res) => {
      return res.data;
    });
  },
  companyDetailWithAdminId: (compId) => {
    return axios(`${baseURL}user/companyDetail/${compId}`).then(
      (res) => res.data
    );
  },
  bikesWithAdminId: (email) => {
    return axios
      .post(`${baseURL}admin/dashboard`, email)
      .then((res) => res.data);
  },
  bikesWithAdminId: (email) => {
    return axios
      .post(`${baseURL}admin/dashboard`, email)
      .then((res) => res.data);
  },
  bikeDetailWithBikeId: (id) => {
    return axios
      .post(`${baseURL}user/bikeDetails`, { id })
      .then((res) => res.data);
  },
  userDetailsWithEmail: () => {
    const email = localStorage.getItem("email");
    return axios.post(`${baseURL}user/profile`, { email }).then((res) => {
      localStorage.setItem("userID", res.data.id);
      return res.data;
    });
  },
  updateUserWithId: (user) => {
    return axios.put(`${baseURL}user/edit`, user).then((res) => {
      localStorage.setItem("email", res.data.email);
      return res.data;
    });
  },
  userBookings: () => {
    return axios
      .post(`${baseURL}user/bookings`, {
        email: localStorage.getItem("email"),
      })
      .then((res) => res.data);
  },
  bookBike: (bikeDetail) => {
    return axios.post(`${baseURL}user/bookBike`, bikeDetail).then((res) => {});
  },
  getAdmins: () => {
    return axios(`${baseURL}super/dashboard`).then((res) => res.data);
  },
  deleteAdmin: (adminId) => {
    return axios
      .post(`${baseURL}super/deleteAdmin`, { id: adminId })
      .then((res) => res.data);
  },
  getAllBookings: () => {
    return axios(`${baseURL}super/allBookings`).then((res) => res.data);
  },
};
export default apiService;
