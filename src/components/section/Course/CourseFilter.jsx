import React from "react";


function CourseFilterSection() {
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

                <ul className="space-y-2 text-gray-700">
                    {[
                        "Commercial", "Office", "Shop", "Educate", "Academy",
                        "Single family home", "Studio", "University"
                    ].map((item, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{item}</span>
                            <span>15</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Instructors */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Instructors</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                        <span>Kenny Wise</span>
                        <span>15</span>
                    </li>
                    <li className="flex justify-between">
                        <span>John Doe</span>
                        <span>15</span>
                    </li>
                </ul>
            </div>

            {/* Price */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Price</h3>

                <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between"><span>All</span><span>15</span></li>
                    <li className="flex justify-between"><span>Free</span><span>15</span></li>
                    <li className="flex justify-between"><span>Paid</span><span>15</span></li>
                </ul>
            </div>

            {/* Review */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Review</h3>

                <ul className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <li key={star} className="flex justify-between text-gray-700">
                            <span>
                                {"⭐".repeat(star)}
                            </span>
                            <span>(1,029)</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Level */}
            <div>
                <h3 className="font-semibold text-lg mb-3">Level</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between"><span>All levels</span><span>15</span></li>
                    <li className="flex justify-between"><span>Beginner</span><span>15</span></li>
                    <li className="flex justify-between"><span>Intermediate</span><span>15</span></li>
                    <li className="flex justify-between"><span>Expert</span><span>15</span></li>
                </ul>
            </div>

        </aside>
    );
}

export default CourseFilterSection;
