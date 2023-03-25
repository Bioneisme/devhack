import axios from "axios";
import API from "../../../api/index.js";
import { setError, login, logout, setRole, setIsFetching } from "./authActions.js";
import { API_URL } from "../../../config/apiUrl.js";

export function userLogin(phone, password) {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const response = await API.post("/users/login", { phone, password });
      localStorage.setItem("accessToken", response.data.user.accessToken);
      dispatch(setRole("user"));
      dispatch(login(response.data.user.user));
    } catch (e) {
      const err = e?.response?.data?.message;
      dispatch(setError(err));
    } finally {
      dispatch(setIsFetching(false));
    }
  }
}

export function userRegister(phone, password, name, IIN, farmId) {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const response = await API.post("/users/register", {
        phone, password, name
      });
      localStorage.setItem("accessToken", response.data.user.accessToken);
      dispatch(login(response.data.user.user));
      dispatch(setRole("user"));
    } catch (e) {
      const err = e?.response?.data?.message;
      dispatch(setError(err));
    } finally {
      dispatch(setIsFetching(false));
    }
  }
}

export function userLogout() {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      await API.get("/users/logout");
      localStorage.removeItem("accessToken");
      dispatch(logout());
    } catch (e) {
      const err = e?.response?.data?.message;
      dispatch(setError(err));
    } finally {
      dispatch(setIsFetching(false));
    }
  }
}

export function adminLogin(login, password) {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const response = await API.post("/admins/login", { login, password });
      localStorage.setItem("accessToken", response.data.user.accessToken);
      dispatch(login(response.data.user.user));
      dispatch(setRole("admin"));
    } catch (e) {
      const err = e?.response?.data?.message;
      console.log(err);
      dispatch(setError(err));
    } finally {
      dispatch(setIsFetching(false));
    }
  }
}

export function adminLogout() {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      await API.get("/admins/logout");
      localStorage.removeItem("accessToken");
      dispatch(logout());
    } catch (e) {
      const err = e?.response?.data?.message;
      dispatch(setError(err));
    } finally {
      dispatch(setIsFetching(false));
    }
  }
}

export function checkAuth() {
  return async (dispatch) => {
    try {
      const response = await API.get("/users/getMe");
      dispatch(login(response.data.user));
    } catch (e) {
      dispatch(logout());
      const err = e?.response?.data?.message;
      if (e.response?.status === 400 || e.response?.status === 401) {
        const response = await axios.get(`${ API_URL }/users/refresh`, { withCredentials: true });
        localStorage.setItem("accessToken", response.data.user.accessToken);
        dispatch(login(response.data.user.user));
      }
      dispatch(setError(err));
    }
  }
}
