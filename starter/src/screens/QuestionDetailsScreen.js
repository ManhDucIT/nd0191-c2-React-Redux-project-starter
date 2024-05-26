import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VoteOption from "../components/VoteOption";
import { isQuestionAnswered } from "../utils/helpers";
import styles from "../css/QuestionDetailsScreen.module.css"

const QuestionDetailsScreen = () => {
    const { question_id: questionId } = useParams();

    const questions = useSelector(state => state.questions.items);

    const loggedInUserId = useSelector(state => state.auth.userId);
    
    const users = useSelector(state => state.users.items);

    const question = questions[questionId];
    const user = users[question.author];
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

    const isAnswered = isQuestionAnswered(question, loggedInUserId);
    
    return (
        <div className={styles["container"]}>
            <img className={styles["author-avatar"]} src={require(`../icons/${user.avatarURL}`)} alt="author avatar" />
            <p className={styles["author-name"]}>{user.name}</p>
            <h3>Would You Rather</h3>
            <div className={styles["vote-options"]}>
                <VoteOption
                    id="optionOne"
                    questionId={question.id}
                    title={question.optionOne.text}
                    votes={question.optionOne.votes}
                    isQuestionVoted={isAnswered}
                    totalVotes={totalVotes} />
                <VoteOption
                    id="optionTwo"
                    questionId={question.id}
                    title={question.optionTwo.text}
                    votes={question.optionTwo.votes}
                    isQuestionVoted={isAnswered}
                    totalVotes={totalVotes} />
            </div>
        </div>
    )
}

export default QuestionDetailsScreen;