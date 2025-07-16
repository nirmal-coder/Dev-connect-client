import React from "react";

const TabItems = ({ currentTab, name, handleTabs, id }) => {
  return (
    <button
      onClick={() => handleTabs(id)}
      className={`${
        currentTab === id
          ? "bg-gray-900 text-white font-medium border-b-2  border-red-600"
          : "border-0 text-white"
      } p-4  text-center font-ubuntu text-xs`}
    >
      {name}
    </button>
  );
};

export default TabItems;
