import React from "react";

function CourseCard2({
    category,
    image,
    author,
    title,
    duration,
    students,
    level,
    lessons,
    oldPrice,
    newPrice
}) {
    return (
        <div
            className="
        bg-white rounded-3xl shadow-md
        overflow-hidden flex flex-col sm:flex-row
        transition-all duration-300
        hover:shadow-lg hover:scale-[1.01]
        cursor-pointer
      "
        >
            {/* LEFT IMAGE */}
            <div className="relative w-full sm:w-[45%] h-48 sm:h-auto">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Category Badge */}
                <span
                    className="
            absolute top-3 left-3 bg-black text-white
            px-3 py-1 rounded-md text-xs sm:text-sm font-medium
          "
                >
                    {category}
                </span>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3 justify-between">

                {/* Author */}
                <p
                    className="text-sm text-gray-600"
                    style={{ color: "var(--grayDark)" }}
                >
                    by {author}
                </p>

                {/* Title */}
                <h3
                    className="
            font-semibold text-[17px] sm:text-[20px] leading-snug
          "
                    style={{ color: "var(--blueDark)" }} // Dark title color
                >
                    {title}
                </h3>

                {/* DETAILS */}
                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">

                    <div className="flex items-center gap-1">
                        <span className="text-orange-500">⏱</span>
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="text-orange-500">🎓</span>
                        <span>{students} Students</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="text-orange-500">📊</span>
                        <span>{level}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="text-orange-500">📘</span>
                        <span>{lessons} Lessons</span>
                    </div>

                </div>

                {/* PRICE + VIEW MORE */}
                <div className="flex justify-between items-center border-t pt-3 mt-2">

                    <div className="flex items-center gap-2">
                        {/* Old Price */}
                        <span className="text-gray-400 line-through text-sm">
                            ${oldPrice}
                        </span>

                        {/* New Price */}
                        <span className="text-green-600 font-semibold text-[16px]">
                            {newPrice === "Free" ? "Free" : `$${newPrice}`}
                        </span>
                    </div>

                    <button
                        className="
              text-sm font-medium text-blue-600 hover:underline
            "
                    >
                        View More
                    </button>

                </div>

            </div>
        </div>
    );
}

export default CourseCard2;
