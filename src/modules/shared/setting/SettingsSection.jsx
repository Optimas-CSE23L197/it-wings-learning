import React, { useState } from "react";
import { Lock, User, Mail, Phone, Bell, Trash2 } from "lucide-react";

function SettingsSection({ user }) {
    const [formData, setFormData] = useState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        newPassword: "",
        confirmPassword: "",
        notifications: true,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full">

            {/* TITLE */}
            <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Account Settings
            </h2>

            {/* MAIN SETTINGS CARD */}
            <div className="bg-white rounded-xl shadow p-6 sm:p-8 space-y-10">

                {/* ===== PERSONAL INFO ===== */}
                <div>
                    <h3 className="section-title">Personal Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

                        {/* Name */}
                        <div className="settings-field">
                            <User size={18} />
                            <div className="w-full">
                                <label className="label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input-box"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="settings-field">
                            <Mail size={18} />
                            <div className="w-full">
                                <label className="label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-box"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="settings-field">
                            <Phone size={18} />
                            <div className="w-full">
                                <label className="label">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="input-box"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== PASSWORD CHANGE ===== */}
                <div>
                    <h3 className="section-title">Change Password</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

                        <div className="settings-field">
                            <Lock size={18} />
                            <div className="w-full">
                                <label className="label">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    className="input-box"
                                />
                            </div>
                        </div>

                        <div className="settings-field">
                            <Lock size={18} />
                            <div className="w-full">
                                <label className="label">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="input-box"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== NOTIFICATIONS ===== */}
                <div>
                    <h3 className="section-title">Notifications</h3>

                    <div className="flex items-center gap-4 mt-4">
                        <Bell size={20} className="text-gray-600" />
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.notifications}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        notifications: e.target.checked,
                                    })
                                }
                                className="w-5 h-5"
                            />
                            <span className="text-sm text-gray-600">
                                Receive email notifications
                                (course updates, offers, announcements)
                            </span>
                        </label>
                    </div>
                </div>

                {/* ===== DELETE ACCOUNT (OPTIONAL) ===== */}
                <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                    <h3 className="text-red-700 font-semibold flex items-center gap-2">
                        <Trash2 size={18} /> Delete Account
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Once deleted, your account cannot be recovered.
                    </p>

                    <button
                        className="
                            mt-3 px-5 py-2 rounded-lg text-white font-semibold
                            bg-red-600 hover:bg-red-700 transition
                        "
                    >
                        Delete My Account
                    </button>
                </div>

                {/* ===== SAVE CHANGES BUTTON ===== */}
                <button
                    className="
                        w-full sm:w-auto px-6 py-3 
                        bg-[var(--accent)]
                        text-white rounded-xl 
                        font-semibold shadow 
                        hover:bg-opacity-90 transition
                    "
                >
                    Save Changes
                </button>

            </div>
        </div>
    );
}

export default SettingsSection;
