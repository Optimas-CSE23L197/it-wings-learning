import React from "react";
import CategoryCard from "../common/CategoryCard";
import BtnOrange from "../common/BtnDarkBlue";

function TopCategories() {
    const categories = [
        {
            title: "Art & Design",
            totalNumber: 38,
            image: "/icons/design.png",
        },
        {
            title: "Development",
            totalNumber: 38,
            image: "/icons/development.png",
        },
        {
            title: "Communication",
            totalNumber: 38,
            image: "/icons/communication.png",
        },
        {
            title: "Videography",
            totalNumber: 38,
            image: "/icons/video.png",
        },
        {
            title: "Photography",
            totalNumber: 38,
            image: "/icons/photo.png",
        },
        {
            title: "Marketing",
            totalNumber: 38,
            image: "/icons/marketing.png",
        },
        {
            title: "Content Writing",
            totalNumber: 38,
            image: "/icons/content.png",
        },
        {
            title: "Finance",
            totalNumber: 38,
            image: "/icons/finance.png",
        },
        {
            title: "Science",
            totalNumber: 38,
            image: "/icons/science.png",
        },
        {
            title: "Network",
            totalNumber: 38,
            image: "/icons/network.png",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-1"
                        style={{ color: "var(--blueDark)" }}
                    >
                        Top Categories
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Explore our Popular Categories
                    </p>
                </div>

                <BtnOrange
                    btnName="All Categories"
                    btnFunction={() => console.log("All Categories")}
                />
            </div>

            {/* GRID */}
            <div className="
        grid 
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
        gap-5 sm:gap-6 lg:gap-8
      ">
                {categories.map((cat, index) => (
                    <div key={index} className="flex justify-center">
                        <CategoryCard
                            title={cat.title}
                            totalNumber={cat.totalNumber}
                            image={cat.image}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}

export default TopCategories;
