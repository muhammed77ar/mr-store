import { ActionTypes } from "../constants/actionType";

const initialValue = {
    products : []
}

export const productReducer = (state = initialValue, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload};
        default:
            return state;
    }
}
export const selectProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}