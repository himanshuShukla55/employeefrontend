import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
} from "./actionTypes";
export const userLoginStart = () => ({
  type: USER_LOGIN_START,
});
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});
export const userLoginFailed = (payload) => ({
  type: USER_LOGIN_FAILED,
  payload,
});
export const userLogoutStart = () => ({
  type: USER_LOGOUT_START,
});
export const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
});
export const userLogoutFailed = (payload) => ({
  type: USER_LOGOUT_FAILED,
  payload,
});
