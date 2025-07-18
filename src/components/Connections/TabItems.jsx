import React from "react";

const TabItems = ({ currentTab, name, handleTabs, id }) => {
  return (
    <button
      onClick={() => handleTabs(id)}
      className={`${
        currentTab === id
          ? "bg-black text-white font-medium border-b-2  border-red-600 "
          : "border-0 text-white"
      } ${
        currentTab === "all-connections" ? "rounded-tl-xl" : "rounded-tr-xl"
      } p-4  text-center font-ubuntu text-xs transition-all duration-75 ease-in`}
    >
      {name}
    </button>
  );
};

export default TabItems;
