import React from "react";
import classes from "./logo.module.css";

export const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <p>{props.children}</p>
    </div>
  );
};
