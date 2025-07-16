import React, { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { LuMessageCircleCode } from "react-icons/lu";
import useScreenSize from "../../hooks/useScreenSize";
import { useDispatch } from "react-redux";
import { toggleConnection, toggleMessage } from "../../store/toggleBtnSlice";
const ToggleHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-between items-center p-4 ">
      <button onClick={() => dispatch(toggleConnection())}>
        <BsLayoutSidebarInset className="text-gray-400 text-2xl" />
      </button>
      <button onClick={() => dispatch(toggleMessage())}>
        <LuMessageCircleCode className="text-gray-400 text-2xl" />
      </button>
    </div>
  );
};

export default ToggleHeader;
