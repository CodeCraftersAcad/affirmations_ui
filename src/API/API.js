import axios from 'axios';
const API = {
    postRegister: async (user) => {
        try {
            return await axios.post('/auth/register', { user });
        } catch (err) {
            console.log(err);
        }
    },
    postLogin: async (userLoginInfo) => {
        try {
            return await axios.post('/auth/login', { userLoginInfo });
        } catch (err) {
            console.log(err);
        }
    },
    postAddNewQuote: async (quoteInfo, jwt) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        }
        try {
            return await axios.post('/quotes', quoteInfo, config);
        } catch (err) {
            console.log(err)
        }
    },
    getUserQuotesById: (id) => {
        try {
            return axios.get(`/user/${id}`);
        } catch (err) {
            console.log(err);
        }
    }
};

export default API;