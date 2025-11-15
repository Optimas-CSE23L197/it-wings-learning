import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
// import LoginPage from "../pages/login/login";
// import HomePage from "../pages/Home";
// import StudentDashboard from "../pages/student/Dashboard";

// pages
import Home from "../pages/landing/Home";
import CourseContent from "../pages/landing/CourseContent";
import Courses from "../pages/landing/AllCourse";
import ContactPage from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/signup/Signup";

import AllArticles from "../pages/contact/AllArticles";
import StudentDashboard from "../modules/students/StudentDashboard";
import SuperAdminDashboard from "../modules/super-admin/dashboard/SuperAdminDashboard";
import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";
import InstructorDashboard from "../modules/instructor/dashboard/InstructorDashboard";

export default function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/sign-up" element={<Register />} />

            {/* non-protected example */}
            <Route path="/" element={<Home />} />
            {/* Course detail page */}
            <Route path="/all-courses" element={<Courses />} />
            <Route path="/course" element={<CourseContent />} />
            <Route path="contact-us" element={<ContactPage />} />


            <Route path="/all-articles" element={<AllArticles />} />
            <Route path="/super-admin-dashboard" element={<SuperAdminDashboard />} />

            <Route path="/instructor-dashboard" element={<InstructorDashboard />} />




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
            <Route
                path="/admin"
                element={
                    <ProtectedRoutes>
                        <RoleBasedRoute allow={["admin"]}>
                            <AdminDashboard />
                        </RoleBasedRoute>
                    </ProtectedRoutes>
                }
            />
        </Routes>
    );
}
