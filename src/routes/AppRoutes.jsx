import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
// import LoginPage from "../pages/login/login";
// import HomePage from "../pages/Home";
// import StudentDashboard from "../pages/student/Dashboard";

// pages
import Home from "../pages/landing/Home";

import AllArticles from "../pages/contact/AllArticles";

export default function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            {/* <Route path="/login" element={<LoginPage />} /> */}

            {/* non-protected example */}
            <Route path="/" element={<Home />} />
           
            
            <Route path="/all-articles" element={<AllArticles />} />
    

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
