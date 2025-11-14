import React, { useState } from "react";
import TabButton from "./TabButton";

// Import sections
import OverviewSection from "../section/courseContent/OverviewSection";
import CurriculumSection from "../section/courseContent/CurriculumSection";
import InstructorSection from "../section/courseContent/InstructorSection";
import FAQSection from "../section/courseContent/InstructorSection";
import ReviewsSection from "../section/courseContent/ReviewsSection";

function TabsContainer() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { key: "overview", label: "Overview" },
        { key: "curriculum", label: "Curriculum" },
        { key: "instructor", label: "Instructor" },
        { key: "faq", label: "FAQs" },
        { key: "reviews", label: "Reviews" },
    ];

    const renderActiveSection = () => {
        switch (activeTab) {
            case "overview": return <OverviewSection introduction={"Hello My Name Is Mia Khalifa"} />;
            case "curriculum": return <CurriculumSection />;
            case "instructor": return <InstructorSection />;
            case "faq": return <FAQSection />;
            case "reviews": return <ReviewsSection review={"This course is really ba just waste of money"} />;
            default: return <OverviewSection />;
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto mt-8 px-4">

            {/* TAB BUTTONS */}
            <div className="flex flex-wrap gap-3 border-b pb-2">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.key}
                        label={tab.label}
                        active={activeTab === tab.key}
                        onClick={() => setActiveTab(tab.key)}
                    />
                ))}
            </div>

            {/* ACTIVE CONTENT */}
            <div className="mt-6">
                {renderActiveSection()}
            </div>

        </div>
    );
}

export default TabsContainer;
