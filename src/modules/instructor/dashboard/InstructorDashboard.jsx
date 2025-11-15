// ===============================
// InstructorDashboard.jsx (ACTIVE TAB VERSION)
// ===============================

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

// GLOBAL COMPONENTS
import DashboardTopBar from "../../shared/DashboardTopBar/DashboardTopBar";

// INSTRUCTOR COMPONENTS
import InstructorSidebar from "../../../components/instructor/InstructorSidebar";

// PAGE COMPONENTS (You will build these)
// import InstructorOverview from "../InstructorOverview/InstructorOverview";
import InstructorStudents from "../InstructorStudents/InstructorStudents";
import Review from "../reviews/reviews";
import SettingsSection from "../../shared/setting/SettingsSection";
import GlobalProfile from "../../shared/profile/GlobalProfile";

const instructorUser = {
  name: "Rahul Kumar",
  email: "rahul@academy.com",
  role: "instructor",
  image: "/assets/images/profile.jpg",
};

const InstructorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[var(--blueLight)] flex">

      {/* SIDEBAR */}
      <InstructorSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden absolute top-5 left-5 p-2 bg-white shadow rounded-lg z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu size={22} />
      </button>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-screen overflow-y-auto">

        {/* TOP BAR */}
        <DashboardTopBar
          user={instructorUser}
          onMobileMenu={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* CONTENT AREA */}
        <div className="p-6 lg:p-10 pt-28">

          {/* ==== PAGE RENDERING BASED ON ACTIVE TAB ==== */}

          {/* {activeTab === "overview" && <InstructorOverview user={instructorUser} />} */}

          {activeTab === "students" && <InstructorStudents />}

          {activeTab === "reviews" && <Review />}

          {activeTab === "profile" && <GlobalProfile user={instructorUser} />}

          {activeTab === "settings" && <SettingsSection user={instructorUser} />}

        </div>

      </main>

    </div>
  );
};

export default InstructorDashboard;
