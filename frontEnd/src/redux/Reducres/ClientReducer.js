import {
  LOAD_CLIENT,
  GET_ALL_CLIENT_SUCCESS,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAIL,
} from "../ActionTypes/ClientConst";
const intialState = {
  loading: false,
  clients: [],
  errors: null,
};
export const clientReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_CLIENT:
      return { ...state, loading: true };
    case GET_ALL_CLIENT_SUCCESS:
      return { ...state, clients: payload.allClients, loading: false };
    case ADD_CLIENT_SUCCESS:
      return { ...state, clients: payload, loading: false };
    case ADD_CLIENT_FAIL:
      return { ...state, errors: payload, loading: false };

    default:
      return state;
  }
};
