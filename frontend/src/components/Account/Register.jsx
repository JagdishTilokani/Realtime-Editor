import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Account.module.css";

class Register extends Component {
    state = {
        fName: "",
        uName: "",
        lName: "",
        email: "",
        password: "",
        password2: "",
        contactNo: "",
        errors: {},
        controller: new AbortController(),
    };

    handleChange = (event, propperty) => {
        this.setState({ [propperty]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.password2) {
            let { errors } = this.state;
            errors.password2 = "password and confirm password did not match";
            this.setState({ errors });
            return;
        }
        fetch("/api/user/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fName: this.state.fName,
                lName: this.state.lName,
                uName: this.state.uName,
                email: this.state.email,
                password: this.state.password,
                contactNo: this.state.contactNo,
            }),
            signal: this.state.controller.signal,
        })
            .then((res) => {
                if (res.status === 400) {
                    res.json().then((errors) => {
                        this.setState({ errors });
                    });
                } else this.props.history.push("/");
            })
            .catch(console.log);
    };

    componentWillUnmount = () => {
        this.state.controller.abort();
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className={styles.account}>
                    <form
                        className={styles["account-form"]}
                        onSubmit={this.handleSubmit}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "fName")
                                }
                            />
                            <p className={styles["error"]}>
                                {errors.firstName}
                            </p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "lName")
                                }
                            />
                            <p className={styles["error"]}>{errors.lastName}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "email")
                                }
                            />
                            <p className={styles["error"]}>{errors.email}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "contactNo")
                                }
                            />
                            <p className="error">{errors.contactNo}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="user Name"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "uName")
                                }
                            />
                            <p className={styles["error"]}>{errors.userName}</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "password")
                                }
                            />
                            <p className={styles["error"]}>{errors.password}</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className={styles["input"]}
                                onChange={(event) =>
                                    this.handleChange(event, "password2")
                                }
                            />
                            <p className={styles["error"]}>
                                {errors.password2}
                            </p>
                        </div>
                        <button className={`btn ${styles.submit}`}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
