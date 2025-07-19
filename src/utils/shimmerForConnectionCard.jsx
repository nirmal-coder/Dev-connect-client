import React from "react";

const ShimmerForConnectionCard = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-3 animate-pulse">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <li
            key={index}
            className="w-full h-16 bg-gray-700 rounded-md flex items-center justify-between p-3"
          >
            <div className="w-10 h-10 rounded-[50%] bg-gray-500"></div>
            <div className="w-5/12 h-1 bg-gray-500 rounded-[99px]"></div>
            <div className="w-14 h-5 bg-gray-500 rounded-[99px]"></div>
          </li>
        ))}
    </div>
  );
};

export default ShimmerForConnectionCard;
