import React, { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";
import banner from "../../assets/undraw_global-team_8jok.svg";
import "../../index.css";

const LoginBody = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center p-5 login-bg-container">
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <SignIn setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default LoginBody;
