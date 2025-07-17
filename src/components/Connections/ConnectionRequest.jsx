import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllConnectionRequests } from "../../utils/dataFetching";
import ProfileCards from "./ProfileCards";

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
    <ul className="list-none pl-0 flex flex-col items-center p-2">
      {connectionRequests ? (
        connectionRequests.map((each) => (
          <ProfileCards data={each} key={each.id} type="Request" />
        ))
      ) : (
        <h1 className="text-white">No Connection Requests</h1>
      )}
    </ul>
  );
};

export default ConnectionRequest;
