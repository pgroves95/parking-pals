import { GET_SEARCH_COORDINATES } from "../action-types/search-action-types";

export const searchCoordinates = (dispatch, coords) => {
  return dispatch({ type: GET_SEARCH_COORDINATES, payload: coords });
};
