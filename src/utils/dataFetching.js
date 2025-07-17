import {
  addConnectionRequests,
  addConnections,
} from "../store/connectionsSlice";

export const getAllConnection = async (dispatch) => {
  try {
    const url = "http://localhost:1207/user/connections";
    const response = await fetch(url, { credentials: "include" });
    if (response.ok) {
      const data = await response.json();
      dispatch(addConnections(data.data));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllConnectionRequests = async (dispatch) => {
  try {
    const url = "http://localhost:1207/user/request";
    const response = await fetch(url, { credentials: "include" });
    if (response.ok) {
      const data = await response.json();
      console.log(data.data, "connectionRequest");
      dispatch(addConnectionRequests(data.data));
    }
  } catch (error) {
    console.log(error.message);
  }
};
