import React from "react";
import classes from "./form.module.css";

export const Form = (props) => {
  return (
    <form onSubmit={props.submit} className={classes.form}>
      {props.children}
    </form>
  );
};
