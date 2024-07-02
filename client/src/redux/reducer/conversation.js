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

        getAllUsersChatsRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getAllUserChatsSuccess: (state, action) => {
            state.loading = false;
            state.allUsersChats = action.payload;
        },
        getAllUserChatsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },




    }
});

export const {
    getAllUsersChatsRequest,
    getAllUserChatsSuccess,
    getAllUserChatsFail
} = conversations.actions;

export default conversations.reducer;


