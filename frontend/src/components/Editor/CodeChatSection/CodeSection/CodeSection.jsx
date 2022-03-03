import React, { Component } from "react";
import AceEditor from "react-ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools";
// import styles from "./CodeSection.module.css";
class Codesection extends Component {
    shouldChange = true;

    state = {
        socket: this.props.socket,
        editor: React.createRef(),
        random: 0,
    };

    componentDidMount = () => {
        const { socket } = this.state;
        socket.on("change", (change) => {
            const editor = this.state.editor.current.editor;
            this.shouldChange = false;
            if (change.action === "insert") {
                let text = "";
                change.lines.forEach((line, index) => {
                    text += line;
                    if (index !== change.lines.length - 1) text += "\n";
                });
                editor.session.insert(
                    { row: change.start.row, column: change.start.column },
                    text
                );
            } else if (change.action === "remove") {
                editor.session.remove({
                    start: change.start,
                    end: change.end,
                });
            }
            this.shouldChange = true;
        });
    };

    handleChange = (data, change) => {
        if (this.shouldChange) this.state.socket.emit("change", change);
        console.log(change);
    };

    render() {
        return (
            <AceEditor
                // className={styles.editor}
                ref={this.state.editor}
                placeholder="// Write your code here"
                onChange={this.handleChange}
                mode={"html"}
                fontSize={25}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showPrintMargin: false,
                }}
                theme={"clouds_midnight"}
                width="100%"
                height="100vh"
            />
        );
    }
}

export default Codesection;
