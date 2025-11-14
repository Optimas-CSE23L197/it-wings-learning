import React from "react";
import BtnOrange from "../../common/BtnDarkBlue";

export default function CourseSideCard({ image, oldPrice, newPrice }) {
    return (
        <div
            className="
                bg-white 
                rounded-2xl 
                shadow-md 
                overflow-hidden 
                w-full 
                max-w-sm 
                mx-auto 
                lg:sticky 
                lg:top-24
            "
        >
            {/* IMAGE */}
            <img
                src={image}
                alt="Course Thumbnail"
                className="w-full h-52 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">

                {/* PRICING */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400 line-through text-sm">
                        ${oldPrice}
                    </span>

                    <span
                        className="font-semibold text-lg"
                        style={{ color: "var(--accent)" }}
                    >
                        ${newPrice}
                    </span>
                </div>

                {/* BUTTON */}
                <BtnOrange
                    btnName="Start Now"
                    btnFunction={() => console.log("Start Course")}
                />
            </div>
        </div>
    );
}
