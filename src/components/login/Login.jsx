import websiteLogo from "../../assets/website logo.png";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import linkedInLogo from "../../assets/linkedIn.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import PasswordInput from "./passwordInput";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

const Login = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    try {
      const url = "http://localhost:1207/login";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form
      className="w-10/12 bg-[#262B3B] p-3 rounded-md flex flex-col items-center max-w-[450px] py-10 shadow-md"
      onSubmit={handleSubmit(handleLogin)}
    >
      <img
        src={websiteLogo}
        alt="website logo"
        className="w-52 h-[60px] mx-auto md:w-60 mb-5"
      />
      <div className="w-11/12 flex flex-col p-2">
        <FormInput
          label="*Email : "
          name="emailId"
          type="email"
          register={register}
          validation={{
            required: "Email Id is required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
              message: "Email format is Invalid!",
            },
          }}
          error={errors.emailId}
        />
        <PasswordInput
          label="*Password"
          name="password"
          register={register}
          validation={{
            required: "Password is required!",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Enter Strong password with least 8 characters, uppercase, lowercase, number, and special character",
            },
          }}
          error={errors.password}
        />
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
