import { GET_LOGIN_STATUS } from "../action-types/login-action-types";

const initialState = null;

const loginStatus = (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGIN_STATUS:
			return (state = action.payload);
		default:
			return state;
	}
};

export default loginStatus;
