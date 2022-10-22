import axios from "axios";
import {
    AUTH_ERROR,
    LOGIN,
    LOGOUT,
    REGISTER,
} from "../typeActions/authActionsTypes";

export const register = (user) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:3000/users", user);
        dispatch({
            type: REGISTER,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error,
        });
    }
};

export const login = (userData, navigate) => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:3000/users/");
        const filtredUser = res.data.find(
            (el) =>
                el.email === userData.email && el.password === userData.password
        );
        if (filtredUser) {
            dispatch({
                type: LOGIN,
                payload: {
                    isAuthenticated: true,
                    user: filtredUser,
                    succesMessage: "Success",
                    errors: false,
                },
            });
            localStorage.setItem("id", filtredUser.id);
            navigate("/profile");
        } else {
            dispatch({
                type: AUTH_ERROR,
                payload: {
                    isAuthenticated: false,
                    user: {},
                    succesMessage: false,
                    errors: "Invalid email or password",
                },
            });
        }
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error,
        });
    }
};

export const logout = (navigate) => (dispatch) => {
    sessionStorage.removeItem("id");
    navigate("/");
    dispatch({
        type: LOGOUT,
    });
};

export const currentUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        dispatch({
            type: LOGIN,
            payload: {
                isAuthenticated: true,
                user: res.data,
                succesMessage: "Success",
                errors: false,
            },
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error,
        });
    }
};