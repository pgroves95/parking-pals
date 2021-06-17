import { GET_USER_DATA } from "../action-types/profile-action-types";

const initialState = [{}];

const profileData = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return (state = action.payload);
    default:
      return state;
  }
};

export default profileData;
