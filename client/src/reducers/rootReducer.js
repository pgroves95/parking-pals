import { combineReducers } from "redux";
import profileData from "./userReducer";
import searchCoordinates from "./searchReducer";
import loginStatus from "./loginReducer";
import dbDrivewayList from "./dbDrivewayReducer";
import oneDriveway from "./oneDrivewayReducer";
import dbReservations from "./dbReservationsReducer";

const rootReducer = combineReducers({
  profileData,
  searchCoordinates,
  loginStatus,
  dbDrivewayList,
  oneDriveway,
  dbReservations,
});

export default rootReducer;
