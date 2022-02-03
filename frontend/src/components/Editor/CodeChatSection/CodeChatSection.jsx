import React, { Component } from "react";
import styles from "./CodeChatSection.module.css";
import CodeSection from "./CodeSection/CodeSection";
import Chat from "./Chat/Chat";

class Codechatsection extends Component {
    render() {
        return (
            <div className={styles["code-chat"]}>
                <CodeSection />
                <Chat />
            </div>
        );
    }
}

export default Codechatsection;
