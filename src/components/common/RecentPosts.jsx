// src/components/RecentPosts.jsx
import React from "react";

const RecentPosts = () => {
    const posts = [
        { img: "/img1.jpg", title: "Best LearnPress WordPress Theme Collection For 2023" },
        { img: "/img2.jpg", title: "Best LearnPress WordPress Theme Collection For 2023" },
        { img: "/img3.jpg", title: "Best LearnPress WordPress Theme Collection For 2023" },
    ];

    return (
        <div className="mb-8">
            <h3 className="font-semibold text-lg mb-3">Recent Posts</h3>

            <div className="space-y-4">
                {posts.map((post, index) => (
                    <div key={index} className="flex gap-3">
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded"
                        />
                        <p className="text-sm text-gray-700 hover:text-orange-500 cursor-pointer">
                            {post.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentPosts;