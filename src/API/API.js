import axios from 'axios';

const API = {
    postRegister: function (user) {
        return axios.post('/auth/register', { user });
    },
    postLogin: function (userLoginInfo) {
        return axios.post('/auth/login', { userLoginInfo });
    }
};

export default API;