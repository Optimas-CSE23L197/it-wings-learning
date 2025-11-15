import React from "react";
import Sidebar from "../../../components/admin/SideBar";
import MetricCard from "../../../components/admin/MetricCard";

import { FiUsers, FiBarChart2 } from "react-icons/fi";
import { MdVerifiedUser, MdLibraryBooks } from "react-icons/md";

const SuperAdminDashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10 text-gray-800">
          Super Admin Dashboard
        </h1>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <MetricCard
            icon={<FiUsers />}
            title="Total Users"
            value="12,340"
            trend="+5%"
          />

          <MetricCard
            icon={<MdVerifiedUser />}
            title="Verified Instructors"
            value="112"
            trend="+2%"
          />

          <MetricCard
            icon={<MdLibraryBooks />}
            title="Total Courses"
            value="850"
            trend="+8%"
          />

          <MetricCard
            icon={<FiBarChart2 />}
            title="Platform Growth"
            value="+23%"
          />
        </div>
      </main>
    </div>
  );
};

export default SuperAdminDashboard;