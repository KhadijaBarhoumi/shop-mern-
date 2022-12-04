import {
  LOAD_CLIENT,
  GET_ALL_CLIENT_SUCCESS,
  GET_ALL_CLIENT_FAIL,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAIL,
} from "../ActionTypes/ClientConst";
import axios from "axios";

export const addClient = (newClient, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/client/addClient",
      newClient
    );
    console.log(response);
    dispatch({ type: ADD_CLIENT_SUCCESS });
    dispatch(getAllClient());
    navigate("/");
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADD_CLIENT_FAIL, payload: error });
  }
};
export const getAllClient = () => async (dispatch) => {
  dispatch({ type: LOAD_CLIENT });
  try {
    const response = await axios.get("http://localhost:5000/client/");
    dispatch({ type: GET_ALL_CLIENT_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_CLIENT_FAIL, payload: error });
  }
};
