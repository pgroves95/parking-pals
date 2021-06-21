import { GET_DRIVEWAYS_FROM_DB } from "../action-types/db-driveways-action-types";

export const dbDriveways = (dispatch, data) => {
  return dispatch({ type: GET_DRIVEWAYS_FROM_DB, payload: data });
};
