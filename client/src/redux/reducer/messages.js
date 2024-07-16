import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idel',
    loading: false,
    sendMessageLoading: false,
    messages: [],
    reciverData: [],
    error: null
};


const messagesReducer = createSlice({
    name: "messagesReducer",
    initialState,

    reducers: {

        getUserMessagesRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getUserMessagesSuccess: (state, action) => {
            state.loading = false;
            state.messages = action.payload.messages || [];
            state.reciverData = action.payload.reciverData;
        },
        getUserMessagesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        sendMessageRequest: (state, action) => {
            state.sendMessageLoading = true;
            state.error = action.payload;
        },
        sendMessageSuccess: (state, action) => {
            state.sendMessageLoading = false;
            state.messages = [...state.messages, action.payload];
        },
        sendMessageFail: (state, action) => {
            state.sendMessageLoading = false;
            state.error = action.payload;
        },

        getNewSocketMessages: (state, action) => {
            state.messages = [...state.messages, action.payload];
        }


    }
});

export const {

    getUserMessagesRequest,
    getUserMessagesSuccess,
    getUserMessagesFail,

    sendMessageRequest,
    sendMessageSuccess,
    sendMessageFail,

    getNewSocketMessages

} = messagesReducer.actions;

export default messagesReducer.reducer;