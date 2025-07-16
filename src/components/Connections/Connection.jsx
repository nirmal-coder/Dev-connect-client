import { useEffect, useState } from "react";
import TabItems from "./TabItems";

const Connection = () => {
  const [currentTab, setCurrentTab] = useState("all-connections");
  const [allConnectData, setAllConnectionData] = useState(null);

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

  const getAllConnection = async () => {
    try {
      const url = "http://localhost:1207/user/connections";
      const response = await fetch(url, { credentials: "include" });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllConnection();
  }, []);

  return (
    <div className="w-full h-full bg-black md:w-5/12 lg:w-4/12 transition-all duration-[3s]">
      <div className="w-full bg-black grid grid-cols-2 text-white">
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
    </div>
  );
};

export default Connection;
