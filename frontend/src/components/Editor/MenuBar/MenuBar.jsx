import React from "react";
// import io from "socket.io-client";
import styles from "./MenuBar.module.css";

const Menubar = (props) => {
    let started = false;
    let mediaRecorder;
    let chunks = [];

    props.socket.on("audio", (arrayBuffer) => {
        var blob = new Blob([arrayBuffer], { type: "audio/ogg; codecs=opus" });
        var audio = document.createElement("audio");
        audio.src = window.URL.createObjectURL(blob);
        audio.play();
    });

    navigator.mediaDevices.getUserMedia({ audio: true }).then((mediaStream) => {
        mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.onstart = function (e) {
            chunks = [];
        };
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        };
        mediaRecorder.onstop = function (e) {
            var blob = new Blob(chunks, {
                type: "audio/ogg; codecs=opus",
            });
            props.socket.emit("audio", blob);
        };
    });

    const start_stop = () => {
        if (!started) {
            console.log("started");
            mediaRecorder.start();
            started = true;
        } else {
            console.log("stopped");
            mediaRecorder.stop();
            started = false;
        }
    };

    return (
        <div className={styles.menubar}>
            <div className={`container ${styles["menubar-container"]}`}>
                <div>
                    <label htmlFor="languages" className="thick-font">
                        Language:{" "}
                    </label>
                    <select
                        name="languages"
                        id="languages"
                        className={`btn ${styles["language-selection"]}`}
                    >
                        <option value="">Html</option>
                        <option value="">Javascript</option>
                        <option value="">C</option>
                        <option value="">Python</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="themes" className="thick-font">
                        Theme:{" "}
                    </label>
                    <select
                        name="themes"
                        id="themes"
                        className={`btn ${styles["theme-selection"]}`}
                    >
                        <option value="">clouds_midnight</option>
                        <option value="">Solarized_dark</option>
                        <option value="">Chrome</option>
                        <option value="">Monokai</option>
                        <option value="">Solarized_light</option>
                    </select>
                </div>
                <div className="btn">Copy</div>
                <div className="btn">Share Code</div>
                <div className="btn material-icons" onClick={start_stop}>
                    volume_up
                </div>
            </div>
        </div>
    );
};

export default Menubar;
