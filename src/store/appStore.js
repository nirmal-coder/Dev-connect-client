import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import toggleBtnReducer from "../store/toggleBtnSlice";
import connectionsReducer from "../store/connectionsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    toggleBtn: toggleBtnReducer,
    allConnections: connectionsReducer,
  },
});

export default appStore;
