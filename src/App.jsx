import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import HomePage from "./pages/HomePage";
import Feed from "./components/Home/Feed";
import Message from "./components/Home/Message";
import Connection from "./components/Connections/Connection";
import SigninPage from "./pages/SigninPage";
import Notifications from "./components/Home/Notifications";
import Profile from "./components/Home/Profile";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SigninPage />} />
          <Route path="/" element={<HomePage />}>
            <Route index element={<Feed />} />
            <Route index path="feed" element={<Feed />} />
            <Route path="connections" element={<Connection />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="message" element={<Message />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
