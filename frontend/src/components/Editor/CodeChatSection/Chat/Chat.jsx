import React, { Component } from "react";
import styles from "./Chat.module.css";

class Chat extends Component {
    state = {
        messages: [],
        typed: "",
    };

    render() {
        return (
            <div className={styles.chat}>
                <div className={styles.messages}>asdfad</div>
                <div className={styles["send-message"]}>
                    <div className={styles["type-box"]}></div>
                    <div className={`material-icons ${styles["send-btn"]}`}>
                        <span>&#xe163;</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
