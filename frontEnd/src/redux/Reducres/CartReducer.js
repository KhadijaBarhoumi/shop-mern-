import {
  LOAD_CART,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  DELETE_PRODUCT_FAIL,
} from "../ActionTypes/CartConstant";
const initialState = {
  loading: false,
  carts: [],
  errors: null,
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CART:
      return { ...state, loading: true };
    case ADD_CART_SUCCESS:
      return { ...state, carts: payload, loading: false };
    case ADD_CART_FAIL:
      return { ...state, errors: payload };
    case GET_ALL_CART_SUCCESS:
      return { ...state, carts: payload.cart, loading: false };
    case GET_ALL_CART_FAIL:
      return { ...state, errors: payload, loading: false };
    case DELETE_PRODUCT_FAIL:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
