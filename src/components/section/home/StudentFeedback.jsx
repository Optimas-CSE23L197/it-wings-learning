import React from "react";
import SwiperWrapper from "../../common/SwiperWrapper";
import StudentFeedbackCard from "../../common/StudentFeedback";

function StudentFeedbackSection() {
    const feedbacks = [
        {
            message:
                "Amazing experience! The lessons were clear, practical, and helped me improve fast.",
            name: "Roe Smith",
            role: "Designer",
        },
        {
            message:
                "The best learning platform I’ve ever used. Super clean and easy interface!",
            name: "John Carter",
            role: "Developer",
        },
        {
            message:
                "Great teachers and modern teaching techniques. I loved every bit of it.",
            name: "Emily White",
            role: "UI/UX Student",
        },
        {
            message:
                "A really amazing learning journey. The structured content helps a lot.",
            name: "Sophia Lee",
            role: "Marketing Student",
        },
        {
            message:
                "Highly recommended! Very clear explanations and practical projects.",
            name: "Mike Johnson",
            role: "Full Stack Learner",
        },
        {
            message:
                "Great mentors and hands-on assignments. Helped me level up quickly.",
            name: "Daniel Ruiz",
            role: "Cybersecurity Student",
        },
        {
            message:
                "Very intuitive and powerful courses. I will definitely enroll again.",
            name: "Hannah Patel",
            role: "Finance Student",
        },
    ];

    const feedbackSwiperConfig = {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 1 },  // Mobile
            768: { slidesPerView: 2 },  // Tablet
            1024: { slidesPerView: 4 }, // Desktop (4 cards per slide)
        },
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">

            {/* HEADER */}
            <div className="text-center mb-10">
                <h2
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--blueDark)" }}
                >
                    Student Feedbacks
                </h2>
                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                    What Students Say About Our Courses
                </p>
            </div>

            {/* SLIDER */}
            <SwiperWrapper
                items={feedbacks}
                config={feedbackSwiperConfig}
                renderItem={(item) => (
                    <div className="px-2">
                        <StudentFeedbackCard
                            message={item.message}
                            name={item.name}
                            role={item.role}
                        />
                    </div>
                )}
            />
        </section>
    );
}

export default StudentFeedbackSection;
