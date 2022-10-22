import React from "react";

export default function PrivateRoutes({ children }) {
    const token = localStorage.getItem("id");
    return token ? children : <div>Not Authorized</div>;
}