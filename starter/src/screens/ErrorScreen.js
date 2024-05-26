import { useNavigate } from "react-router-dom";
import styles from "../css/ErrorScreen.module.css";

const ErrorScreen = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate("/");
    };
    
    return (
        <div className={styles["container"]}>
            <h3>This question does not exist</h3>
            <button className={styles["confirm"]} onClick={handleConfirm}>Back to Home</button>
        </div>
    )
}

export default ErrorScreen;