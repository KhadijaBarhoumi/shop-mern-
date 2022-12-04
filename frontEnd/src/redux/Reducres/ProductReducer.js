import {
  LOAD_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
} from "../ActionTypes/ProductConst";
const initialState = {
  loading: false,
  products: [],
  errors: null,
  productEdit: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: payload.allProducts, loading: false };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, products: payload, loading: false };
    case GET_ALL_PRODUCTS_FAIL:
      return { ...state, errors: payload, loading: false };
    case ADD_PRODUCT_FAIL:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
