import React from "react";

const InstructorSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
}) => {
  return (
    <aside
      className={`
        fixed lg:static top-0 left-0 h-screen
        w-64 bg-white shadow-xl p-6 z-40
        border-r border-gray-200
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* TITLE */}
      <h2
        className="text-2xl font-bold mb-8 tracking-wide"
        style={{ color: "var(--blueDark)" }}
      >
        Instructor Panel
      </h2>

      {/* NAVIGATION */}
      <nav className="space-y-2 text-gray-700 font-medium">

        {/* TAB ITEM TEMPLATE */}
        {[
          { key: "overview", label: "Overview" },
          { key: "students", label: "Students" },
          { key: "reviews", label: "Reviews" },
          { key: "profile", label: "Profile" },
          { key: "settings", label: "Settings" },
          { key: "logout", label: "Logout" }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActiveTab(item.key);
              setSidebarOpen(false);
            }}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl
              transition-all text-left
              ${activeTab === item.key
                ? "bg-[var(--accent)] text-white shadow-md"
                : "hover:bg-gray-100"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default InstructorSidebar;
