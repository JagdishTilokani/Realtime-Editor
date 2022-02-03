import React from "react";
import Menubar from "./MenuBar/MenuBar";
import CodeChatSection from "./CodeChatSection/CodeChatSection";

const Editor = () => {
    return (
        <React.Fragment>
            <Menubar />
            <CodeChatSection />
        </React.Fragment>
    );
};

export default Editor;
