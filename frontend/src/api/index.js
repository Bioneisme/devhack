import axios from "axios";
import { API_URL } from "../config/apiUrl.js";


const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  credentials: "include",
});

// request interceptor for adding token to headers
API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  return config;
});

// response interceptor for refreshing token
API.interceptors.response.use((config) => {
  return config;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get(`${API_URL}/users/refresh`, {
        withCredentials: true,
        headers: {
          Cookie: `refreshToken=${localStorage.getItem("refreshToken")}`
        }
      });
      localStorage.setItem("accessToken", response.data.user.accessToken);
      return API.request(originalRequest);
    } catch (e) {
      console.log("НЕ АВТОРИЗОВАН")
    }
  }
  throw error;
})

export default API;
