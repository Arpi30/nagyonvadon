import React from "react";
import classes from "./title.module.css";

export const Title = (props) => {
  return (
    <div className={classes.h1}>
      <h1>{props.children}</h1>
    </div>
  );
};
