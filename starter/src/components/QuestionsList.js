import { useSelector } from "react-redux";
import Question from "./Question"
import styles from "../css/QuestionsList.module.css"

const QuestionsList = ({ questions }) => {
    const users = useSelector(state => state.users.items);

    return (
        <div className={styles["container"]}>
            <ol className={styles["questions-grid"]}>
                {
                    questions.map(question => 
                        <li key={question.id}>
                            <Question
                                id={question.id}
                                authorName={question.author}
                                authorAvatar={users[question.author].avatarURL}
                                timestamp={question.timestamp} />
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

export default QuestionsList;