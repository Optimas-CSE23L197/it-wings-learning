import React, { useState, useMemo } from "react";
import {
    Search,
    Plus,
    Pencil,
    Trash2,
    UserCircle,
    Eye,
    EyeOff
} from "lucide-react";

function ManageInstructors({ onViewProfile }) {
    const [search, setSearch] = useState("");

    const [instructors, setInstructors] = useState([
        {
            id: 1,
            name: "Sourav Dutta",
            email: "sourav@academy.com",
            phone: "+91 9876543210",
            specialization: "Full Stack Development",
            courses: 8,
            active: true,
        },
        {
            id: 2,
            name: "Ankita Roy",
            email: "ankita@academy.com",
            phone: "+91 9988776655",
            specialization: "UI/UX Design",
            courses: 4,
            active: false,
        },
        {
            id: 3,
            name: "Vikram Das",
            email: "vikram@academy.com",
            phone: "+91 7890654321",
            specialization: "Data Science",
            courses: 5,
            active: true,
        },
    ]);

    // FILTER SEARCH RESULTS
    const filteredInstructors = useMemo(() => {
        if (!search.trim()) return instructors;
        return instructors.filter((inst) =>
            inst.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, instructors]);

    // DELETE INSTRUCTOR
    const handleDelete = (id) => {
        if (window.confirm("Delete this instructor?")) {
            setInstructors(instructors.filter((i) => i.id !== id));
        }
    };

    // TOGGLE ACTIVE / INACTIVE
    const toggleActive = (id) => {
        setInstructors(
            instructors.map((i) =>
                i.id === id ? { ...i, active: !i.active } : i
            )
        );
    };

    return (
        <div className="w-full">

            <h1
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Manage Instructors
            </h1>

            {/* SEARCH + ADD INSTRUCTOR */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

                {/* SEARCH INPUT */}
                <div className="relative w-full sm:w-1/2">
                    <Search className="absolute top-3 left-3 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search instructor..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border pl-10 pr-4 py-2 rounded-xl shadow-sm
                                   focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
                    />
                </div>

                {/* ADD BUTTON */}
                <button
                    className="flex items-center gap-2 bg-[var(--accent)] text-white px-5 py-2
                               rounded-xl font-semibold shadow hover:bg-opacity-90 transition"
                    onClick={() => alert("Open Add Instructor Modal")}
                >
                    <Plus size={20} />
                    Add Instructor
                </button>
            </div>

            {/* TABLE WRAPPER */}
            <div className="bg-white shadow-xl rounded-xl overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-4 text-left">Instructor</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Expertise</th>
                            <th className="p-4 text-center">Courses</th>
                            <th className="p-4 text-center">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredInstructors.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="p-4 text-center text-gray-500">
                                    No instructor found.
                                </td>
                            </tr>
                        ) : (
                            filteredInstructors.map((inst) => (
                                <tr key={inst.id} className="border-b hover:bg-gray-50">

                                    {/* NAME → opens profile */}
                                    <td
                                        className="p-4 font-medium text-[var(--blueDark)] cursor-pointer hover:underline"
                                        onClick={() => onViewProfile(inst)}
                                    >
                                        {inst.name}
                                    </td>

                                    <td className="p-4">{inst.email}</td>
                                    <td className="p-4">{inst.phone}</td>
                                    <td className="p-4">{inst.specialization}</td>
                                    <td className="p-4 text-center">{inst.courses}</td>

                                    {/* ACTIVE/INACTIVE */}
                                    <td className="p-4 text-center">
                                        {inst.active ? (
                                            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                                                Inactive
                                            </span>
                                        )}
                                    </td>

                                    {/* ACTION BUTTONS */}
                                    <td className="p-4 text-center flex items-center gap-3 justify-center">

                                        {/* VIEW PROFILE */}
                                        <button
                                            onClick={() => onViewProfile(inst)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <UserCircle size={20} />
                                        </button>

                                        {/* TOGGLE ACTIVE */}
                                        <button
                                            onClick={() => toggleActive(inst.id)}
                                            className="text-purple-600 hover:text-purple-800"
                                        >
                                            {inst.active ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>

                                        {/* EDIT */}
                                        <button
                                            onClick={() => alert("Edit Instructor Modal")}
                                            className="text-yellow-600 hover:text-yellow-800"
                                        >
                                            <Pencil size={20} />
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            onClick={() => handleDelete(inst.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageInstructors;
