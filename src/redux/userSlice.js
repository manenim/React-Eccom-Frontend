import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        logout: (state) => {
            state.currentUser = null
            state.isFetching = false
            state.error = false
        },
        loginStart: (state, action) => {
            state.isFetching = true
            state.error = false
         }, 
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false
            state.currentUser = action.payload
         }, 
        loginFailure: (state, action) => { 
            state.isFetching = false;
            state.error = !state.error
        },

        
    }
})

export const {loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure, logout} = userSlice.actions;

export default userSlice.reducer; 