import { redirect } from 'react-router-dom';
import store from '../store/index';

export const CheckQuestionIdLoader = ({ params }) => {
    const isAuthenticated = store.getState().auth.isAuthenticated;

    if (isAuthenticated) {
        const { question_id: questionId } = params;
        const questions = store.getState().questions.items;

        if (!Object.keys(questions).includes(questionId)) {
            return redirect("/error");
        }
    }

    return null;
}