import { combineReducers } from "redux";
import profileData from "./userReducer";
import searchCoordinates from "./searchReducer";
import loginStatus from "./loginReducer";
import dbDrivewayList from "./dbDrivewayReducer";
import oneDriveway from "./oneDrivewayReducer";
import dbReservationsList from "./dbReservationsReducer";

const rootReducer = combineReducers({
  profileData,
  searchCoordinates,
  loginStatus,
  dbDrivewayList,
  oneDriveway,
  dbReservationsList,
});

export default rootReducer;
