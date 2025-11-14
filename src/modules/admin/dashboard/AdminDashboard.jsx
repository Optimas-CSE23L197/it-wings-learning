import React, { useState } from "react";
import {
    BookOpen, Users, FileBarChart, Settings, Menu, UserCheck
} from "lucide-react";

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-[var(--blueLight)] flex">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white shadow-xl hidden lg:flex flex-col p-6">
                <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--blueDark)" }}>
                    Admin Panel
                </h2>

                <nav className="space-y-4 text-gray-700">
                    <button className={`nav-btn ${activeTab === "overview" && "active"}`}
                        onClick={() => setActiveTab("overview")}>
                        <FileBarChart size={20} /> Overview
                    </button>

                    <button className={`nav-btn ${activeTab === "courses" && "active"}`}
                        onClick={() => setActiveTab("courses")}>
                        <BookOpen size={20} /> Manage Courses
                    </button>

                    <button className={`nav-btn ${activeTab === "instructors" && "active"}`}
                        onClick={() => setActiveTab("instructors")}>
                        <UserCheck size={20} /> Instructors
                    </button>

                    <button className={`nav-btn ${activeTab === "students" && "active"}`}
                        onClick={() => setActiveTab("students")}>
                        <Users size={20} /> Students
                    </button>

                    <button className={`nav-btn ${activeTab === "reports" && "active"}`}
                        onClick={() => setActiveTab("reports")}>
                        <FileBarChart size={20} /> Reports
                    </button>
                </nav>
            </aside>

            {/* MOBILE MENU */}
            <div className="lg:hidden absolute top-5 left-5">
                <button className="p-2 bg-white shadow rounded-lg">
                    <Menu size={22} />
                </button>
            </div>

            {/* CONTENT */}
            <main className="flex-1 p-6 lg:p-10">
                <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--blueDark)" }}>
                    Admin Dashboard
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="card-box">
                        <BookOpen size={26} />
                        <h3>Total Courses</h3>
                        <p>320</p>
                    </div>

                    <div className="card-box">
                        <UserCheck size={26} />
                        <h3>Total Instructors</h3>
                        <p>54</p>
                    </div>

                    <div className="card-box">
                        <Users size={26} />
                        <h3>Total Students</h3>
                        <p>4,120</p>
                    </div>

                    <div className="card-box">
                        <FileBarChart size={26} />
                        <h3>Monthly Report</h3>
                        <p>Updated</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
