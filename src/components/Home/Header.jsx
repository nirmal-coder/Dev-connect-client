import React, { useState } from "react";
import websiteLogo from "../../assets/website logo.png";
import profilePic from "../../assets/profile-image.webp";
import { LuMessageCircleCode } from "react-icons/lu";
import useScreenSize from "../../hooks/useScreenSize";
import { useSelector } from "react-redux";
import { IoIosLogOut, IoMdNotifications } from "react-icons/io";

const Header = () => {
  const device = useScreenSize();
  const user = useSelector((store) => store.user);

  console.log(location);
  return (
    <div className="w-full h-16 lg:h-18 bg-gray-900 flex justify-between items-center p-5">
      <img
        src={websiteLogo}
        alt="website logo dev connect"
        className="h-12 md:h-14 lg:h-18 object-contain py-2"
      />

      <div className="flex items-center gap-x-3">
        {device !== "mobile" && (
          <>
            <IoMdNotifications className="text-gray-300 text-2xl" />
            <img
              src={profilePic}
              alt="profile picture"
              className="w-8 h-8 rounded-[50%]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
