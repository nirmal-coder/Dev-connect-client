import Login from "../components/login/Login";
import "../index.css";

const LoginPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center p-5 login-bg-container">
      <Login />
    </div>
  );
};

export default LoginPage;
