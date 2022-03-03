import React from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className=".App">
            <Header />
            <Editor />
        </div>
    );
}

export default App;
