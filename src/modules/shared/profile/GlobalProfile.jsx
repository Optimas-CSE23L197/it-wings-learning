import React from "react";
import { Mail, Phone, User, Calendar, Shield, MapPin } from "lucide-react";

function GlobalProfile({ user }) {
    return (
        <div className="w-full">

            {/* TITLE */}
            <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Profile Information
            </h2>

            <div
                className="
                bg-white rounded-xl shadow 
                p-6 sm:p-8 
                flex flex-col lg:flex-row 
                gap-8
            ">

                {/* LEFT — PROFILE IMAGE */}
                <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3">
                    <img
                        src={user.image}
                        alt="profile"
                        className="w-40 h-40 rounded-full object-cover shadow-md border"
                    />

                    <h3 className="text-xl font-bold mt-4">{user.name}</h3>

                    <p
                        className="
                        px-4 py-1 mt-2 rounded-full text-sm font-semibold
                        text-white
                    "
                        style={{ backgroundColor: "var(--accent)" }}
                    >
                        {user.role}
                    </p>
                </div>

                {/* RIGHT — USER DETAILS */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Name */}
                    <div className="profile-field">
                        <User size={18} />
                        <div>
                            <p className="label">Full Name</p>
                            <p className="value">{user.name}</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="profile-field">
                        <Mail size={18} />
                        <div>
                            <p className="label">Email</p>
                            <p className="value">{user.email}</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="profile-field">
                        <Phone size={18} />
                        <div>
                            <p className="label">Phone Number</p>
                            <p className="value">{user.phone}</p>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="profile-field">
                        <Shield size={18} />
                        <div>
                            <p className="label">Role</p>
                            <p className="value">{user.role}</p>
                        </div>
                    </div>

                    {/* Joined Date */}
                    <div className="profile-field">
                        <Calendar size={18} />
                        <div>
                            <p className="label">Joined On</p>
                            <p className="value">{user.joinedDate}</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="profile-field">
                        <MapPin size={18} />
                        <div>
                            <p className="label">Address</p>
                            <p className="value">{user.address || "Not provided"}</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="bg-white rounded-xl shadow p-6 sm:p-8 mt-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--blueDark)" }}>
                    About
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {user.about || "No additional profile information available."}
                </p>
            </div>
        </div>
    );
}

export default GlobalProfile;
