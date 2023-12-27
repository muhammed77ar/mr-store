import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

export const allReducers = combineReducers({
    allProducts : productReducer,
    product : selectProductReducer
})