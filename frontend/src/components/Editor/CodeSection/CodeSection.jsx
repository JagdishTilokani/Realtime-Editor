import React from "react";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/xcode";
import "brace/snippets/html";
import "brace/ext/language_tools";

function Editor() {
    const handleChange = (data, change) => {
        console.log(change);
    };

    return (
        <div>
            <AceEditor
                placeholder="// Write your code here"
                onChange={handleChange}
                mode={"html"}
                fontSize={20}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
        </div>
    );
}

export default Editor;
