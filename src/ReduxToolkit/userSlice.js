import {createSlice} from "@reduxjs/toolkit"
const user = {
    name : "mohamed",
    country : "ma",
    age : 19
}

const userSlice = createSlice({
    name : "user",
    initialState : user,
    reducers : {
    
        resetUser : (state) => {
                ////
        },
        updateUser : (state) => {
                ////
         }
        
    }
})
export default userSlice.reducer