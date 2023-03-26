import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://3.90.65.9/api/',
    withCredentials: true
});
