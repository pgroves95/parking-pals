import { GET_RESERVATIONS_FROM_DB } from "../action-types/db-reservations-action-types";

const initialState = [{}];

const dbReservations = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS_FROM_DB:
      return (state = action.payload);
    default:
      return state;
  }
};

export default dbReservations;