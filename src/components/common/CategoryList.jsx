// src/components/CategoryList.jsx
import React from "react";

const CategoryList = () => {
  const categories = [
    "Commercial",
    "Office",
    "Shop",
    "Educate",
    "Academy",
    "Single family home",
  ];

  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg mb-3">Category</h3>

      <div className="space-y-2">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm text-gray-700"
          >
            <span>{item}</span>
            <span>15</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
