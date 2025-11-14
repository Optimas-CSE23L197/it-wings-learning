import React from "react";
import FeatureCard from "../common/FeatureCard";

function FeaturesSection() {
    const stats = [
        { number: "25K+", label: "Active Students" },
        { number: "899", label: "Total Courses" },
        { number: "158", label: "Instructor" },
        { number: "100%", label: "Satisfaction Rate" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">

            <div
                className="
          grid
          grid-cols-2 
          sm:grid-cols-4 
          gap-4 sm:gap-6
        "
            >
                {stats.map((item, index) => (
                    <FeatureCard
                        key={index}
                        number={item.number}
                        label={item.label}
                    />
                ))}
            </div>

        </section>
    );
}

export default FeaturesSection;
