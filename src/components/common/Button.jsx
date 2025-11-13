import React from "react";

const ExplorerTag = ({btnName,btnFunction}) => {
  return (
    <button onClick={btnFunction} className="w-[170px]
          h-[48px]
          bg-orange-500
          text-white
          text-lg
          font-semibold
          rounded-full
          flex
          items-center
          justify-center
          cursor-pointer
          hover:bg-orange-600
          active:scale-95
          transition
          duration-300">
      {btnName}
    </button>
  );
};

export default ExplorerTag;
