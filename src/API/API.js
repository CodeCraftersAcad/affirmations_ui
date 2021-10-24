import axios from 'axios';

const API = {
    postRegister: function (user) {
        return axios.post('/auth/register', { user });
    },
    postLogin: function (userLoginInfo) {
        return axios.post('/auth/login', { userLoginInfo });
    },
    postAddNewQuote: function (quoteInfo,jwt) {
        return axios.post('/quotes', {
            headers: {
                'authorization': `Bearer ${jwt}`
            },
            ...quoteInfo
        });

    },
};

export default API;