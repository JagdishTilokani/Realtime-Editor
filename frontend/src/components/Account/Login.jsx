import React, { Component } from "react";
import { withRouter } from "react-router";
import styles from "./Account.module.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
            controller: new AbortController(),
        };
    }

    handleChange = (event, propperty) => {
        this.setState({ [propperty]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email === "" || this.state.password === "") {
            let { errors } = this.state;
            if (this.state.email === "") {
                errors.email = "please enter email";
            }
            if (this.state.password === "") {
                errors.password = "please enter password";
            }
            this.setState({ errors });
            return;
        }
        fetch("/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
            signal: this.state.controller.signal,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data === null) {
                    let { errors } = this.state;
                    errors.noUser = "invalid username or password";
                    errors.email = "";
                    errors.password = "";
                    this.setState({ errors });
                } else {
                    localStorage.setItem("user", JSON.stringify(data));
                    this.props.history.push("/");
                }
            })
            .catch(console.log);
    };

    componentWillUnmount = () => {
        this.state.controller.abort();
    };

    render() {
        const { errors } = this.state;
        return (
            <div className={styles.account}>
                <form className={styles["account-form"]} onSubmit={this.handleSubmit}>
                    <p className={styles["error"]}>{errors.noUser}</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            className={styles.input}
                            onChange={(event) =>
                                this.handleChange(event, "email")
                            }
                        />
                        <p className="error">{errors.email}</p>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            onChange={(event) =>
                                this.handleChange(event, "password")
                            }
                        />
                        <p className={styles["error"]}>{errors.password}</p>
                    </div>
                    <button className={`btn ${styles.submit}`}>Login</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
