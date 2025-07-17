import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllConnection } from "../../utils/dataFetching";
import ProfileCards from "./ProfileCards";

const AllConnections = () => {
  const connections = useSelector((store) => store.allConnections.connections);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllConnection(dispatch);
  }, []);

  return (
    <ul className="list-none pl-0 flex flex-col items-center p-2">
      {connections ? (
        connections.map((each) => (
          <ProfileCards data={each} key={each.id} type="connections" />
        ))
      ) : (
        <h1 className="text-white">loading......</h1>
      )}
    </ul>
  );
};

export default AllConnections;
