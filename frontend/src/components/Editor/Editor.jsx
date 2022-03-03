import React from "react";
import Menubar from "./MenuBar/MenuBar";
import CodeChatSection from "./CodeChatSection/CodeChatSection";
import styles from "./Editor.module.css";
import io from "socket.io-client";

const Editor = () => {
    let socket = io.connect("/");

    return (
        <div className={styles["Editor"]}>
            <Menubar socket={socket} />
            <CodeChatSection socket={socket} />
        </div>
    );
};

export default Editor;
