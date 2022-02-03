import React, { Component } from "react";
import AceEditor from "react-ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools"
import io from "socket.io-client";
// import styles from "./CodeSection.module.css";
class Codesection extends Component {
    shouldChange = true;

    state = {
        socket: null,
        editor: React.createRef(),
        random: 0,
    };

    createSocket = () => {
        const socket = io.connect("/");
        socket.on("change", (change) => {
            const editor = this.state.editor.current.editor;
            this.shouldChange = false;
            if (change.action === "insert") {
                let text = "\n";
                if (change.lines.length === 1) text = change.lines[0];
                editor.session.insert({ row: change.start.row, column: change.start.column },
                    text
                );
            } else if (change.action === "remove") {
                editor.session.remove({
                    start: change.start,
                    end: change.end
                });
            }
            this.shouldChange = true;
        });

        this.setState({ socket });
    };

    componentDidMount = () => {
        this.createSocket();
    };

    handleChange = (data, change) => {
        if (this.shouldChange) this.state.socket.emit("change", change);
        console.log(change);
    };

    render() {
        return ( <
            AceEditor
            // className={styles.editor}
            ref = { this.state.editor }
            placeholder = "// Write your code here"
            onChange = { this.handleChange }
            mode = { "c_cpp" }
            fontSize = { 25 }
            setOptions = {
                {
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showPrintMargin: false,
                }
            }
            theme = { "clouds_midnight" }
            width = "100%"
            height = "100vh" /
            >
        );
    }
}

export default Codesection;