import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import toggleBtnReducer from "../store/toggleBtnSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    toggleBtn: toggleBtnReducer,
  },
});

export default appStore;
