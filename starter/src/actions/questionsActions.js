import { questionsActions } from "../slices/questionsSlice";
import { usersActions } from "../slices/usersSlice";
import * as apis from '../utils/api';

export const createQuestion = ({ optionOne, optionTwo }) => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const data = await apis.saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: auth.userId
        });

        dispatch(
            questionsActions.addQuestion({
                question: data
            })
        );

        dispatch(
            usersActions.addQuestionToUser({
                userId: auth.userId,
                questionId: data.id
            })
        );
    }
};

export const voteQuestion = ({ questionId, voteOption }) => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const data = await apis.saveQuestionAnswer({
            authedUser: auth.userId,
            qid: questionId,
            answer: voteOption
        });

        dispatch(
            questionsActions.voteQuestion({
                qid: questionId,
                answer: voteOption,
                userId: auth.userId
            })
        );

        dispatch(
            usersActions.addVoteToUser({
                userId: auth.userId,
                questionId: questionId,
                answer: voteOption
            })
        );
    }
};