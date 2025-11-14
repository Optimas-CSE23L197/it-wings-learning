import React from "react";
import { Quote } from "lucide-react";

function StudentFeedbackCard({ message, name, role }) {
    return (
        <div
            className="
        bg-white 
        rounded-3xl 
        shadow-sm 
        p-6 sm:p-8 
        border border-gray-200
        hover:shadow-md 
        transition-all 
        duration-300
      "
        >
            {/* Quote Icon */}
            <div className="mb-4">
                <Quote
                    size={32}
                    className="opacity-30"
                    style={{ color: "var(--accent)" }}
                />
            </div>

            {/* Message */}
            <p
                className="text-[15px] sm:text-[16px] leading-relaxed mb-6"
                style={{ color: "var(--grayDark)" }}
            >
                {message}
            </p>

            {/* Divider */}
            <div className="w-12 h-[2px] rounded-full mb-4"
                style={{ backgroundColor: "var(--accent)" }}
            ></div>

            {/* Student Info */}
            <h3
                className="font-semibold text-[18px]"
                style={{ color: "var(--blueDark)" }}
            >
                {name}
            </h3>
            <p className="text-gray-500 text-sm">{role}</p>
        </div>
    );
}

export default StudentFeedbackCard;
