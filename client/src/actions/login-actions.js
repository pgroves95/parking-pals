import { GET_LOGIN_STATUS } from "../action-types/login-action-types";

export const getLoginStatus = (dispatch) => {
  return dispatch({ type: GET_LOGIN_STATUS });
};
