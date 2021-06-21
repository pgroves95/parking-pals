import { GET_DRIVEWAYS_FROM_DB } from "../action-types/db-driveways-action-types";

const initialState = [{}];

const dbDrivewayList = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVEWAYS_FROM_DB:
      return (state = action.payload);
    default:
      return state;
  }
};

export default dbDrivewayList;
