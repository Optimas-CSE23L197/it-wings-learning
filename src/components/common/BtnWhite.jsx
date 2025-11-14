import React from "react";

function BtnWhite({ btnName, btnFunction }) {
    return (
        <button
            onClick={btnFunction}
            className="
        border-2 border-[#9D9D9D] text-black font-medium rounded-3xl
        px-4 py-2 text-[15px]
        sm:px-6 sm:py-3 sm:text-[18px]
        transition-all duration-300 ease-out
        hover:bg-[#f2f2f2] active:scale-95
        focus:outline-none focus:ring-2 focus:ring-[#9D9D9D]/50 cursor-pointer
      "
        >
            {btnName}
        </button>
    );
}

export default BtnWhite;
