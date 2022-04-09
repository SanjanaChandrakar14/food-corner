import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:9090/users';

class ApiService {

    authenticateUser(email,password) {
        //return axios.post(USER_API_BASE_URL+'/authenticate?email='+email+"&password="+password);
        return axios.post(USER_API_BASE_URL+"/authenticate",{email:email,password:password});
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL+"/adduser", user); //axios is used for API call
    }

    sendOrder(order,uid){
        return axios.post(USER_API_BASE_URL+'/placeorder/'+uid,order);
    }

    checkEmail(email){
        return axios.post(USER_API_BASE_URL+'/checkUser/'+email);
    }

}

export default new ApiService();