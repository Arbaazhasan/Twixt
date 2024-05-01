import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idel",
    sideBarArray: [true, false, false, false, false],
    settingArray: [true, false, false, false, false]

};


export const appFunctions = createSlice({
    name: "Twixt",
    initialState,

    reducers: {

        sideBarOptions: (state, action) => {

            state.sideBarArray.map((i, index) => {
                state.sideBarArray[index] = action.payload === index ? true : false;
                console.log(i, index);
            });

            if (action.payload !== 4) {
                state.sideBarArray.map((i, index) => {
                    state.settingArray[index] = false;
                });
            }
        },
        settingOptions: (state, action) => {

            if (state.sideBarArray[4])
                state.settingArray.map((i, index) => {
                    state.settingArray[index] = action.payload === index ? true : false;
                    console.log(i, index);
                });

        },

        conversationProvider: (state, action) => {

        }



    }

});

export const { sideBarOptions, settingOptions } = appFunctions.actions;

export default appFunctions.reducer;