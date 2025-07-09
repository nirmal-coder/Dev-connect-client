const FormInput = ({
  label,
  name,
  type = "text",
  register,
  validation,
  error,
  ...rest
}) => {
  return (
    <div className="w-full flex flex-col p-2">
      <label htmlFor={name} className="text-white font-semibold ">
        {label}
      </label>
      <input
        type={type}
        {...register(name, validation)}
        id={name}
        className="w-full h-[30px] md:h-[40px] outline-none bg-transparent rounded-sm border border-gray-300 pl-1 text-white mt-1"
        {...rest}
      />
      {error && <p className="ErrorMsg">{error.message}</p>}
    </div>
  );
};

export default FormInput;
