import { createSlice } from "@reduxjs/toolkit";

const toggleBtnSlice = createSlice({
  name: "toggleBtn",
  initialState: {
    connectionToggle: true,
    messageToggle: false,
  },
  reducers: {
    toggleConnection: (state, action) => {
      state.connectionToggle = !state.connectionToggle;
    },
    toggleMessage: (state, action) => {
      state.messageToggle = !state.messageToggle;
    },
  },
});

export const { toggleConnection, toggleMessage } = toggleBtnSlice.actions;

export default toggleBtnSlice.reducer;
