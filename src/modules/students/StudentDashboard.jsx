import React, { useState } from "react";
import {
    User,
    Settings,
    LogOut,
    CreditCard,
    BookOpen,
    Menu
} from "lucide-react";

import PurchasedCourses from "./purchased_course/PurchasedCourses";
import TransactionHistory from "./transaction_history/TransactionHistory";
import GlobalProfile from "../shared/profile/GlobalProfile";
import SettingsSection from "../shared/setting/SettingsSection";
import DashboardTopBar from "../shared/DashboardTopBar/DashboardTopBar";

function StudentDashboard() {
    const [activeTab, setActiveTab] = useState("courses");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--blueLight)] flex">

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed lg:static top-0 left-0 h-screen
                    w-64 bg-white shadow-xl p-6 z-40 
                    transform transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                <h2
                    className="text-2xl font-bold mb-8"
                    style={{ color: "var(--blueDark)" }}
                >
                    Wings Academy
                </h2>

                <nav className="space-y-4 text-gray-700">
                    {/* Purchased Courses */}
                    <button
                        className={`sidebar-btn ${activeTab === "courses" && "active-tab"}`}
                        onClick={() => {
                            setActiveTab("courses");
                            setSidebarOpen(false);
                        }}
                    >
                        <BookOpen size={20} /> Purchased Courses
                    </button>

                    {/* Profile */}
                    <button
                        className={`sidebar-btn ${activeTab === "profile" && "active-tab"}`}
                        onClick={() => {
                            setActiveTab("profile");
                            setSidebarOpen(false);
                        }}
                    >
                        <User size={20} /> Profile
                    </button>

                    {/* Settings */}
                    <button
                        className={`sidebar-btn ${activeTab === "settings" && "active-tab"}`}
                        onClick={() => {
                            setActiveTab("settings");
                            setSidebarOpen(false);
                        }}
                    >
                        <Settings size={20} /> Settings
                    </button>

                    {/* Transactions */}
                    <button
                        className={`sidebar-btn ${activeTab === "transactions" && "active-tab"}`}
                        onClick={() => {
                            setActiveTab("transactions");
                            setSidebarOpen(false);
                        }}
                    >
                        <CreditCard size={20} /> Transaction History
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

            {/* MOBILE MENU BUTTON */}
            <button
                className="lg:hidden absolute top-5 left-5 p-2 bg-white shadow rounded-lg z-50"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <Menu size={24} />
            </button>

            {/* MAIN CONTENT */}
            <main className="flex-1 h-screen overflow-y-auto">

                <DashboardTopBar
                    user={userData}
                    onMobileMenu={() => setSidebarOpen(!sidebarOpen)}
                />

                <div className="p-6 lg:p-10">
                    {activeTab === "courses" && (
                        <PurchasedCourses courses={purchasedCourses} />
                    )}

                    {activeTab === "profile" && (
                        <GlobalProfile user={userData} />
                    )}

                    {activeTab === "settings" && (
                        <SettingsSection user={userData} />
                    )}

                    {activeTab === "transactions" && (
                        <TransactionHistory transactions={transactions} />
                    )}
                </div>

            </main>
        </div>
    );
}

export default StudentDashboard;

/* SAMPLE DATA */
const userData = {
    name: "Amit Sharma",
    email: "amit@example.com",
    phone: "+91 9876543210",
    role: "student",
    image: "/assets/images/profile.jpg",
    joinedDate: "Feb 12, 2024",
    address: "Kolkata, India",
    about: "Dedicated learner exploring modern web development.",
};

const purchasedCourses = [
    {
        category: "Web Dev",
        image: "/assets/images/course1.png",
        title: "Full Stack Bootcamp",
        author: "John Doe",
        duration: "4 Weeks",
        students: "320",
        level: "Beginner",
        lessons: "40",
        newPrice: "Free",
    }
];

const transactions = [
    {
        id: "TXN-10234",
        courseName: "Full Stack Bootcamp",
        amount: "49.00",
        method: "UPI",
        date: "2025-02-10",
        status: "Completed",
    }
];
