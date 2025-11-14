// src/components/TagsList.jsx
import React from "react";

const TagsList = () => {
    const tags = [
        "Free courses",
        "Marketing",
        "Idea",
        "LMS",
        "LearnPress",
        "Instructor",
    ];

    return (
        <div>
            <h3 className="font-semibold text-lg mb-3">Tags</h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-orange-200 rounded-full cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagsList;