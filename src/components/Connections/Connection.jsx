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
    <div className="w-full h-full lg:w-12/12 lg:border-2 lg:border-gray-600 lg:h-[80vh] rounded-lg col-span-1">
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
      <div className="w-full p-3 overflow-y-auto">
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
