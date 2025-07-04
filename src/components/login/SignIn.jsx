import websiteLogo from "../../assets/website logo.png";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import linkedInLogo from "../../assets/linkedIn.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const SignIn = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-10/12 bg-[#262B3B] p-3 rounded-md flex flex-col items-center max-w-[450px] py-10 shadow-md"
      onSubmit={handleSubmit(handleLogin)}
      noValidate
    >
      <img
        src={websiteLogo}
        alt="website logo"
        className="w-52 md:w-60 h-[60px] mx-auto mb-5"
      />
      <div className="w-11/12 flex items-center justify-between">
        <div className="w-6/12 flex flex-col p-2">
          <label htmlFor="firstName" className="text-white font-semibold ">
            First name*
          </label>
          <input
            type="text"
            {...register("firstName", {
              required: "First name is required!",
              minLength: 3,
            })}
            id="firstName"
            className="w-full h-[30px] md:h-[40px] outline-none bg-transparent rounded-sm border border-gray-300 pl-3 text-white mt-2"
          />
          <p className="ErrorMsg">{errors.firstName?.message}</p>
        </div>
        <div className="w-6/12 flex flex-col p-2">
          <label htmlFor="lastName" className="text-white font-semibold ">
            last name*
          </label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required!" })}
            id="lastName"
            className="w-full h-[30px] md:h-[40px] outline-none bg-transparent rounded-sm border border-gray-300 pl-3 text-white mt-2"
          />
          <p className="ErrorMsg">{errors.lastName?.message}</p>
        </div>
      </div>
      <div className="w-11/12 flex flex-col p-2">
        <label htmlFor="EmailId" className="text-white font-semibold ">
          Email*
        </label>
        <input
          type="email"
          {...register("emailId", {
            required: "Email Id is required!",
            pattern: {
              value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
              message: "Email format is Invalid!",
            },
          })}
          id="EmailId"
          className="w-full h-[30px] md:h-[40px] outline-none bg-transparent rounded-sm border border-gray-300 pl-3 text-white mt-2"
        />
        <p className="ErrorMsg">{errors.emailId?.message}</p>
      </div>
      <div className="w-11/12 flex flex-col p-2">
        <label htmlFor="password" className="text-white font-semibold ">
          Password*
        </label>
        <div className="w-full flex justify-between gap-x-2 items-center rounded-sm border border-gray-300 mt-2 px-3">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required!",
              pattern: {
                value:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
                message:
                  "Enter Strong password with least 8 characters, uppercase, lowercase, number, and special character",
              },
            })}
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
        <p className="ErrorMsg">{errors.password?.message}</p>
      </div>
      <button className="bg-red-500 px-7 py-2 text-white rounded-[99px] mt-5 hover:bg-transparent hover:border hover:border-red-500 transition duration-75">
        Signin
      </button>
      <p className="text-gray-200 text-sm my-2">
        Already have a account -{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => setShowLogin(true)}
        >
          Login!
        </span>
      </p>
      <p className="text-white font-thin my-1">or</p>
      <p className="text-white font-thin my-1">connect with social accounts!</p>
      <div className="w-6/12 flex justify-between items-center my-2 gap-x-5">
        <button>
          <FcGoogle className="w-8 h-8 " />
        </button>
        <button>
          <FaGithub className="w-8 h-8 text-white" />
        </button>
        <button>
          <img
            src={linkedInLogo}
            alt="linkedInLogo"
            className="w-[30px] h-[30px]"
          />
        </button>
      </div>
    </form>
  );
};

export default SignIn;
