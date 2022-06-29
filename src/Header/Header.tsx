import {NavLink} from "react-router-dom";

import styles from './Header.module.scss';
import {useAuthContext} from "../contexts/UserContext";
import clsx from "clsx";

const Header = () => {
    const {currentUser, logout} = useAuthContext();

    return (
        <header className={styles.header}>
            <nav className={styles.navigate}>
                <NavLink to="/" className={({isActive}: any) => clsx([styles.link, isActive && styles.activeLink])}>
                    <p className={styles.linkText}>Main</p>
                </NavLink>

                <NavLink to="login" className={({isActive}: any) => clsx([styles.link, isActive && styles.activeLink])}>
                    <p className={styles.linkText}>Login</p>
                </NavLink>

                <NavLink to="component-a" className={({isActive}: any) => clsx([styles.link, isActive && styles.activeLink])}>
                    <p className={styles.linkText}>ComponentA</p>
                </NavLink>

                <NavLink to="component-a/nested" className={({isActive}: any) => clsx([styles.link, isActive && styles.activeLink])}>
                    <p className={styles.linkText}>Nested</p>
                </NavLink>

                {currentUser?.username && (
                    <>
                        <p className={styles.user}>User: {currentUser?.username}</p>

                        <button className={styles.logoutButton} onClick={logout}>Выйти</button>
                    </>
                )}
            </nav>
        </header>
    )
};

export default Header