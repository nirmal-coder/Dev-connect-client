import React, { useState } from "react";
import websiteLogo from "../../assets/website logo.png";
import profilePic from "../../assets/profile-image.webp";
import { LuMessageCircleCode } from "react-icons/lu";
import useScreenSize from "../../hooks/useScreenSize";
import { useSelector } from "react-redux";
import { IoIosLogOut, IoMdNotifications } from "react-icons/io";
import { Link } from "react-router";
import { TbMessageCode } from "react-icons/tb";
import { BiSolidMessageRounded } from "react-icons/bi";
import Menu from "./Menu";
import Overlay from "../../utils/Overlay";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const device = useScreenSize();
  const user = useSelector((store) => store.user);

  console.log(location);
  return (
    <div className="w-full h-16 lg:h-[70px] bg-gray-900 flex justify-between items-center p-5 relative">
      <Link to="/">
        <img
          src={websiteLogo}
          alt="website logo dev connect"
          className="h-12 md:h-14 lg:h-[60px] object-contain py-2"
        />
      </Link>

      <div className="flex items-center gap-x-3">
        {device === "desktop" && (
          <>
            <Link to="/message" className="mr-5 ">
              <BiSolidMessageRounded className="text-gray-300 text-2xl hover:text-gray-50 transition-all duration-100 hover:scale-105" />
            </Link>
            <Link>
              <IoMdNotifications className="text-gray-300 text-2xl mr-5 hover:text-gray-50 transition-all duration-100 hover:scale-105" />
            </Link>
          </>
        )}

        <button onClick={() => setShowMenu((prev) => !prev)}>
          <img
            src={profilePic}
            alt="profile picture"
            className="w-8 h-8 rounded-[50%] transition-all duration-100 hover:scale-105"
          />
        </button>
      </div>
      {showMenu && <Menu />}
      {showMenu && <Overlay close={setShowMenu} />}
    </div>
  );
};

export default Header;
