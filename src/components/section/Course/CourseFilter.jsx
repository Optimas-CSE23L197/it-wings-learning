import React from "react";

function CourseFilterSection() {
    const categoryList = [
        "Commercial", "Office", "Shop", "Educate",
        "Academy", "Single family home", "Studio", "University"
    ];

    const instructors = ["Kenny Wise", "John Doe"];

    const priceTypes = ["All", "Free", "Paid"];

    const levels = ["All levels", "Beginner", "Intermediate", "Expert"];

    return (
        <aside
            className="
                w-full lg:w-72 
                bg-white rounded-2xl shadow-sm p-6
                space-y-6
                sticky top-20 h-fit
            "
        >

            {/* Course Category */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Course Category</h3>

                <ul className="space-y-3 text-gray-700">
                    {categoryList.map((item, index) => (
                        <label
                            key={index}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[var(--accent)]"
                                />
                                <span>{item}</span>
                            </div>

                            <span className="text-gray-500">15</span>
                        </label>
                    ))}
                </ul>
            </div>

            {/* Instructors */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Instructors</h3>

                <ul className="space-y-3 text-gray-700">
                    {instructors.map((name, index) => (
                        <label
                            key={index}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[var(--accent)]"
                                />
                                <span>{name}</span>
                            </div>
                            <span className="text-gray-500">15</span>
                        </label>
                    ))}
                </ul>
            </div>

            {/* Price */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Price</h3>

                <ul className="space-y-3 text-gray-700">
                    {priceTypes.map((type, index) => (
                        <label
                            key={index}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[var(--accent)]"
                                />
                                <span>{type}</span>
                            </div>
                            <span className="text-gray-500">15</span>
                        </label>
                    ))}
                </ul>
            </div>

            {/* Review */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Review</h3>

                <ul className="space-y-3 text-gray-700">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <label
                            key={star}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[var(--accent)]"
                                />
                                <span>{"⭐".repeat(star)}</span>
                            </div>

                            <span className="text-gray-500">(1,029)</span>
                        </label>
                    ))}
                </ul>
            </div>

            {/* Level */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Level</h3>

                <ul className="space-y-3 text-gray-700">
                    {levels.map((level, index) => (
                        <label
                            key={index}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[var(--accent)]"
                                />
                                <span>{level}</span>
                            </div>

                            <span className="text-gray-500">15</span>
                        </label>
                    ))}
                </ul>
            </div>

        </aside>
    );
}

export default CourseFilterSection;
