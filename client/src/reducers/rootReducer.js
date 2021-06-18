import { combineReducers } from "redux";
import profileData from "./userReducer";
import drivewaySearch from "./searchReducer";

const rootReducer = combineReducers({ profileData, drivewaySearch });

export default rootReducer;
