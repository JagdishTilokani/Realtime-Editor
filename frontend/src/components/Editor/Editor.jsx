import React from "react";
import Menubar from "./MenuBar/MenuBar";
import Codesection from "./CodeSection/CodeSection";

const Editor = () => {
    return (
        <React.Fragment>
            <Menubar />
            <Codesection />
        </React.Fragment>
    );
};

export default Editor;
