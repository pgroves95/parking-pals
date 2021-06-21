import { combineReducers } from "redux";
import profileData from "./userReducer";
import searchCoordinates from "./searchReducer";
import loginStatus from "./loginReducer";
import dbDrivewayList from "./dbDrivewayReducer";

const rootReducer = combineReducers({
  profileData,
  searchCoordinates,
  loginStatus,
  dbDrivewayList,
});

export default rootReducer;
