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
        <div className="
            bg-white rounded-3xl shadow-md overflow-hidden
            flex flex-col sm:flex-row
            transition-all duration-300
            hover:shadow-lg hover:scale-[1.01]
            cursor-pointer
        ">
            {/* Image */}
            <div className="relative w-full sm:w-[45%] h-48 sm:h-auto">
                <img
                    src={image}
                    alt={title || "course-image"}
                    className="w-full h-full object-cover"
                />

                <span className="
                    absolute top-3 left-3 
                    bg-black text-white text-xs sm:text-sm 
                    px-3 py-1 rounded-md font-medium
                ">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3 justify-between">
                <p className="text-sm text-gray-600">
                    by {author}
                </p>

                <h3
                    className="font-semibold text-[17px] sm:text-[20px] leading-snug"
                    style={{ color: "var(--blueDark)" }}
                >
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <span>⏱</span>
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>🎓</span>
                        <span>{students} Students</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>📊</span>
                        <span>{level}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>📘</span>
                        <span>{lessons} Lessons</span>
                    </div>
                </div>

                <div className="flex justify-between items-center border-t pt-3 mt-2">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-sm">
                            ${oldPrice}
                        </span>

                        <span className="text-green-600 font-semibold">
                            {newPrice === "Free" ? "Free" : `$${newPrice}`}
                        </span>
                    </div>

                    <button className="text-sm text-blue-600 hover:underline">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard2;
