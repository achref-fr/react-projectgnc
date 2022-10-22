import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../JS/actions/authActions";
import "./form.css";
export default function RegisterForm() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    return (
        <div>
            <input name="username" onChange={handleChange} />
            <input name="password" onChange={handleChange} />
            <input name="email" onChange={handleChange} />
            <input name="firstName" onChange={handleChange} />
            <input name="lastName" onChange={handleChange} />
            <button
                onClick={() => {
                    dispatch(register(user, dispatch));
                }}
            >
                Register
            </button>
        </div>
    );
}