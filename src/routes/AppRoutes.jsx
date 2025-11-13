import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

export default function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />

            {/* protected routes */}
            <Route
                path="/student"
                element={
                    <ProtectedRoutes>
                        <RoleBasedRoute allow={["student"]}>
                            <StudentDashboard />
                        </RoleBasedRoute>
                    </ProtectedRoutes>
                }
            />
        </Routes>
    )
}