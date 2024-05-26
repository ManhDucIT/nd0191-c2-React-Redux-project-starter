import { useSelector } from "react-redux";
import { getQuestionsCountByUsers } from "../utils/helpers";
import styles from "../css/Leaderboard.module.css";

const Leaderboard = () => {
    const users = useSelector(state => state.users.items);
    const questions = useSelector(state => state.questions.items);

    const questionsCountByUsers = getQuestionsCountByUsers(users, questions);

    return (
        <div className={styles["container"]}>
            <table className={styles["leaderboard-table"]}>
                <thead>
                    <tr>
                    <th>User</th>
                    <th>Asked Questions</th>
                    <th>Answered Questions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    questionsCountByUsers.map((item) => (
                        <tr key={item.user.id}>
                            <td>
                                <div className={styles["user-info"]}>
                                    <img className={styles["user-avatar"]} src={require(`../icons/${item.user.avatarURL}`)} alt="user avatar" />
                                    <p>
                                        <span className={styles["user-name"]}>{item.user.name}</span>
                                        <span className={styles["user-id"]}>{item.user.id}</span>
                                    </p>
                                </div>
                            </td>
                            <td>{item.askedQuestionsCount}</td>
                            <td>{item.answeredQuestionsCount}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;