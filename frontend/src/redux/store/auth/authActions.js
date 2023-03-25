import {
  LOGIN,
  LOGOUT,
  SET_ROLE,
  SET_IS_FETCHING,
  SET_ERROR
} from "./authConsts.js";

export const login = (userObj) => ({
  type: LOGIN,
  payload: userObj
});

export const logout = () => ({
  type: LOGOUT,
});

export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role
});
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err
});
