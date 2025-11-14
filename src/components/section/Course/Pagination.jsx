import React from "react";

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      
      <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
        &lt;
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
        1
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
        2
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
        3
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
        &gt;
      </button>

    </div>
  );
}

export default Pagination;
