import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idel',
    ScoketContext: {},
    socketIsOnline: null,

};

const socketContextReducer = createSlice({
    name: 'socketContextReducer',
    initialState,

    reducers: {

        getSocketContextReducer: (state, action) => {
            state.ScoketContext = action.payload;
        },

        getSocketIsOnline: (state, action) => {
            state.socketIsOnline = action.payload;
        }

    }
});

export const { getSocketContextReducer, getSocketIsOnline } = socketContextReducer.actions;

export default socketContextReducer.reducer;