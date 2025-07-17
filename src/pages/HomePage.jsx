import Header from "../components/Home/header";

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
  const toggleConnection = useSelector(
    (store) => store.toggleBtn.connectionToggle
  );
  const toggleMessage = useSelector((store) => store.toggleBtn.messageToggle);

  const tabletUi = (
    <>
      {toggleConnection && <Connection />}
      <Feed />
      {toggleMessage && <Message />}
    </>
  );

  const desktopUi = (
    <>
      <Connection />
      <Feed />
      <Message />
    </>
  );

  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />
      {/* {device === "tablet" && <ToggleHeader />} */}

      {device === "desktop" && (
        <div className="w-full flex justify-between lg:p-6">{desktopUi}</div>
      )}

      {(device === "mobile" || device === "tablet") && <Outlet />}

      {(device === "mobile" || device === "tablet") && <Navigation />}
    </div>
  );
};
export default HomePage;
