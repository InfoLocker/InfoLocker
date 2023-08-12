import { createSlice } from "@reduxjs/toolkit";
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
        },
        fireFalse: (state, action) => {
            state.data=action.payload
        }
    }
});



export const alertSliceActions = alertSlice.actions;
export default alertSlice;