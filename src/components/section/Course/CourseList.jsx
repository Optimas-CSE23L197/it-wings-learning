import React from "react";
import CourseCard2 from "../../common/CourseCard2";
function CourseListSection() {
    const courses = [
        {
            category: "Photography",
            image: "/assets/images/course1.png",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2 Weeks",
            students: "156",
            level: "All levels",
            lessons: "20",
            oldPrice: "29.0",
            newPrice: "Free"
        },
        {
            category: "Photography",
            image: "/assets/images/course2.png",
            author: "Determined-Poitras",
            title: "Create An LMS Website With LearnPress",
            duration: "2 Weeks",
            students: "156",
            level: "All levels",
            lessons: "20",
            oldPrice: "29.0",
            newPrice: "Free"
        },
        {
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
        },
    ];

    return (
        <div className="flex-1 space-y-6">
            {courses.map((course, index) => (
                <CourseCard2 key={index} {...course} />
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-6">
                <button className="w-8 h-8 border rounded-full flex items-center justify-center">&lt;</button>
                <button className="w-8 h-8 bg-black text-white rounded-full">1</button>
                <button className="w-8 h-8 border rounded-full">2</button>
                <button className="w-8 h-8 border rounded-full">3</button>
                <button className="w-8 h-8 border rounded-full flex items-center justify-center">&gt;</button>
            </div>
        </div>
    );
}

export default CourseListSection;
