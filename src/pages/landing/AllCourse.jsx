import React from "react";
import CourseListSection from "../../components/section/Course/CourseFilter";
import CourseFilterSection from "../../components/section/Course/CourseList";


function Courses() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-0 py-10">

            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">All Courses</h1>

            {/* Search Bar */}
            <div className="mb-8 flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search"
                    className="
                        w-full lg:w-1/2 border rounded-full
                        px-5 py-2 shadow-sm focus:outline-none
                    "
                />
            </div>

            {/* LAYOUT */}
            <div className="flex flex-col lg:flex-row gap-10">

                {/* LEFT - Course List */}
                <CourseListSection />

                {/* RIGHT - Filter Sidebar */}
                <CourseFilterSection />

            </div>
        </div>
    );
}

export default Courses;
