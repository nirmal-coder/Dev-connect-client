import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { LuMessageCircleCode } from "react-icons/lu";
import { MdDynamicFeed } from "react-icons/md";
import { useLocation } from "react-router";

const useNavigationConfig = () => {
  const { pathname } = useLocation();
  const classname = (path) => {
    return pathname === path ? "text-red-600" : "text-gray-400";
  };
  const navigationObj = [
    {
      path: "/",
      name: "Feed",
      icon: <MdDynamicFeed className={classname("/")} />,
    },
    {
      path: "/connections",
      name: "all-connections",
      icon: <FaUserFriends className={classname("/connections")} />,
    },
    {
      path: "/message",
      name: "messages",
      icon: <LuMessageCircleCode className={classname("/message")} />,
    },
    {
      path: "/notifications",
      name: "notifications",
      icon: <IoMdNotifications className={classname("/notifications")} />,
    },
    {
      path: "/profile",
      name: "profile",
      icon: <FaUserTie className={classname("/profile")} />,
    },
  ];

  return navigationObj;
};

export default useNavigationConfig;
