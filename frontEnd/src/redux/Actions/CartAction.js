import {
  LOAD_CART,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from "../ActionTypes/CartConstant";

import axios from "axios";
export const addProductToCart =
  ({ product: idProductToCart }, navigate) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/cart/addProducttocart",
        { product: idProductToCart }
      );
      dispatch({ type: ADD_CART_SUCCESS });
      navigate("/");
    } catch (error) {
      console.dir(error);
      dispatch({ type: ADD_CART_FAIL, payload: error });
    }
  };

export const getCart = () => async (dispatch) => {
  dispatch({ type: LOAD_CART });
  try {
    const response = await axios.get("http://localhost:5000/cart/");

    dispatch({ type: GET_ALL_CART_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_CART_FAIL, payload: error });
  }
};
export const deleteProductToCart = (idcart) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/cart/${idcart}`);

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: response.data });
    dispatch(getCart());
  } catch (error) {
    console.dir(error);
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: error });
  }
};
