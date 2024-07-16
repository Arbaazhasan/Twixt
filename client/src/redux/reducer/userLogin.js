import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    loading: false,
    userAuthenticated: false,
    userData: {},
    error: null,
};

export const userLogin = createSlice({
    name: "userLogin",
    initialState,

    reducers: {


        // SignUp
        userSignupRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        userSigninSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.userData = action.payload;
            localStorage.setItem('chat-user', action.payload);
            console.log(action.payload);

        },
        userSigninFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        // Login
        userLoginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        userLoginSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.userData = action.payload;
            localStorage.setItem('chat-user', action.payload);
            console.log(action.payload);

        },
        userLoginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        // Logout
        userLogoutRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        userLogoutSuccess: (state, action) => {
            state.loading = false;
            state.userData = null;
            state.userAuthenticated = false;
            localStorage.removeItem('chat-user');
        },
        userLogoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        // Fetch User Details 
        getUserRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getUserSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.userData = action.payload;
        },
        getUserFail: (state, action) => {
            state.loading = false;
            localStorage.removeItem('chat-user');
            state.error = action.payload;

        },



    }
});

export const {

    userSignupRequest,
    userSigninSuccess,
    userSigninFail,


    userLoginRequest,
    userLoginSuccess,
    userLoginFail,


    userLogoutRequest,
    userLogoutSuccess,
    userLogoutFail,

    getUserRequest,
    getUserSuccess,
    getUserFail,

    
} = userLogin.actions;

export default userLogin.reducer;
