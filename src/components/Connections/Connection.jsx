import { useState } from "react";
import "../../index.css";
import TabItems from "./TabItems";
import ConnectionRequest from "./ConnectionRequest";
import AllConnections from "./AllConnections";

const Connection = () => {
  const [currentTab, setCurrentTab] = useState("all-connections");

  const handleTabs = (id) => {
    setCurrentTab(id);
  };

  const tabObj = [
    {
      id: "all-connections",
      name: "All Connections",
    },
    {
      id: "connection-request",
      name: "Connection Request",
    },
  ];

  return (
    <div className="w-full h-full bg-black lg:w-4/12 md:border md:border-gray-600 md:min-h-[85vh] rounded-xl">
      <div className="w-full bg-black grid grid-cols-2 text-white rounded-xl">
        {tabObj.map((each) => (
          <TabItems
            name={each.name}
            key={each.id}
            id={each.id}
            handleTabs={handleTabs}
            currentTab={currentTab}
          />
        ))}
      </div>
      <div className="w-full p-3">
        {currentTab === "all-connections" ? (
          <AllConnections />
        ) : (
          <ConnectionRequest />
        )}
      </div>
    </div>
  );
};

export default Connection;
