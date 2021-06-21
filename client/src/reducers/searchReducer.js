import { GET_SEARCH_COORDINATES } from "../action-types/search-action-types";

const initialState = [{}];

const searchCoordinates = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_COORDINATES:
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchCoordinates;
