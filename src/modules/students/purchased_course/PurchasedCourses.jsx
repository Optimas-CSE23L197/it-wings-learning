import React from "react";
import CourseCard from "../../../components/common/CourseCard";

function PurchasedCourses({ courses = [] }) {
    return (
        <div className="w-full">

            {/* TITLE */}
            <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Your Purchased Courses
            </h2>

            {/* IF NO COURSES */}
            {courses.length === 0 && (
                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <p className="text-gray-600">You haven't purchased any courses yet.</p>
                </div>
            )}

            {/* COURSE GRID */}
            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                xl:grid-cols-3 
                gap-6
            ">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
}

export default PurchasedCourses;
