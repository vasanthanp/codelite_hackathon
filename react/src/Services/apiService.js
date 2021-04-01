import axios from 'axios';

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
    }

};
export default apiService;