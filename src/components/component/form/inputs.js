import React, { useState } from "react";
import classes from "./inputs.module.css";

export const Inputs = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={classes.className}>
      <label>
        <span className={classes.star}>* </span>
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <span className={classes.span}>{errorMessage}</span>
    </div>
  );
};
export const Checkbox = (props) => {
  return (
    <>
      <label htmlFor={props.id}> {props.children} </label>
      <input
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        type="checkbox"></input>
    </>
  );
};
