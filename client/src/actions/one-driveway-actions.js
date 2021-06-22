import { GET_ONE_DRIVEWAY } from "../action-types/one-driveway-action-types";

export const showOneDriveway = (dispatch, data) => {
  return dispatch({ type: GET_ONE_DRIVEWAY, payload: data });
};
