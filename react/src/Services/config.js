const config = {
    login : {
        email : "",
        password : "",
    },
    userSignupObj : {
        email : "",
        password : "",
        username : "",
        mobileNumber : "",
        age : "",
        userRole : "user",
    },
    adminSignupObj : {
        email : "",
        password : "",
        mobileNumber : "",
        sellerName : "",
        userRole : "admin",
        companyName : "",
        companyImageURL : "",
        companyAddress : "",
        earnings : 0 ,
    },
    addBikeObj : {
        adminID : "",
        status  :false,
        bikeModel : "",
        type : "",
        price : "",
    },
    editBikeObj : {
        id : "",
        adminID : "",
        status  :false,
        bikeModel : "",
        type : "",
        price : "",
    }
}
export default config;