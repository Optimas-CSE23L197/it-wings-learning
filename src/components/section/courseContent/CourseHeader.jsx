import React from "react";
import { User, BookOpen, Layers, Users } from "lucide-react";

function CourseHeader({ type, instructorName, courseTitle, duration , totalStudents, level, lessons, quizzes}) {
    return (
        <section
            className="w-full py-10 px-4 bg-black"
        >
            <div className="max-w-7xl mx-auto text-white space-y-4">

                {/* TOP ROW: CATEGORY + INSTRUCTOR */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-md"
                        style={{ backgroundColor: "var(--accent)", color: "white" }}>
                        Photography
                    </span>

                    <span className="flex items-center gap-1 text-gray-200">
                        <User size={16} />
                        Determined-Poitras
                    </span>
                </div>

                {/* COURSE TITLE */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                    The Ultimate Guide To The Best WordPress LMS Plugin
                </h1>

                {/* COURSE META (DURATION / STUDENTS / LEVEL / LESSONS / QUIZZES) */}
                <div className="flex flex-wrap gap-5 text-gray-300 text-sm">

                    <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-[var(--accent)]" />
                        <span>2 Weeks</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-[var(--accent)]" />
                        <span>156 Students</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Layers size={16} className="text-[var(--accent)]" />
                        <span>All Levels</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-[var(--accent)]" />
                        <span>20 Lessons</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-[var(--accent)]" />
                        <span>5 Quizzes</span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CourseHeader;
