import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles["header-container"]}`}>
                <div className={styles.logo}>CodeShare</div>
                <nav>
                    <ul className={styles["navbar-list"]}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
