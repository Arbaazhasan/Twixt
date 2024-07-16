import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    status: 'ideal',
    allUsersChats: [],
    loading: false,
    error: null,

};

const conversations = createSlice({
    name: "conversations",

    initialState,

    reducers: {

        getAllUsersRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getAllUserSuccess: (state, action) => {
            state.loading = false;
            state.allUsersChats = action.payload;
        },
        getAllUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getUserConversationsRequest: (state, action) => {
            state.loading = true;
            state.error = null;
            state.allUsersChats = [];

        },
        getUserConversationsSuccess: (state, action) => {
            state.loading = false;
            state.allUsersChats = action.payload;
        },
        getUserConversationsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getSearchUserRequest: (state, action) => {
            state.loading = true;
            state.allUsersChats = null;
        },

        getSearchUserSuccess: (state, action) => {
            state.loading = false;
            state.allUsersChats = action.payload;
        },

        getSearchUserFail: (state, action) => {
            state.loading = false;
        }

    }
});

export const {
    getAllUsersRequest,
    getAllUserSuccess,
    getAllUserFail,

    getUserConversationsRequest,
    getUserConversationsSuccess,
    getUserConversationsFail,

    getSearchUserRequest,
    getSearchUserSuccess,
    getSearchUserFail

} = conversations.actions;

export default conversations.reducer;


