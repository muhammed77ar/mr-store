const IsLogged = (state = {islogged : false}, action) =>{
    switch(action.type){
        case "ISLOGGED":
            return {islogged : !state.islogged};
        default:
            return state
    }
}
export default IsLogged