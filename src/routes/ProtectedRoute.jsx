import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoutes({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth/login" replace />
    }

    return children;
}