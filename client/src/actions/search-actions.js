import { GET_DRIVEWAY_RESULTS } from "../action-types/search-action-types";

export const drivewayResults = (dispatch, coords) => {
  return dispatch({ type: GET_DRIVEWAY_RESULTS, payload: coords });
};
