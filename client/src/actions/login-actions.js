import { GET_LOGIN_STATUS } from "../action-types/login-action-types";

export const getLoginStatus = (dispatch, data) => {
	return dispatch({ type: GET_LOGIN_STATUS, payload: data });
};
