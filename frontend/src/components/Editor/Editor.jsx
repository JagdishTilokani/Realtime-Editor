import React, { Component } from "react";
import Menubar from "./MenuBar/MenuBar";
import CodeChatSection from "./CodeChatSection/CodeChatSection";
import styles from "./Editor.module.css";
import io from "socket.io-client";

class Editor extends Component {
    socket = io.connect("/");
    state = {
        lang: "html",
        theme: "clouds_midnight",
    };

    changeTheme = (theme) => {
        this.setState({ theme });
    };

    changeLang = (lang) => {
        this.setState({ lang });
    };
    render() {
        return (
            <div className={styles["Editor"]}>
                <Menubar
                    socket={this.socket}
                    changeTheme={this.changeTheme}
                    changeLang={this.changeLang}
                />
                <CodeChatSection
                    socket={this.socket}
                    theme={this.state.theme}
                    lang={this.state.lang}
                />
            </div>
        );
    }
}

export default Editor;
