import { combineReducers } from "redux";
import profileData from "./userReducer";
import searchCoordinates from "./searchReducer";
import loginStatus from "./loginReducer";

const rootReducer = combineReducers({
  profileData,
  searchCoordinates,
  loginStatus,
});

export default rootReducer;
