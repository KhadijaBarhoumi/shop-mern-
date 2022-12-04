import {
  LOAD_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
} from "../ActionTypes/ProductConst";

import axios from "axios";
export const addProduct = (newProduct, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/product/addProduct",
      newProduct
    );
    console.log(response);
    dispatch({ type: ADD_PRODUCT_SUCCESS });
    dispatch(getAllProducts());
    navigate("/");
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
  }
};
export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS });
  try {
    const response = await axios.get("http://localhost:5000/product/");
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error });
  }
};
