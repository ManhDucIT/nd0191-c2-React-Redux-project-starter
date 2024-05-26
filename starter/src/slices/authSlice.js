import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    userId: null
};

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login(state, action){
            state.isAuthenticated = true;
            state.userId = action.payload.userId;
        },
        logout(state){
            state.isAuthenticated = false;
            state.userId = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;