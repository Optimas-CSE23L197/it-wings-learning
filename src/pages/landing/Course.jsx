// src/pages/CoursePage.jsx
import React from "react";
import FilterSidebar from "../components/FilterSidebar";
import Navbar from "../../components/common/Navbar";

const CoursePage = () => {
  return (
    <div >
        <Navbar/>
      <FilterSidebar />

      <div className="flex-1 p-4">
        {/* Course content here */}
      </div>
    </div>
  );
};

export default CoursePage;
