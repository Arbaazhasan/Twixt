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

    }
});

export const {
    getAllUsersRequest,
    getAllUserSuccess,
    getAllUserFail,

    getUserConversationsRequest,
    getUserConversationsSuccess,
    getUserConversationsFail

} = conversations.actions;

export default conversations.reducer;


