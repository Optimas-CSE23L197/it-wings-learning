import React from "react";

function CategoryCard({ image, alt, title, totalNumber }) {
    return (
        <div
            className="
        bg-white rounded-3xl shadow-md 
        p-6 sm:p-8
        flex flex-col items-center text-center
        transition-all duration-300 
        hover:shadow-lg hover:scale-[1.02]
        cursor-pointer
      "
        >
            {/* Icon */}
            <figure className="mb-5">
                <img
                    src={image}
                    alt={alt}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    style={{ color: "var(--accent)" }} // optional if SVG supports color
                />
            </figure>

            {/* Title */}
            <h3
                className="
          text-[18px] sm:text-[20px] font-semibold
        "
                style={{ color: "var(--accent)" }} // hardcoded style like screenshot
            >
                {title}
            </h3>

            {/* Course count */}
            <p
                className="mt-1 text-[15px] sm:text-[16px]"
                style={{ color: "var(--grayDark)" }}
            >
                {totalNumber} Courses
            </p>
        </div>
    );
}

export default CategoryCard;
