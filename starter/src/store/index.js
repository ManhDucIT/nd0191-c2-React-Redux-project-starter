import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import usersReducer from "../slices/usersSlice";
import questionsReducer from "../slices/questionsSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        questions: questionsReducer
    }
});

export default store;