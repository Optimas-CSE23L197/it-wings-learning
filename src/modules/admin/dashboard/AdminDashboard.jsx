import React, { useState } from "react";
import {
    BookOpen,
    Users,
    FileBarChart,
    Menu,
    UserCheck,
    Settings,
    LogOut
} from "lucide-react";

import ManageCourses from "../manage-course/ManageCourses";
import ManageInstructors from "../manage-instructor/ManageInstructors";
import SettingsSection from "../../shared/setting/SettingsSection";
import DashboardTopBar from "../../shared/DashboardTopBar/DashboardTopBar";

const adminUser = {
    name: "Admin User",
    email: "admin@academy.com",
    role: "admin",
    image: "/assets/images/profile.jpg"
};

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--blueLight)] flex">

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed lg:static top-0 left-0
                    h-screen w-64 
                    bg-white shadow-xl
                    p-6 flex flex-col
                    z-40
                    transform transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                {/* TITLE */}
                <h2
                    className="text-2xl font-bold mb-8 tracking-wide"
                    style={{ color: "var(--blueDark)" }}
                >
                    Admin Panel
                </h2>

                {/* NAV */}
                <nav className="flex flex-col gap-2 text-gray-700">

                    {/* Overview */}
                    <button
                        className={`admin-nav-btn ${activeTab === "overview" && "active"}`}
                        onClick={() => {
                            setActiveTab("overview");
                            setSidebarOpen(false);
                        }}
                    >
                        <FileBarChart size={20} /> Overview
                    </button>

                    {/* Courses */}
                    <button
                        className={`admin-nav-btn ${activeTab === "courses" && "active"}`}
                        onClick={() => {
                            setActiveTab("courses");
                            setSidebarOpen(false);
                        }}
                    >
                        <BookOpen size={20} /> Manage Courses
                    </button>

                    {/* Instructors */}
                    <button
                        className={`admin-nav-btn ${activeTab === "instructors" && "active"}`}
                        onClick={() => {
                            setActiveTab("instructors");
                            setSidebarOpen(false);
                        }}
                    >
                        <UserCheck size={20} /> Instructors
                    </button>

                    {/* Students */}
                    <button
                        className={`admin-nav-btn ${activeTab === "students" && "active"}`}
                        onClick={() => {
                            setActiveTab("students");
                            setSidebarOpen(false);
                        }}
                    >
                        <Users size={20} /> Students
                    </button>

                    {/* Settings */}
                    <button
                        className={`admin-nav-btn ${activeTab === "settings" && "active"}`}
                        onClick={() => {
                            setActiveTab("settings");
                            setSidebarOpen(false);
                        }}
                    >
                        <Settings size={20} /> Settings
                    </button>

                    {/* Logout */}
                    <button
                        className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-100 text-red-500 mt-6"
                        onClick={() => alert("Logout logic here")}
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            {/* MOBILE MENU */}
            <button
                className="lg:hidden absolute top-5 left-5 p-2 bg-white shadow rounded-lg z-50"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <Menu size={22} />
            </button>

            {/* MAIN CONTENT */}
            <main className="flex-1 h-screen overflow-y-auto">

                <DashboardTopBar
                    user={adminUser}
                    onMobileMenu={() => setSidebarOpen(!sidebarOpen)}
                />

                {/* PAGE CONTENT */}
                <div className="p-6 lg:px-5 pt-10">

                    {/* --- OVERVIEW --- */}
                    {activeTab === "overview" && (
                        <div>
                            <h1 className="text-2xl font-bold mb-6 text-[var(--blueDark)]">
                                Overview
                            </h1>
                            <p className="text-gray-600">Stats, activity, and reports...</p>
                        </div>
                    )}

                    {/* --- MANAGE COURSES --- */}
                    {activeTab === "courses" && <ManageCourses />}

                    {/* --- MANAGE INSTRUCTORS --- */}
                    {activeTab === "instructors" && <ManageInstructors />}

                    {/* --- STUDENTS --- */}
                    {activeTab === "students" && (
                        <div>
                            <h1 className="text-2xl font-bold mb-6 text-[var(--blueDark)]">
                                Manage Students
                            </h1>
                            <p className="text-gray-600">Student module coming soon...</p>
                        </div>
                    )}

                    {/* --- SETTINGS --- */}
                    {activeTab === "settings" && (
                        <SettingsSection user={adminUser} />
                    )}

                </div>
            </main>

        </div>
    );
}

export default AdminDashboard;
