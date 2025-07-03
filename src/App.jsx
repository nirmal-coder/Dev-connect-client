import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginBody from "./components/login/LoginBody";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginBody />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
