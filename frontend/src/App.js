import React from "react";
import "./App.css";
import Editor from "./components/Editor/CodeSection/CodeSection";
import Header from "./components/Header/Header";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Editor />
        </React.Fragment>
    );
}

export default App;
