import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {}
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        receiveUsers(state, action){
            state.items = action.payload.users
        },
        addQuestionToUser(state, action){
            const { userId, questionId } = action.payload;
            state.items[userId].questions.push(questionId);
        },
        addVoteToUser(state, action){
            const { userId, questionId, answer } = action.payload;
            state.items[userId].answers[questionId] = answer;
        }
    }
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;