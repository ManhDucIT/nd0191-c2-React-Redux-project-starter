import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {}
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        receiveQuestions(state, action){
            state.items = action.payload.questions;
        },
        addQuestion(state, action){
            const { question } = action.payload;
            state.items[question.id] = question;
        },
        voteQuestion(state, action){
            const { qid, answer, userId } = action.payload;
            state.items[qid][answer].votes.push(userId);
        }
    }
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice.reducer;