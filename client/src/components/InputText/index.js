import React, { useState, useEffect } from "react";

import "./InputText.scss";

const InputText = ({
  type = "text",
  labelText,
  name,
  required,
  register,
  watch,
  error,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  
  const handleBlur = () => {
    if (!watch(name)) setIsFocus(false);
  };

  return (
    <div className="input-text">
      <div className="input-text__container">
        <label
          className={` input-text__label ${isFocus ? "focus" : ""}`}
          htmlFor={name}
        >
          {labelText}
        </label>
        <input
          {...register(name, { required: required })}
          className="input-text__field"
          id={name}
          type={type}
          onFocus={() => setIsFocus(true)}
          onBlur={handleBlur}
        />
      </div>
      <span className={`input-text__error ${error[name] ? "visible" : ""}`}>
        * requerido
      </span>
    </div>
  );
};

export default InputText;
