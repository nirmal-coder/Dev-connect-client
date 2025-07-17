import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: {
    connections: [],
    connectionRequest: [],
  },
  reducers: {
    addConnections: (state, action) => {
      state.connections = action.payload;
    },
    addConnectionRequests: (state, action) => {
      state.connectionRequest = action.payload;
    },
  },
});

export const { addConnections, addConnectionRequests } =
  connectionsSlice.actions;

export default connectionsSlice.reducer;
