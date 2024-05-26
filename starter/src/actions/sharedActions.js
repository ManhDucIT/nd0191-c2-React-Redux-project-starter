import { usersActions } from "../slices/usersSlice";
import { questionsActions } from "../slices/questionsSlice";
import * as apis from '../utils/api';

export const handleInitialData = () => {
    return async (dispatch) => {
        const data = await apis.getInitialData();

        dispatch(
            usersActions.receiveUsers({
                users: data.users
            })
        );

        dispatch(
            questionsActions.receiveQuestions({
                questions: data.questions
            })
        );
    }
};