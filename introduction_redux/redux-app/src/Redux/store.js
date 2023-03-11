import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice"
import notesSlice from "./slices/notesSlice";

export default configureStore({
    reducer:{
        messageReducer,
        // here we can pass also more than one reducer

        notesReducer: notesSlice
    }
})