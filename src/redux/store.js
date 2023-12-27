import {combineReducers, createStore} from "redux"
import CounterReducer from "./counter"
import IsLogged from "./isLogged"

const allReducers = combineReducers({
    counter : CounterReducer,
    islogged : IsLogged
})

const Store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default Store

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()