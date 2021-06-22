import { GET_ONE_DRIVEWAY } from "../action-types/one-driveway-action-types";

const initialState = [{}];

const oneDriveway = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_DRIVEWAY:
      return (state = action.payload);
    default:
      return state;
  }
};

export default oneDriveway;
