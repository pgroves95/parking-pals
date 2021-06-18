import { GET_LOGIN_STATUS } from "../action-types/login-action-types";

const initialState = { login: false };

const loginStatus = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_STATUS:
      return (state = { login: true });
    default:
      return state;
  }
};

export default loginStatus;
