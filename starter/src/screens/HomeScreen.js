import { useState } from 'react';
import Switch from "../components/Switch";
import QuestionsList from "../components/QuestionsList"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUnansweredQuestions, getAnsweredQuestions } from "../utils/helpers";
import styles from "../css/HomeScreen.module.css";

const HomeScreen = () => {
    const { state } = useLocation();
    const [shouldShowAnsweredQuestions, setShowAnsweredQuestions] = useState(state && state.isFromNewQuestion);

    const loggedInUserId = useSelector(state => state.auth.userId);
    const questionItems = useSelector(state => state.questions.items);
    
    const questions = questionItems && Object.values(questionItems).sort((a, b) => b.timestamp - a.timestamp);

    const unansweredQuestions = getUnansweredQuestions(questions, loggedInUserId);
    const answeredQuestions = getAnsweredQuestions(questions, loggedInUserId);

    const handleSwitchChanged = (isOn) => {
        setShowAnsweredQuestions(isOn);
    }

    return (
        <div className={styles["container"]}>
            <Switch onSwitchChanged={handleSwitchChanged} />
            {
                shouldShowAnsweredQuestions ? 
                    <QuestionsList questions={answeredQuestions} />
                    :
                    <QuestionsList questions={unansweredQuestions} />
            }
        </div>
    )
}

export default HomeScreen;