import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://devhack-api.13lab.tech/api/',
    withCredentials: true
});
