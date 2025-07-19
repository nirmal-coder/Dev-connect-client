import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import connectionsReducer from "../store/connectionsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    allConnections: connectionsReducer,
  },
});

export default appStore;
