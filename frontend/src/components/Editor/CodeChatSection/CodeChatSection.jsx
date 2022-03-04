import React, { Component } from "react";
import styles from "./CodeChatSection.module.css";
import CodeSection from "./CodeSection/CodeSection";
import Chat from "./Chat/Chat";
import io from "socket.io-client";

class Codechatsection extends Component {
    socket = this.props.socket;

    render() {
        return (
            <div className={styles["code-chat"]}>
                <CodeSection
                    socket={this.socket}
                    theme={this.props.theme}
                    lang={this.props.lang}
                />
                <Chat socket={this.socket} />
            </div>
        );
    }
}

export default Codechatsection;
