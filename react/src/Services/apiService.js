import axios from 'axios';

const apiService = {
    login : (val)=>{
        if(val.toggle){ //user login request
            axios.post('http://localhost:8080/user/login', {
                email : val.email,
                password : val.pass
            })
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })

        }
        else{ // Admin login request
            axios.post('http://localhost:8080/admin/login', {
                email : val.email,
                password : val.pass
            })
        }
        
    }

};
export default apiService;