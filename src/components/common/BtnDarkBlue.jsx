import React from "react";

function BtnOrange({ btnName, btnFunction }) {
    return (
        <button
            onClick={btnFunction}
            className={`
        blueDark text-white font-medium rounded-3xl cursor-pointer
        px-4 py-2 text-sm
        sm:px-6 sm:py-3 sm:text-base
        transition-colors duration-200 ease-in-out
        hover:blueMedium active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300
      `}
        >
            {btnName}
        </button>
    );
}

export default BtnOrange;
