import React from "react";

function FeatureCard({ number, label }) {
    return (
        <div
            className="
        bg-[#f5f5f5] 
        rounded-3xl 
        flex flex-col items-center justify-center
        p-6 sm:p-8
        text-center
        w-full
      "
        >
            {/* Big Orange Number */}
            <h3
                className="text-[26px] sm:text-[30px] font-semibold"
                style={{ color: "var(--accent)" }}   // your orange color
            >
                {number}
            </h3>

            {/* Label */}
            <p
                className="text-[14px] sm:text-[16px] mt-1"
                style={{ color: "var(--grayDark)" }}
            >
                {label}
            </p>
        </div>
    );
}

export default FeatureCard;
