import React from "react";
import classes from "./footerUi.module.css";

export const FooterUi = (props) => {
  return <div className={classes.footer}>{props.children}</div>;
};
