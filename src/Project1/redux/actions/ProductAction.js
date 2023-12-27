import { ActionTypes } from "../constants/actionType"

export const setProduct = (products) =>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectProduct = (product) =>{
    return {
        type : ActionTypes.SELECT_PRODUCT,
        payload : product
    }
}

export const removeSelectProduct = () =>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}