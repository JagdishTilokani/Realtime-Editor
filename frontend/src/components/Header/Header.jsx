import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

let user = localStorage.getItem("user");
if (user) user = JSON.parse(user);

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles["header-container"]}`}>
                <div className={styles.logo}>CodeShare</div>
                <nav>
                    <ul className={styles["navbar-list"]}>
                        <li>
                            <Link to="/" className={styles["link"]}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={styles["link"]}>
                                ABOUT US
                            </Link>
                        </li>
                        {user ? (
                            <li>
                                <Link to={"/"} className={styles.link}>
                                    {user.userName}
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/login" className={styles["link"]}>
                                    LOGIN
                                </Link>

                                <Link to="/register" className={styles["link"]}>
                                    REGISTER
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
