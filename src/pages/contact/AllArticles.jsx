// src/pages/AllArticles.jsx
import React from "react";
import ArticleCard from "../../components/common/ArticleCard";
import Sidebar from "../../components/common/Sidebar";

const AllArticles = () => {
  const articles = [
    {
      img: "/src/images/Blog/1st pic.jpg",
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      desc: "Looking for an amazing & well-functional LearnPress WordPress Theme? Online education..."
    },
    {
      img: "/img2.jpg",
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      desc: "Looking for an amazing & well-functional LearnPress WordPress Theme? Online education..."
    },
    {
      img: "/img3.jpg",
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      desc: "Looking for an amazing & well-functional LearnPress WordPress Theme? Online education..."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Articles</h1>

        {/* Search Box */}
        <div className="flex items-center gap-2 border rounded-full px-4 py-1 shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm"
          />
          <i className="ri-search-line text-gray-500"></i>
          <i className="ri-layout-grid-line text-gray-500"></i>
          <i className="ri-menu-line text-gray-500"></i>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Articles column */}
        <div className="md:w-3/4 space-y-6">
          {articles.map((a, i) => (
            <ArticleCard key={i} {...a} />
          ))}
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};


export default AllArticles;
