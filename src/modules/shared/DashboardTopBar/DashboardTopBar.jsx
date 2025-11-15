import React, { useState } from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";

function DashboardTopBar({ user, onMobileMenu }) {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="
                w-full bg-white shadow 
                px-6 lg:px-10 py-4 
                flex items-center justify-end
                sticky top-0 z-40
            "
        >
            {/* LEFT — Mobile Menu Button */}

            {/* RIGHT — NOTIFICATION + PROFILE */}
            <div className="flex items-center gap-6">

                {/* Notification */}
                <div className="relative cursor-pointer">
                    <Bell size={22} className="text-gray-600 hover:text-[var(--blueDark)] transition" />

                    {/* Unread dot */}
                    <span
                        className="
                            absolute top-0 right-0 
                            w-3 h-3 bg-[var(--accent)] 
                            rounded-full
                        "
                    ></span>
                </div>

                {/* User Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={user.image}
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover border shadow"
                        />

                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-semibold text-gray-700">{user.name}</p>
                            <p className="text-xs text-gray-500">({user.role})</p>
                        </div>

                        <ChevronDown size={18} className="text-gray-600" />
                    </button>

                    {/* DROPDOWN MENU */}
                    {open && (
                        <div
                            className="
                                absolute right-0 mt-2 w-48 
                                bg-white shadow-xl rounded-xl 
                                p-3 border z-50
                            "
                        >
                            <button className="drop-item">View Profile</button>
                            <button className="drop-item">Settings</button>
                            <button className="drop-item text-red-500">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default DashboardTopBar;
