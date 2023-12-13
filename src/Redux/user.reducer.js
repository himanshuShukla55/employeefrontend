import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  auth: false,
  error: null,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_START:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        auth: true,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        auth: false,
        error: payload,
      };
    case USER_LOGOUT_START:
      return { ...state, loading: true };
    case USER_LOGOUT_SUCCESS:
      return {
        initialState,
      };
    case USER_LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        auth: false,
        error: payload,
      };
    default:
      return state;
  }
};
