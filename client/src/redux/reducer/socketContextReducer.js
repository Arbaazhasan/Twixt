import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idel',
    socketIsOnline: null,


};

const socketContextReducer = createSlice({
    name: 'socketContextReducer',
    initialState,

    reducers: {
        getSocketIsOnline: (state, action) => {
            state.socketIsOnline = action.payload;
        },

    }
});

export const {
    getSocketIsOnline,

} = socketContextReducer.actions;

export default socketContextReducer.reducer;