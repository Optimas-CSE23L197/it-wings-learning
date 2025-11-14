import React from "react";
import CourseCardHorizontal from "../common/CourseCard";
import BtnOrange from "../common/BtnDarkBlue";

function FeaturedCourses() {

    const courses = [
        {
            category: "Photography",
            image: "/images/course1.jpg",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2Weeks",
            students: 156,
            level: "All levels",
            lessons: 20,
            oldPrice: "29.0",
            newPrice: "Free",
        },
        {
            category: "Photography",
            image: "/images/course2.jpg",
            author: "Determined-Poitras",
            title: "Design A Website With ThimPress",
            duration: "2Weeks",
            students: 156,
            level: "All levels",
            lessons: 20,
            oldPrice: "59.0",
            newPrice: "49.0",
        },
        {
            category: "Photography",
            image: "/images/course3.jpg",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2Weeks",
            students: 156,
            level: "All levels",
            lessons: 20,
            oldPrice: "29.0",
            newPrice: "Free",
        },
        {
            category: "Photography",
            image: "/images/course4.jpg",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2Weeks",
            students: 156,
            level: "All levels",
            lessons: 20,
            oldPrice: "29.0",
            newPrice: "Free",
        },
        {
            category: "Photography",
            image: "/images/course5.jpg",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2Weeks",
            students: 156,
            level: "All levels",
            lessons: 20,
            oldPrice: "29.0",
            newPrice: "Free",
        },
        {
            category: "Photography",
            image: "/images/course6.jpg",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2Weeks",
            students: 156,
            level: "All levels",
            lessons: 20,
            oldPrice: "29.0",
            newPrice: "Free",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-1"
                        style={{ color: "var(--blueDark)" }}
                    >
                        Featured Courses
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Explore our Popular Courses
                    </p>
                </div>

                <BtnOrange
                    btnName="All Courses"
                    btnFunction={() => console.log("All Courses Clicked")}
                />
            </div>

            {/* GRID OF COURSES */}
            <div
                className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8
        "
            >
                {courses.map((course, index) => (
                    <CourseCardHorizontal
                        key={index}
                        category={course.category}
                        image={course.image}
                        author={course.author}
                        title={course.title}
                        duration={course.duration}
                        students={course.students}
                        level={course.level}
                        lessons={course.lessons}
                        oldPrice={course.oldPrice}
                        newPrice={course.newPrice}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedCourses;
