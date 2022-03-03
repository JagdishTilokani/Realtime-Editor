import React, { Component } from "react";
import styles from "./Chat.module.css";

class Chat extends Component {
    state = {
        messages: [],
        typed: "",
        socket: this.props.socket,
        username: "user",
    };

    componentDidMount = () => {
        const { socket } = this.state;
        socket.on("message", (message) => {
            let { messages } = this.state;
            messages.push(message);
            this.setState({ messages });
        });
    };

    sendMessage = (event) => {
        event.preventDefault();
        const { socket, typed, username } = this.state;
        if (typed !== null && typed !== "") {
            socket.emit("message", {
                user: username,
                text: typed,
            });
            this.setState({ typed: "" });
        }
    };

    Typing = (event) => {
        this.setState({ typed: event.target.value });
    };

    render() {
        const { messages } = this.state;
        return (
            <div className={styles.chat}>
                <div className={styles.messages}>
                    {messages.map((msg, i) => (
                        <p className={styles["msg-container"]} key={i}>
                            <span className={styles["sender"]}>
                                {msg.user + ": "}
                            </span>
                            <span className={styles["message"]}>
                                {msg.text}
                            </span>
                        </p>
                    ))}
                </div>
                <form
                    onSubmit={this.sendMessage}
                    className={styles["send-message"]}
                >
                    <input
                        type={"textbox"}
                        placeholder="send message to everyone"
                        className={styles["type-box"]}
                        onChange={this.Typing}
                        value={this.state.typed}
                    ></input>
                    <div className={`material-icons ${styles["send-btn"]}`}>
                        <div>&#xe163;</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Chat;
