import { GET_RESERVATIONS_FROM_DB } from "../action-types/db-reservations-action-types";

export const dbReservations = (dispatch, data) => {
  return dispatch({ type: GET_RESERVATIONS_FROM_DB, payload: data });
};