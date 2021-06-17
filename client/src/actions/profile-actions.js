import { GET_USER_DATA } from "../action-types/profile-action-types";

export const getUserData = (dispatch, userData) => {
  return dispatch({ type: GET_USER_DATA, payload: userData });
};
