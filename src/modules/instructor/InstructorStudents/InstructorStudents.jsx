import React, { useState } from "react";
import { Search, Eye, MessageCircle, BarChart2 } from "lucide-react";

const sampleStudents = [
    {
        id: 1,
        name: "Anjali Singh",
        email: "anjali@example.com",
        course: "React for Beginners",
        progress: 78,
        joined: "Jan 12, 2024",
        image: "/assets/images/profile.jpg",
    },
    {
        id: 2,
        name: "Rohit Verma",
        email: "rohit@example.com",
        course: "Mastering JavaScript",
        progress: 52,
        joined: "Feb 08, 2024",
        image: "/assets/images/profile.jpg",
    },
    {
        id: 3,
        name: "Saira Khan",
        email: "saira@example.com",
        course: "Web Design Basics",
        progress: 94,
        joined: "Dec 29, 2023",
        image: "/assets/images/profile.jpg",
    },
];

function InstructorStudents() {
    const [search, setSearch] = useState("");

    const filteredStudents = sampleStudents.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.course.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full">

            {/* Title */}
            <h1
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                My Students
            </h1>

            {/* Search Bar */}
            <div className="mb-6 flex items-center gap-3 bg-white p-3 rounded-xl shadow">
                <Search className="text-gray-500" size={20} />
                <input
                    type="text"
                    placeholder="Search students or course..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none text-gray-700"
                />
            </div>

            {/* Table (Desktop) */}
            <div className="hidden lg:block bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4">Student</th>
                            <th className="p-4">Course</th>
                            <th className="p-4">Progress</th>
                            <th className="p-4">Joined</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((s) => (
                            <tr key={s.id} className="border-b">
                                <td className="p-4 flex items-center gap-3">
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        className="w-10 h-10 rounded-full object-cover shadow"
                                    />
                                    <div>
                                        <p className="font-semibold">{s.name}</p>
                                        <p className="text-sm text-gray-500">{s.email}</p>
                                    </div>
                                </td>

                                <td className="p-4">{s.course}</td>

                                <td className="p-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${s.progress}%`,
                                                backgroundColor: "var(--accent)",
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {s.progress}% complete
                                    </p>
                                </td>

                                <td className="p-4">{s.joined}</td>

                                <td className="p-4 text-right flex justify-end gap-3">

                                    <button
                                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                                        title="View Progress"
                                    >
                                        <BarChart2 size={18} />
                                    </button>

                                    <button
                                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                                        title="View Profile"
                                    >
                                        <Eye size={18} />
                                    </button>

                                    <button
                                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                                        title="Message"
                                    >
                                        <MessageCircle size={18} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cards (Mobile View) */}
            <div className="lg:hidden space-y-4 mt-4">
                {filteredStudents.map((s) => (
                    <div
                        key={s.id}
                        className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
                    >
                        <img
                            src={s.image}
                            className="w-14 h-14 rounded-full object-cover shadow"
                            alt=""
                        />

                        <div className="flex-1">
                            <h3 className="font-semibold">{s.name}</h3>
                            <p className="text-sm text-gray-500">{s.course}</p>

                            <div className="mt-2 w-full bg-gray-200 h-2 rounded-full">
                                <div
                                    className="h-2 rounded-full"
                                    style={{
                                        width: `${s.progress}%`,
                                        backgroundColor: "var(--accent)",
                                    }}
                                ></div>
                            </div>

                            <p className="text-xs text-gray-500 mt-1">{s.progress}% completed</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <button className="p-2 bg-gray-100 rounded-lg">
                                <Eye size={18} />
                            </button>
                            <button className="p-2 bg-gray-100 rounded-lg">
                                <MessageCircle size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default InstructorStudents;
