import React from "react";

const MetricCard = ({ icon, title, value, trend }) => {
  return (
    <div className="flex items-center gap-5 bg-white shadow-md rounded-xl px-6 py-5 hover:shadow-xl transition">
      <div className="text-4xl text-blue-600">{icon}</div>
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {trend && (
          <p className="text-sm text-green-600 font-semibold mt-1">{trend}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;