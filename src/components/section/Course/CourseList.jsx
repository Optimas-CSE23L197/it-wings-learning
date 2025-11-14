import React from "react";
import CourseCard2 from "../../common/CourseCard2";
import CourseCard from "../../common/CourseCard";

function CourseListSection({ layout = "grid" }) {
    const courses = Array(6).fill({
        category: "Photography",
        image: "/assets/images/course3.png",
        author: "Determined-Poitras",
        title: "Create An LMS Website With LearnPress",
        duration: "2 Weeks",
        students: "156",
        level: "All levels",
        lessons: "20",
        oldPrice: "29.0",
        newPrice: "Free"
    });

    const isGrid = layout === "grid";

    return (
        <div className="w-full">

            {/* COURSE LIST */}
            <div
                className={
                    isGrid
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
                        : "flex flex-col gap-6 w-full"
                }
            >
                {courses.map((course, index) => (
                    <div key={index} className="w-full">
                        {isGrid ? (
                            <CourseCard2 {...course} />
                        ) : (
                            <CourseCard {...course} />
                        )}
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-3 mt-10">
                <button className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-200 transition">
                    &lt;
                </button>

                <button className="w-8 h-8 bg-[var(--accent)] text-white rounded-full font-semibold shadow">
                    1
                </button>

                <button className="w-8 h-8 border rounded-full hover:bg-gray-200 transition">
                    2
                </button>

                <button className="w-8 h-8 border rounded-full hover:bg-gray-200 transition">
                    3
                </button>

                <button className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-200 transition">
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default CourseListSection;
