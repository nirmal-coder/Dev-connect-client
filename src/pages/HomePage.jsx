import Header from "../components/Home/header";

import { Outlet } from "react-router";
import Navigation from "../components/Home/Navigation";
import useScreenSize from "../hooks/useScreenSize";

const HomePage = () => {
  const device = useScreenSize();

  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />
      <Outlet />

      {device !== "desktop" && <Navigation />}
    </div>
  );
};
export default HomePage;
