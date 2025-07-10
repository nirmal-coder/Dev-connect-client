import React, { useState } from "react";
import websiteLogo from "../../assets/website logo.png";
import profilePic from "../../assets/profile-image.webp";
import { LuMessageCircleCode } from "react-icons/lu";
import useScreenSize from "../../hooks/useScreenSize";

const Header = () => {
  const device = useScreenSize();

  console.log(location);
  return (
    <div className="w-full h-16 bg-gray-900 flex justify-between items-center p-5">
      <img
        src={websiteLogo}
        alt="website logo dev connect"
        className="h-12 md:h-14 object-contain py-2"
      />

      {device === "desktop" ? (
        <img
          src={profilePic}
          alt="profile picture"
          className="w-8 h-8 rounded-[50%]"
        />
      ) : (
        <LuMessageCircleCode className="text-gray-400 text-2xl" />
      )}
    </div>
  );
};

export default Header;
