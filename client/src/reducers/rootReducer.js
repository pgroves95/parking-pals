import { combineReducers } from "redux";
import profileData from "./userReducer";
import drivewaySearch from "./searchReducer";
import loginStatus from "./loginReducer";

const rootReducer = combineReducers({
  profileData,
  drivewaySearch,
  loginStatus,
});

export default rootReducer;
