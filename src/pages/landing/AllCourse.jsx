import React, { useState } from "react";
import CourseListSection from "../../components/section/Course/CourseList";
import CourseFilterSection from "../../components/section/Course/CourseFilter";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import GridFlexBtn from "../../components/common/GridFlexBtn";

function Courses() {

    // 👉 manage grid/flex layout here
    const [layout, setLayout] = useState("grid");

    return (
        <>
            <Navbar />

            {/* HEADER SECTION */}
            <section className="w-full bg-[var(--blueLight)] py-12 mb-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h1
                        className="text-3xl sm:text-4xl font-bold"
                        style={{ color: "var(--blueDark)" }}
                    >
                        Explore Our Courses
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Upgrade your knowledge with high-quality structured learning.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-16">

                {/* SEARCH + VIEW SWITCH */}
                <div
                    className="
                        flex flex-col sm:flex-row 
                        items-start sm:items-center 
                        justify-between 
                        gap-4 
                        mb-10
                    "
                >
                    {/* Search Box */}
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        className="
                            w-full sm:w-1/2
                            border border-gray-300 
                            rounded-full
                            px-5 py-3 
                            shadow-sm 
                            focus:ring-2
                            focus:ring-[var(--accent)]
                            outline-none
                            transition
                        "
                    />

                    {/* 👉 Pass state + setter */}
                    <GridFlexBtn onChange={setLayout} />
                </div>

                {/* MAIN LAYOUT */}
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* LEFT SIDE — COURSE LIST */}
                    <div className="flex-1 w-full gap-8">

                        {/* 👉 Pass layout into CourseListSection */}
                        <CourseListSection layout={layout} />

                    </div>

                    {/* RIGHT SIDE — FILTERS */}
                    <div className="w-full lg:w-[300px] lg:sticky lg:top-24">
                        <CourseFilterSection />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Courses;
