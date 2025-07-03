import websiteLogo from "../../assets/website logo.png";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import linkedInLogo from "../../assets/linkedIn.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <form className="w-10/12 bg-[#262B3B] p-3 rounded-md flex flex-col items-center max-w-[450px] py-10 shadow-md">
      <img
        src={websiteLogo}
        alt="website logo"
        className="w-52 h-[60px] mx-auto md:w-60 mb-5"
      />
      <div className="w-11/12 flex flex-col p-2">
        <label htmlFor="EmailId" className="text-white font-semibold ">
          Email*
        </label>
        <input
          type="email"
          name="Email"
          id="EmailId"
          className="w-full h-[30px] md:h-[40px] outline-none bg-transparent rounded-sm border border-gray-300 pl-3 text-white mt-2"
        />
      </div>
      <div className="w-11/12 flex flex-col p-2">
        <label htmlFor="password" className="text-white font-semibold ">
          Password*
        </label>
        <div className="w-full flex justify-between gap-x-2 items-center rounded-sm border border-gray-300 mt-2 px-3">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="w-10/12 h-[30px] md:h-[40px] outline-none bg-transparent  pl-3 text-white "
          />
          <button onClick={handleShowPassword}>
            {showPassword ? (
              <FaEyeSlash className="text-xl text-gray-300" />
            ) : (
              <FaEye className="text-xl text-gray-300" />
            )}
          </button>
        </div>
      </div>
      <button className="bg-red-500 px-7 py-2 text-white rounded-[99px] mt-5 hover:bg-transparent hover:border hover:border-red-500 transition duration-75">
        Login
      </button>
      <p className="text-gray-200 text-sm my-2">
        Don't have account -{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => setShowLogin(false)}
        >
          Sign up
        </span>
      </p>
      <p className="text-white font-thin my-1">or</p>
      <p className="text-white font-thin my-1">connect with social accounts!</p>
      <div className="w-6/12 flex justify-between items-center my-2 gap-x-5">
        <FcGoogle className="w-8 h-8 " />
        <FaGithub className="w-8 h-8 text-white" />
        <img
          src={linkedInLogo}
          alt="linkedInLogo"
          className="w-[30px] h-[30px]"
        />
      </div>
    </form>
  );
};

export default Login;
