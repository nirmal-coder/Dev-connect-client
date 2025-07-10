import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import HomePage from "./pages/HomePage";
import AllConnections from "./components/Home/AllConnections";
import Feed from "./components/Home/Feed";
import Message from "./components/Home/Message";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />}>
            <Route index element={<Feed />} />
            <Route index path="feed" element={<Feed />} />
            <Route path="all-connections" element={<AllConnections />} />
            <Route path="message" element={<Message />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
