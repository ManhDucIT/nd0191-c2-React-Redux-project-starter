import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../slices/authSlice';
import styles from '../css/NavigationBar.module.css';

const NavigationBar = () => {
    const users = useSelector(state => state.users.items);
    const loggedInUserId = useSelector(state => state.auth.userId);
    
    const loggedInUser = users[loggedInUserId];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate("/login");
    }

    return (
        <>
            <div className={styles["container"]}>
                <header className={styles["navigation"]}>
                    <nav>
                        <ul className={styles["list"]}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? styles["active"] : undefined} data-testid="link-home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="leaderboard" className={({ isActive }) => isActive ? styles["active"] : undefined} data-testid="link-leaderboard">Leaderboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="add" className={({ isActive }) => isActive ? styles["active"] : undefined} data-testid="link-add">New</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className={styles["user-info"]}>
                    <img className={styles["user-avatar"]} src={require(`../icons/${loggedInUser.avatarURL}`)} alt="user avatar" />
                    <p className={styles["user-name"]}>{loggedInUser.name}</p>
                </div>
                <button className={styles["logout"]} onClick={handleLogout}>Logout</button>
            </div>
            <hr className={styles.hr}/>
        </>
    );
}

export default NavigationBar;