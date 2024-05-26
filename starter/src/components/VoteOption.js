import { useSelector, useDispatch } from "react-redux";
import { voteQuestion } from "../actions/questionsActions";
import styles from "../css/VoteOption.module.css"

const VoteOption = ({ id, questionId, title, votes, isQuestionVoted, totalVotes }) => {
    const loggedInUserId = useSelector(state => state.auth.userId);
    const users = useSelector(state => state.users.items);

    const dispatch = useDispatch();

    const votedOption = isQuestionVoted
        && Object.keys(users[loggedInUserId].answers).includes(questionId)
        && users[loggedInUserId].answers[questionId];

    const handleVote = () => {
        dispatch(
            voteQuestion({
                questionId,
                voteOption: id
            })
        );
    };

    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>
                <p>{title}</p>
            </div>
            <div className={styles["action"]}>
                {
                    !isQuestionVoted ? (
                        <button className={styles["vote"]} onClick={handleVote}>Click</button>
                    ) : (
                        <div className={votedOption === id ? styles["vote-info-selected"] : styles["vote-info"]}>
                            <p>{votes.length} voted ({votes.length / totalVotes * 100}%)</p>
                        </div>
                    )
                }
            </div>
        </div> 
    )
}

export default VoteOption;