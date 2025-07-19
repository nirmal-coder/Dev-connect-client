import Header from "../components/Home/Header";
import "../index.css";
import { Outlet } from "react-router";
import Navigation from "../components/Home/Navigation";
import useScreenSize from "../hooks/useScreenSize";

import Connection from "../components/Connections/Connection";

import Feed from "../components/Home/Feed";

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
        <div className="w-full grid content-center h-[calc(100vh-70px)] grid-cols-3 lg:p-2 items-center">
          {desktopUi}
        </div>
      )}

      {(device === "mobile" || device === "tablet") && <Outlet />}

      {(device === "mobile" || device === "tablet") && <Navigation />}
    </div>
  );
};
export default HomePage;
