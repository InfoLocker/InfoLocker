import { createSlice } from "@reduxjs/toolkit";
const data = [{ id: 0 }]
const loginSlice = createSlice({
    name: "Login",
    initialState: data,
    reducers: {
        login: (state, action) => {
            localStorage.setItem("userId",action.payload.id)
            console.log(action.payload);

            // state[0].id = (action.payload.id);
            // console.log(state, "state");
            // const temp = [...state, action.payload.id];
            // state = temp;
            const temp = [{ id: action.payload.id }];
            return temp;
        },
        logout: (state, action) => {
            localStorage.clear()
            return data;
        }
    }
});
// export default loginSlice.reducer;
// export const { login, logout } = loginSlice.actions;


export const loginSliceActions = loginSlice.actions;
export default loginSlice;