import React from "react";
import { FiHome, FiBookOpen, FiUsers, FiDollarSign, FiSettings } from "react-icons/fi";

const InstructorSidebar = () => {
  const menu = [
    { icon: <FiHome />, title: "Dashboard" },
    { icon: <FiBookOpen />, title: "My Courses" },
    { icon: <FiUsers />, title: "My Students" },
    { icon: <FiDollarSign />, title: "Earnings" },
    { icon: <FiSettings />, title: "Settings" }
  ];

  return (
    <aside className="w-64 bg-white shadow-lg border-r min-h-screen px-6 py-8 hidden md:block">
      <h2 className="text-2xl font-bold mb-10 text-gray-800">Instructor</h2>

      <nav className="space-y-6">
        {menu.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-gray-700 hover:text-blue-600 cursor-pointer text-lg transition"
          >
            <div className="text-2xl">{item.icon}</div>
            <span>{item.title}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default InstructorSidebar;