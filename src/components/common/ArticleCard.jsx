import React from "react";

const ArticleCard = ({ img, title, date, desc }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-md p-4 gap-6 hover:shadow-lg transition cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-48 h-32 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-lg hover:text-orange-500">
          {title}
        </h2>

        <p className="text-sm text-gray-400 my-1">{date}</p>

        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
