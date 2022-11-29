import React, {  useState } from "react";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import "./Input.css";


const Input = ({
  type,
  name,
  onInput,
  placeholder,
  label,
  onBlur,
  isError,
  errorMessage,
  className
}) => {
  const [value, setValue] = useState();

  const changeHandler = (e) => {
    setValue({ [e.target.name]: e.target.value, name: e.target.name });
    console.log(value);
  };



  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={isError ? "isError" : ""}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={onBlur}
      />
      {isError && (
        <p className="input-error">
          <ErrorOutlinedIcon className="error-icon" />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
