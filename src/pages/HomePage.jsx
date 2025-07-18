import Header from "../components/Home/header";
import "../index.css";
import { Outlet } from "react-router";
import Navigation from "../components/Home/Navigation";
import useScreenSize from "../hooks/useScreenSize";
import ToggleHeader from "../components/Home/ToggleHeader";
import Connection from "../components/Connections/Connection";
import Message from "../components/Home/Message";
import Feed from "../components/Home/Feed";
import { useSelector } from "react-redux";

const HomePage = () => {
  const device = useScreenSize();

  const desktopUi = (
    <>
      <Connection />
      <Feed />
    </>
  );

  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />

      {device === "desktop" && (
        <div className="w-full grid grid-cols-3 lg:p-2">{desktopUi}</div>
      )}

      {(device === "mobile" || device === "tablet") && <Outlet />}

      {(device === "mobile" || device === "tablet") && <Navigation />}
    </div>
  );
};
export default HomePage;
