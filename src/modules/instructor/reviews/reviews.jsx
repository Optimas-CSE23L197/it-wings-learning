import React, { useState } from "react";
import { Search, Star, ChevronDown } from "lucide-react";

const sampleReviews = [
    {
        id: 1,
        student: "Anjali Singh",
        course: "React for Beginners",
        rating: 5,
        date: "Feb 02, 2024",
        comment: "Amazing course! Super easy to understand and very practical.",
        image: "/assets/images/profile.jpg",
    },
    {
        id: 2,
        student: "Rohit Verma",
        course: "Mastering JavaScript",
        rating: 4,
        date: "Jan 28, 2024",
        comment: "Great explanations, but could use more real-world examples.",
        image: "/assets/images/profile.jpg",
    },
    {
        id: 3,
        student: "Saira Khan",
        course: "Web Design Basics",
        rating: 5,
        date: "Dec 20, 2023",
        comment: "Loved the course! Very creative and easy to follow.",
        image: "/assets/images/profile.jpg",
    },
];

const InstructorReviews = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("newest");

    const sortedReviews = [...sampleReviews].sort((a, b) => {
        if (filter === "newest") return new Date(b.date) - new Date(a.date);
        if (filter === "oldest") return new Date(a.date) - new Date(b.date);
        if (filter === "rating-high") return b.rating - a.rating;
        if (filter === "rating-low") return a.rating - b.rating;
        return 0;
    });

    const filteredReviews = sortedReviews.filter(
        (r) =>
            r.student.toLowerCase().includes(search.toLowerCase()) ||
            r.course.toLowerCase().includes(search.toLowerCase()) ||
            r.comment.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full">

            {/* PAGE TITLE */}
            <h1
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Course Reviews
            </h1>

            {/* SEARCH + FILTERS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">

                {/* SEARCH BAR */}
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow flex-1">
                    <Search size={20} className="text-gray-500" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by student, course or review..."
                        className="w-full outline-none text-gray-700"
                    />
                </div>

                {/* SORT DROPDOWN */}
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="
                            bg-white p-3 pr-10 rounded-xl shadow border text-gray-700 
                            focus:ring-2 focus:ring-[var(--accent)] outline-none
                        "
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="rating-high">Highest Rating</option>
                        <option value="rating-low">Lowest Rating</option>
                    </select>
                    <ChevronDown
                        size={18}
                        className="absolute right-4 top-[50%] -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                </div>
            </div>

            {/* REVIEWS LIST */}
            <div className="space-y-6">

                {filteredReviews.map((review) => (
                    <div
                        key={review.id}
                        className="
                            bg-white p-5 rounded-xl shadow-md 
                            hover:shadow-lg transition
                        "
                    >
                        <div className="flex items-center justify-between">

                            {/* STUDENT INFO */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.student}
                                    className="w-14 h-14 rounded-full object-cover shadow"
                                />

                                <div>
                                    <p className="font-semibold text-lg text-gray-800">
                                        {review.student}
                                    </p>
                                    <p className="text-gray-500 text-sm">{review.course}</p>
                                </div>
                            </div>

                            {/* RATING */}
                            <div className="flex items-center gap-1">
                                {Array(review.rating)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* COMMENT */}
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            "{review.comment}"
                        </p>

                        {/* DATE */}
                        <p className="text-right text-sm text-gray-500 mt-2">
                            {review.date}
                        </p>
                    </div>
                ))}

                {filteredReviews.length === 0 && (
                    <p className="text-center text-gray-600 py-10">
                        No reviews found.
                    </p>
                )}

            </div>
        </div>
    );
};

export default InstructorReviews;
