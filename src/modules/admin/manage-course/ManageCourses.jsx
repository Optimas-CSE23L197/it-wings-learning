import React, { useState, useMemo } from "react";
import { Search, Plus, Pencil, Trash2, EyeOff, Eye } from "lucide-react";

function ManageCourses() {
    const [search, setSearch] = useState("");
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Full Stack Development",
            instructor: "Rahul Sharma",
            category: "Web Development",
            price: "49.00",
            published: true,
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            instructor: "Anita Roy",
            category: "Design",
            price: "29.00",
            published: false,
        },
        {
            id: 3,
            title: "Python For Data Science",
            instructor: "Vikram Das",
            category: "Data Science",
            price: "39.00",
            published: true,
        },
    ]);

    // Filtered Courses
    const filteredCourses = useMemo(() => {
        if (!search.trim()) return courses;
        return courses.filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, courses]);

    // Delete Course
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            setCourses(courses.filter((c) => c.id !== id));
        }
    };

    // Toggle Publish
    const togglePublish = (id) => {
        setCourses(
            courses.map((course) =>
                course.id === id
                    ? { ...course, published: !course.published }
                    : course
            )
        );
    };

    return (
        <div className="w-full">

            <h1
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Manage Courses
            </h1>

            {/* TOP BAR — Search + Add Course */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

                {/* Search */}
                <div className="relative w-full sm:w-1/2">
                    <Search className="absolute top-3 left-3 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search course by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full border pl-10 pr-4 py-2 
                            rounded-xl shadow-sm 
                            focus:ring-2 focus:ring-[var(--accent)] 
                            outline-none transition
                        "
                    />
                </div>

                {/* Add New Course */}
                <button
                    className="
                        flex items-center gap-2 
                        bg-[var(--accent)] text-white 
                        px-5 py-2 rounded-xl 
                        font-semibold shadow 
                        hover:bg-opacity-90 transition
                    "
                    onClick={() => alert("Open Add Course Modal")}
                >
                    <Plus size={20} />
                    Add New Course
                </button>
            </div>

            {/* COURSE TABLE */}
            <div className="bg-white shadow-xl rounded-xl overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-4 text-left">Course Title</th>
                            <th className="p-4 text-left">Instructor</th>
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-center">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCourses.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">
                                    No courses found.
                                </td>
                            </tr>
                        ) : (
                            filteredCourses.map((course) => (
                                <tr key={course.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4">{course.title}</td>
                                    <td className="p-4">{course.instructor}</td>
                                    <td className="p-4">{course.category}</td>
                                    <td className="p-4">${course.price}</td>

                                    {/* Published / Unpublished */}
                                    <td className="p-4 text-center">
                                        {course.published ? (
                                            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                                Published
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                                                Unpublished
                                            </span>
                                        )}
                                    </td>

                                    <td className="p-4 text-center flex items-center gap-3 justify-center">

                                        {/* Publish Toggle */}
                                        <button
                                            onClick={() => togglePublish(course.id)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            {course.published ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>

                                        {/* Edit */}
                                        <button
                                            onClick={() => alert("Edit course modal")}
                                            className="text-yellow-600 hover:text-yellow-800"
                                        >
                                            <Pencil size={20} />
                                        </button>

                                        {/* Delete */}
                                        <button
                                            onClick={() => handleDelete(course.id)}
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

export default ManageCourses;