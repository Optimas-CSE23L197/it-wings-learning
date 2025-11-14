import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
// import LoginPage from "../pages/login/login";
// import HomePage from "../pages/Home";
// import StudentDashboard from "../pages/student/Dashboard";

// pages
import Home from "../pages/landing/Home";
import CourseContent from "../pages/landing/CourseContent";

export default function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            {/* <Route path="/login" element={<LoginPage />} /> */}

            {/* non-protected example */}
            <Route path="/" element={<Home />} />
            {/* Course detail page */}
            <Route path="/course" element={<CourseContent />} />

            {/* protected routes */}
            <Route
                path="/student"
                element={
                    <ProtectedRoutes>
                        <RoleBasedRoute allow={["student"]}>
                            {/* <StudentDashboard /> */}
                        </RoleBasedRoute>
                    </ProtectedRoutes>
                }
            />
        </Routes>
    );
}
