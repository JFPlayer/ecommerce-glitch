import React, { useState, useEffect } from "react";

import "./InputText.scss";

const InputText = ({
  type = "text",
  labelText,
  name,
  required,
  light,
  showError,
  useForm,
  className
}) => {
  const [isFocus, setIsFocus] = useState(false);
  
  const handleBlur = () => {
    if (!useForm.watch(name)) setIsFocus(false);
  };
  
  if(type === "textarea")
  return (
    <div className={`input-text ${className} ${light && 'light'} ${useForm.errors[name] && 'error'}`}>
      <div className="input-text__container textarea">
        <label
          className={` input-text__label textarea ${isFocus ? "focus" : ""}`}
          htmlFor={name}
        >
          {labelText}
        </label>
        <textarea
          {...useForm.register(name, { required: required })}
          className="input-text__field textarea"
          id={name}
          type={type}
          onFocus={() => setIsFocus(true)}
          onBlur={handleBlur}
        />
      </div>
      {showError && (
        <span className={`input-text__error ${useForm.errors[name] && "visible"}`}>
          * requerido
        </span>
      )}
    </div>
  );

  return (
    <div className={`input-text ${className} ${light && 'light'} ${useForm.errors[name] && 'error'}`}>
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
        <span className={`input-text__error ${useForm.errors[name] && "visible"}`}>
          * requerido
        </span>
      )}
    </div>
  );
};

export default InputText;
