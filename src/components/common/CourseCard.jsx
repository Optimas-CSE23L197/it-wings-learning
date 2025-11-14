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
        <div
            className="
        bg-white rounded-3xl shadow-md overflow-hidden
        transition-all duration-300 
        hover:shadow-lg hover:scale-[1.01]
        cursor-pointer
      "
        >
            {/* Top Image Section */}
            <div className="relative w-full h-44 sm:h-52">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Category Badge */}
                <span
                    className="
            absolute top-3 left-3 bg-black text-white 
            px-3 py-1 rounded-lg text-[12px] sm:text-sm
            font-medium
          "
                >
                    {category}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-5">
                <p
                    className="text-sm text-gray-500 mb-1"
                    style={{ color: "var(--grayDark)" }}
                >
                    by {author}
                </p>

                {/* Title */}
                <h3
                    className="
            font-semibold text-[17px] sm:text-[19px] leading-snug
            mb-3
          "
                    style={{ color: "var(--accent)" }}
                >
                    {title}
                </h3>

                {/* Duration + Students */}
                <div className="flex items-center gap-6 text-gray-600 text-sm sm:text-[15px] mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500">⏱</span>
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="">🎓</span>
                        <span>{students} Students</span>
                    </div>
                </div>

                {/* Price + View More */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {/* Old Price */}
                        {oldPrice && (
                            <span className="text-gray-400 line-through text-[15px]">
                                ${oldPrice}
                            </span>
                        )}

                        {/* New Price */}
                        <span className="text-[17px] font-semibold text-red-500">
                            ${newPrice}
                        </span>
                    </div>

                    <button
                        className="
              text-sm sm:text-[15px] font-medium 
              text-blue-600 hover:underline
            "
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
