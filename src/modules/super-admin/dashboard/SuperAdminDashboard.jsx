import React, { useState } from "react";
import {
    Users, ShieldCheck, Settings, BarChart2, Menu, Layers, Globe
} from "lucide-react";

function SuperAdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-[var(--blueLight)] flex">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white shadow-xl hidden lg:flex flex-col p-6">
                <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--blueDark)" }}>
                    Super Admin
                </h2>

                <nav className="space-y-4 text-gray-700">
                    <button className={`nav-btn ${activeTab === "overview" && "active"}`}
                        onClick={() => setActiveTab("overview")}
                    >
                        <BarChart2 size={20} /> Platform Overview
                    </button>

                    <button className={`nav-btn ${activeTab === "users" && "active"}`}
                        onClick={() => setActiveTab("users")}
                    >
                        <Users size={20} /> Manage Users
                    </button>

                    <button className={`nav-btn ${activeTab === "categories" && "active"}`}
                        onClick={() => setActiveTab("categories")}
                    >
                        <Layers size={20} /> Categories
                    </button>

                    <button className={`nav-btn ${activeTab === "settings" && "active"}`}
                        onClick={() => setActiveTab("settings")}
                    >
                        <Settings size={20} /> System Settings
                    </button>

                    <button className={`nav-btn ${activeTab === "website" && "active"}`}
                        onClick={() => setActiveTab("website")}
                    >
                        <Globe size={20} /> Website Controls
                    </button>
                </nav>
            </aside>

            {/* MOBILE MENU */}
            <div className="lg:hidden absolute top-5 left-5">
                <button className="p-2 bg-white shadow rounded-lg">
                    <Menu size={22} />
                </button>
            </div>

            {/* CONTENT AREA */}
            <main className="flex-1 p-6 lg:p-10">
                <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--blueDark)" }}>
                    Super Admin Dashboard
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Cards */}
                    <div className="card-box">
                        <Users size={26} />
                        <h3>Total Users</h3>
                        <p>12,340</p>
                    </div>

                    <div className="card-box">
                        <ShieldCheck size={26} />
                        <h3>Verified Instructors</h3>
                        <p>112</p>
                    </div>

                    <div className="card-box">
                        <Layers size={26} />
                        <h3>Total Courses</h3>
                        <p>850</p>
                    </div>

                    <div className="card-box">
                        <BarChart2 size={26} />
                        <h3>Platform Growth</h3>
                        <p>+23%</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SuperAdminDashboard;
