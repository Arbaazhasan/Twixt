import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idel",
    sideBarArray: [true, false, false, false, false, false],
    settingArray: [false, false, false, false, false],
    conversationArray: false,
    noConversation: true,

};


export const appFunctions = createSlice({
    name: "Twixt",
    initialState,

    reducers: {

        sideBarOptions: (state, action) => {

            state.sideBarArray.map((i, index) => {
                state.sideBarArray[index] = action.payload === index ? true : false;
                // console.log(i, index);
            });

            if (action.payload === 0 || action.payload === 2) {
                state.noConversation = true;
            }

            if (action.payload !== 4) {
                state.sideBarArray.map((i, index) => {
                    state.settingArray[index] = false;
                });
            }

            if (action.payload === 4) {
                state.conversationArray = false;
                state.noConversation = false;
            }

        },
        settingOptions: (state, action) => {

            if (state.sideBarArray[4]) {
                state.settingArray.map((i, index) => {
                    state.settingArray[index] = action.payload === index ? true : false;
                    // console.log(i, index);
                });


            }
        },

        conversationProvider: (state, action) => {
            state.conversationArray = true;
            state.noConversation = false;
        }



    }

});

export const { sideBarOptions, settingOptions, conversationProvider } = appFunctions.actions;

export default appFunctions.reducer;