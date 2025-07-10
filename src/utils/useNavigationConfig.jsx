import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";
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
      path: "/all-connections",
      name: "all-connections",
      icon: <FaUserFriends className={classname("/all-connections")} />,
    },
    {
      path: "/message",
      name: "messages",
      icon: <LuMessageCircleCode className={classname("/message")} />,
    },
    {
      path: "/connection-request",
      name: "connectionRequest",
      icon: <ImUserPlus className={classname("/connection-request")} />,
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
