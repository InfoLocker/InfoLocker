
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import alertSlice from './alertSlice';

const store = configureStore({
    reducer: {
        loginData: loginSlice.reducer,
        alertData:alertSlice.reducer
    }
})

export default store;