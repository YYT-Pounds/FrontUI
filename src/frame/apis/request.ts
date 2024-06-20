import axios from 'axios'
import token from './token.ts'

const request = axios.create({
    baseURL: "",
    headers: {
        'Authorization': 'Bearer ' + token.get() || ""
    },
    timeout: 5000,
})

request.interceptors.request.use((config) => {
    return config;
})

request.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(error);
})

export default request;