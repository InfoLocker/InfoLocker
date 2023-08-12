import { createSlice } from "@reduxjs/toolkit";
const data = [{ id: 0 }]
const loginSlice = createSlice({
    name: "Login",
    initialState: data,
    reducers: {
        login: (state, action) => {
            localStorage.setItem("userId",action.payload.id)

            const temp = [{ id: action.payload.id }];
            return temp;
        },
        logout: (state, action) => {
            localStorage.clear()
            return data;
        }
    }
});



export const loginSliceActions = loginSlice.actions;
export default loginSlice;