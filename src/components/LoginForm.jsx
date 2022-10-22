import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/actions/authActions";

export default function LoginForm() {
    const [user, setUser] = useState({
        password: "",
        email: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector((state) => state.authReducer.errors);

    return (
        <div>
            <input name="email" onChange={handleChange} />
            <input name="password" onChange={handleChange} />
            {errors}
            <button
                onClick={() => {
                    dispatch(login(user, navigate, dispatch));
                }}
            >
                Login
            </button>
        </div>
    );
}