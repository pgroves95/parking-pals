import { GET_DATA } from "../action-types/supaBase-action-types";

const initialState = [];

const supaBaseHostData = (state=initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return state = (action.payload);
        default:
            return state;
    }
}

export default supaBaseHostData;