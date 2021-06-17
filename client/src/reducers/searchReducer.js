import { GET_DRIVEWAY_RESULTS } from "../action-types/search-action-types";

const initialState = [{}];

const drivewaySearch = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVEWAY_RESULTS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default drivewaySearch;
