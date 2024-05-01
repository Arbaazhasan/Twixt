import { configureStore } from "@reduxjs/toolkit";
import appFunctions from "./reducer/appFunctions";

const store = configureStore({

    reducer: {
        appFunctions: appFunctions
    }

});

export default store;