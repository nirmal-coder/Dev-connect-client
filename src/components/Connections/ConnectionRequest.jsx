import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllConnectionRequests } from "../../utils/dataFetching";
import ProfileCards from "./ProfileCards";
import ShimmerForConnectionCard from "../../utils/shimmerForConnectionCard";

const ConnectionRequest = () => {
  const connectionRequests = useSelector(
    (store) => store.allConnections.connectionRequest
  );
  console.log("connectionRequests page", connectionRequests);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllConnectionRequests(dispatch);
  }, []);
  return (
    <ul className="list-none pl-0 flex flex-col items-center p-2 md:px-6 md:py-3 lg:p-1">
      {connectionRequests && connectionRequests.length > 0 ? (
        connectionRequests.map((each) => (
          <ProfileCards data={each} key={each.id} type="Request" />
        ))
      ) : (
        <ShimmerForConnectionCard />
      )}
    </ul>
  );
};

export default ConnectionRequest;
