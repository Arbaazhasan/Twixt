import { configureStore } from "@reduxjs/toolkit";
import appFunctions from "./reducer/appFunctions";
import userLogin from "./reducer/userLogin";
import conversation from "./reducer/conversation";
import messagesReducer from "./reducer/messages";
import socketContextReducer from "./reducer/socketContextReducer";
import { thunk } from "redux-thunk";

const store = configureStore({

    reducer: {
        appFunctions: appFunctions,
        userLogin: userLogin,
        conversations: conversation,
        messagesReducer: messagesReducer,
        socketContextReducer: socketContextReducer


    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

});

export const server = 'http://localhost:5000/api/v1';

export default store;