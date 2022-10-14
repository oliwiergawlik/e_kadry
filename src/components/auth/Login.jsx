import React, {useContext} from "react";
import {useFormik} from "formik";
import {useNavigate, useLocation} from "react-router-dom";

import axios from "../../api/axios";

import AuthContext from "../../context/AuthProvider";

import "./Login.scss";

const LOGIN_URL = "/login";

export default function Login() {
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post(LOGIN_URL, JSON.stringify(values));

                const accessToken = response?.data?.accessToken;

                setAuth({accessToken});
                navigate(from, {replace: true});
            } catch (error) {
                if (!error?.response) {
                    console.log("No server response");
                } else if (error.response?.status === 400) {
                    console.log("Missing user name or password");
                } else if (error.response?.status === 401) {
                    console.log("Unauthorized");
                } else {
                    console.log("Login failed");
                }
            }
        },
    });

    return (
        <form className="login" onSubmit={formik.handleSubmit}>
            <h1>Zaloguj się</h1>
            <div className="login__box">
                <label className="login__lbl" htmlFor="email">
                    Email:
                </label>
                <input
                    data-cy="email"
                    className="login__input"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className="login__box">
                <label className="login__lbl" htmlFor="password">
                    Hasło:
                </label>
                <input
                    data-cy="password"
                    className="login__input"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>

            <div>
                <p>Nie masz konta?</p>
                <p>Jak uzyskać dostęp?</p>
            </div>

            <button data-cy="submit" type="submit">
                Zaloguj
            </button>
        </form>
    );
}
