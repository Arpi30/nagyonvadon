import React from "react-router-dom";
import classes from "./nav.module.css";

export const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>{props.children}</ul>
    </nav>
  );
};
