import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import styles from '../css/MainScreen.module.css';

const MainScreen = () => {
    return (
        <>
            <NavigationBar />
            <main className={styles["container"]}>
                <Outlet />
            </main>
        </>
    )
}

export default MainScreen;