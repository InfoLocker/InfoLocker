import { createSlice,current } from "@reduxjs/toolkit";
const data = {
    data:{
        flag:false,
        alertMessage:""
    }
}
const alertSlice = createSlice({
    name: "Alert",
    initialState: data,
    reducers: {
        fireTrue: (state, action) => {
             state.data=action.payload
             console.log("current state:- ",current(state))
        },
        fireFalse: (state, action) => {
            state.data=action.payload
            console.log("current state:- ",current(state))
        }
    }
});
// export default loginSlice.reducer;
// export const { login, logout } = loginSlice.actions;


export const alertSliceActions = alertSlice.actions;
export default alertSlice;