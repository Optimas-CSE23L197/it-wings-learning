// src/components/FilterSidebar.jsx
import React from "react";
import FilterSection from "./FilterSection";

const FilterSidebar = () => {
  return (
    <aside className="w-64 p-4 bg-white border border-red-500">

      {/* Course Category */}
      <FilterSection title="Course Category">
        {[
          "Commercial",
          "Office",
          "Shop",
          "Educate",
          "Academy",
          "Single family home",
          "Studio",
          "University",
        ].map((item, index) => (
          <label key={index} className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              {item}
            </div>
            <span>15</span>
          </label>
        ))}
      </FilterSection>

      {/* Instructor */}
      <FilterSection title="Instructors">
        {["Kenny White", "John Doe"].map((item, index) => (
          <label key={index} className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              {item}
            </div>
            <span>15</span>
          </label>
        ))}
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price">
        {["All", "Free", "Paid"].map((item, index) => (
          <label key={index} className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked={item === "All"} />
              {item}
            </div>
            <span>15</span>
          </label>
        ))}
      </FilterSection>

      {/* Review */}
      <FilterSection title="Review">
        {[
          "★★★★★",
          "★★★★☆",
          "★★★☆☆",
          "★★☆☆☆",
          "★☆☆☆☆",
        ].map((stars, index) => (
          <label key={index} className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-yellow-500">{stars}</span>
            </div>
            <span>(1,025)</span>
          </label>
        ))}
      </FilterSection>

      {/* Level */}
      <FilterSection title="Level">
        {["All levels", "Beginner", "Intermediate", "Expert"].map(
          (item, index) => (
            <label key={index} className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={item === "Intermediate"} />
                {item}
              </div>
              <span>15</span>
            </label>
          )
        )}
      </FilterSection>

    </aside>
  );
};

export default FilterSidebar;
