import React, { useState, useEffect } from "react";

import "./InputText.scss";

const InputText = ({
  type = "text",
  labelText,
  name,
  required,
  showError,
  useForm
}) => {
  const [isFocus, setIsFocus] = useState(false);
  
  const handleBlur = () => {
    if (!useForm.watch(name)) setIsFocus(false);
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
          {...useForm.register(name, { required: required })}
          className="input-text__field"
          id={name}
          type={type}
          onFocus={() => setIsFocus(true)}
          onBlur={handleBlur}
        />
      </div>
      {showError && (
        <span className={`input-text__error ${useForm.errors[name] ? "visible" : ""}`}>
          * requerido
        </span>
      )}
    </div>
  );
};

export default InputText;
