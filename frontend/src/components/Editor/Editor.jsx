import React from "react";
import MenuBar from "./MenuBar/MenuBar";
import CodeSection from "./CodeSection/CodeSection";

const Editor = () => {
    return (
        <React.Fragment>
            <MenuBar />
            <CodeSection />
        </React.Fragment>
    );
};

export default Editor;
