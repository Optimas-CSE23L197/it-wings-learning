import React, { useState } from "react";
import {
    User,
    Settings,
    LogOut,
    CreditCard,
    BookOpen,
    Menu
} from "lucide-react";

function StudentDashboard() {
    const [activeTab, setActiveTab] = useState("courses");

    return (
        <div className="min-h-screen bg-[var(--blueLight)] flex">

            {/* SIDEBAR */}
            <aside
                className="
                    w-64 bg-white shadow-xl 
                    hidden lg:flex flex-col 
                    p-6
                "
            >
                <h2
                    className="text-2xl font-bold mb-8"
                    style={{ color: "var(--blueDark)" }}
                >
                    Dashboard
                </h2>

                <nav className="space-y-4 text-gray-700">
                    <button
                        className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
                            ${activeTab === "courses" ? "bg-[var(--accent)] text-white" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveTab("courses")}
                    >
                        <BookOpen size={20} /> Purchased Courses
                    </button>

                    <button
                        className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
                            ${activeTab === "profile" ? "bg-[var(--accent)] text-white" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        <User size={20} /> Profile
                    </button>

                    <button
                        className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
                            ${activeTab === "settings" ? "bg-[var(--accent)] text-white" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveTab("settings")}
                    >
                        <Settings size={20} /> Settings
                    </button>

                    <button
                        className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
                            ${activeTab === "transactions" ? "bg-[var(--accent)] text-white" : "hover:bg-gray-100"}`}
                        onClick={() => setActiveTab("transactions")}
                    >
                        <CreditCard size={20} /> Transaction History
                    </button>

                    <button
                        className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-100 text-red-500 mt-6"
                        onClick={() => alert("Logout logic here")}
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            {/* MOBILE MENU */}
            <div className="lg:hidden absolute top-5 left-5">
                <button className="p-2 bg-white shadow rounded-lg">
                    <Menu size={24} />
                </button>
            </div>

            {/* CONTENT */}
            <main className="flex-1 p-6 lg:p-10">

                {/* Purchased Courses */}
                {activeTab === "courses" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--blueDark)" }}>
                            Purchased Courses
                        </h1>
                        <p className="text-gray-600">List all purchased courses here…</p>
                    </div>
                )}

                {/* Profile */}
                {activeTab === "profile" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--blueDark)" }}>
                            Profile
                        </h1>
                        <p className="text-gray-600">User profile details…</p>
                    </div>
                )}

                {/* Settings */}
                {activeTab === "settings" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--blueDark)" }}>
                            Settings
                        </h1>
                        <p className="text-gray-600">Update password, preferences…</p>
                    </div>
                )}

                {/* Transaction History */}
                {activeTab === "transactions" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--blueDark)" }}>
                            Transaction History
                        </h1>
                        <p className="text-gray-600">Show course purchase transactions…</p>
                    </div>
                )}
            </main>

        </div>
    );
}

export default StudentDashboard;
