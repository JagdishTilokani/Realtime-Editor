import React from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
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
