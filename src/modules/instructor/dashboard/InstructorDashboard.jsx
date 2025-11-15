import React from "react";
import InstructorSidebar from "../../../components/instructor/InstructorSidebar";
import StatCard from "../../../components/instructor/StatCard";

import { FiBookOpen, FiUsers, FiDollarSign, FiStar } from "react-icons/fi";

const InstructorDashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <InstructorSidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-10 text-gray-800">
          Instructor Dashboard
        </h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <StatCard
            icon={<FiBookOpen />}
            title="Total Courses"
            value="18"
            trend="+3 this month"
          />

          <StatCard
            icon={<FiUsers />}
            title="Total Students"
            value="2,540"
            trend="+120 this month"
          />

          <StatCard
            icon={<FiDollarSign />}
            title="Total Earnings"
            value="$12,730"
            trend="+$1,120 this month"
          />

          <StatCard
            icon={<FiStar />}
            title="Average Rating"
            value="4.8"
            trend="+0.2 increase"
          />

        </div>

        {/* Recent Courses Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Recent Courses</h2>

          <div className="space-y-4">

            <div className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">React for Beginners</p>
                <p className="text-gray-500 text-sm">120 students • 4.7 rating</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View
              </button>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">Mastering JavaScript</p>
                <p className="text-gray-500 text-sm">450 students • 4.8 rating</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View
              </button>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">Web Design Basics</p>
                <p className="text-gray-500 text-sm">310 students • 4.6 rating</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default InstructorDashboard;