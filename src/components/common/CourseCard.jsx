import React from "react";

function CourseCard({
    category,
    image,
    author,
    title,
    duration,
    students,
    oldPrice,
    newPrice,
}) {
    return (
        <div className="
            bg-white rounded-3xl shadow-md overflow-hidden
            transition-all duration-300 
            hover:shadow-lg hover:scale-[1.01]
            cursor-pointer
        ">
            {/* Image */}
            <div className="relative w-full h-44 sm:h-52">
                <img
                    src={image}
                    alt={title || "course-image"}
                    className="w-full h-full object-cover"
                />

                <span className="
                    absolute top-3 left-3 
                    bg-black text-white text-xs sm:text-sm 
                    px-3 py-1 rounded-lg font-medium
                ">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
                <p className="text-sm text-gray-500 mb-1">
                    by {author}
                </p>

                <h3
                    className="font-semibold text-[17px] sm:text-[19px] leading-snug mb-3"
                    style={{ color: "var(--accent)" }}
                >
                    {title}
                </h3>

                <div className="flex items-center gap-6 text-gray-600 text-sm mb-3">
                    <div className="flex items-center gap-2">
                        <span>⏱</span>
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>🎓</span>
                        <span>{students} Students</span>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {oldPrice && (
                            <span className="text-gray-400 line-through text-sm">
                                ${oldPrice}
                            </span>
                        )}

                        <span className="text-[17px] font-semibold text-red-500">
                            ${newPrice}
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

export default CourseCard;
