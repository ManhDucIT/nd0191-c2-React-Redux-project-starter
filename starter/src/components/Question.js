import { useNavigate } from "react-router-dom";
import styles from "../css/Question.module.css"

const Question = ({ id, authorName, authorAvatar, timestamp }) => {
    const navigate = useNavigate();

    const showQuestionDetails = () => {
        navigate(`/questions/${id}`);
    }

    return (
        <div className={styles["question"]}>
            <img className={styles["author-avatar"]} src={require(`../icons/${authorAvatar}`)} alt="author avatar" />
            <div className={styles["author-name"]}>{authorName}</div>
            <div className={styles["timestamp"]}>{timestamp}</div>
            <button className={styles["view-details"]} onClick={showQuestionDetails}>View Details</button>
        </div>
    )
}

export default Question;