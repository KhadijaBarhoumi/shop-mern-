import {combineReducers} from "redux"
import {productReducer} from "./ProductReducer"
import {clientReducer} from "./ClientReducer"
import {cartReducer} from "./CartReducer"

export const rootReducers=combineReducers({productReducer,clientReducer,cartReducer})