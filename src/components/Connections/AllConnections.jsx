import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllConnection } from "../../utils/dataFetching";
import ProfileCards from "./ProfileCards";
import ShimmerForConnectionCard from "../../utils/shimmerForConnectionCard";

const AllConnections = () => {
  const connections = useSelector((store) => store.allConnections.connections);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllConnection(dispatch);
  }, []);

  return (
    <ul className="list-none flex flex-col items-center p-2 md:px-6 md:py-3 lg:p-1">
      {connections && connections.length > 0 ? (
        connections.map((each) => (
          <ProfileCards data={each} key={each.id} type="connections" />
        ))
      ) : (
        <ShimmerForConnectionCard />
      )}
    </ul>
  );
};

export default AllConnections;
