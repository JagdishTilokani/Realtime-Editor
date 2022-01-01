import React from "react";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/xcode";
import "brace/snippets/html";
import "brace/ext/language_tools";
import "brace/theme/clouds_midnight";
// import styles from "./CodeSection.module.css";

function Codesection() {
    const handleChange = (data, change) => {
        console.log(change);
    };

    return (
        <div>
            <AceEditor
                // className={styles.editor}
                placeholder="// Write your code here"
                onChange={handleChange}
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
        </div>
    );
}

export default Codesection;
