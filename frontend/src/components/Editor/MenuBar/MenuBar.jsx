import React from "react";
import styles from "./MenuBar.module.css";

const Menubar = () => {
    return (
        <div className={styles.menubar}>
            <div className={`container ${styles["menubar-container"]}`}>
                <div>
                <label htmlFor="languages" className="thick-font">Language: </label>
                <select name="languages" id="languages" className={`btn ${styles["language-selection"]}`}>
                    <option value="">Html</option>
                    <option value="">Javascript</option>
                    <option value="">C</option>
                    <option value="">Python</option>
                </select>
                </div>
                <div>
                <label htmlFor="themes" className="thick-font">Theme: </label>
                <select name="themes" id="themes" className={`btn ${styles["theme-selection"]}`}>
                    <option value="">clouds_midnight</option>
                    <option value="">Solarized_dark</option>
                    <option value="">Chrome</option>
                    <option value="">Monokai</option>
                    <option value="">Solarized_light</option>
                </select>
                </div>
                <div className="btn">Copy</div>
                <div className="btn">Share Code</div>
            </div>
        </div>
    );
};

export default Menubar;
