import React from "react";
import { FiHome, FiUsers, FiSettings, FiGlobe } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

const Sidebar = () => {
  const menu = [
    { icon: <FiHome />, title: "Platform Overview", link: "#" },
    { icon: <MdCategory />, title: "Manage Users / Categories", link: "#" },
    { icon: <FiSettings />, title: "System Settings", link: "#" },
    { icon: <FiGlobe />, title: "Website Controls", link: "#" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg border-r min-h-screen px-6 py-8 hidden md:block">

      <h2 className="text-2xl font-bold mb-10 text-gray-800">Super Admin</h2>

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

export default Sidebar;