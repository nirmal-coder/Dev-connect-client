import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  label,
  name,
  type = "text",
  register,
  validation,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col p-2">
      <label htmlFor="password" className="text-white font-semibold ">
        {label}
      </label>
      <div className="w-full flex justify-between gap-x-2 items-center rounded-sm border border-gray-300 mt-2 px-1">
        <input
          type={showPassword ? "text" : "password"}
          {...register(name, validation)}
          id="password"
          className="w-10/12 h-[30px] md:h-[40px] outline-none bg-transparent  pl-3 text-white "
          {...rest}
        />
        <button onClick={handleShowPassword}>
          {showPassword ? (
            <FaEyeSlash className="text-xl text-gray-300" />
          ) : (
            <FaEye className="text-xl text-gray-300" />
          )}
        </button>
      </div>
      {error && <p className="ErrorMsg">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
