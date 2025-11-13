import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";

export default function RoleBasedRoute({ allow = [], children }) {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" replace />;

    const role = user.role;

    if (!allow.includes(role)) {
        return <Navigate to="/" replace />
    }

    return children;
}