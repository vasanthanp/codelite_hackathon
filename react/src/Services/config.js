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
    },
    adminProfileObj : {
        companyAddress : "",
        companyName : "",
        email : "",
        mobileNumber : "",
        sellerName : "",
        password : "",
        earnings : "",
    },
    adminbookingObj :{
        id : "",
        userID : "",
        bikeID : "",
        bikeModel : "",
        rent : "",
        days: "",
        totalPrice : "",
    },
}
export default config;