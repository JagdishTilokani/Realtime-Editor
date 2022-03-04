import React, { Component } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Account/Login";
import Register from "./components/Account/Register";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Editor />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
