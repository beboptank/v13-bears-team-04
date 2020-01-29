import React from "react";
import clsx from "clsx";

const Input = props => {
  const {
    value,
    handleChange,
    errorMessage,
    type,
    label,
    minLength,
    maxLength,
    required,
  } = props;

  const id = `form__field__input--${label}`;
  const labelCx = clsx("form__field__label", { "required-dot": required });
  const showMessage = `form__field__input--error`;

  return (
    <div className="form__field">
      <input
        id={id}
        className="form__field__input"
        type={type}
        value={value}
        onChange={handleChange}
        errorMessage={errorMessage}
        minLength={minLength}
        maxLength={maxLength}
        placeholder=""
        pattern="\S+.*"
        autoComplete="on"
        required
      />
      <label htmlFor={id} className={labelCx}>
        {label}
      </label>
      <p
        className={showMessage}
        style={
          props.errorMessage === ""
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        {props.errorMessage}
      </p>
    </div>
  );
};

export default Input;
