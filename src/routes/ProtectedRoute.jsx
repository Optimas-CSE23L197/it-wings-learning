import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";

export default function ProtectedRoutes({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children;
}