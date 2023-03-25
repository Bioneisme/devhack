import {
  LOGIN,
  LOGOUT,
  SET_ROLE,
  SET_IS_FETCHING,
  SET_ERROR
} from "./authConsts.js";

const initialState = {
  user: {},
  role: null,
  isAuth: false,
  isFetching: false,
  error: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isAuth: false,
        role: null,
      }
    }
    case SET_ROLE: {
      return {
        ...state,
        role: action.payload,
      }
    }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
