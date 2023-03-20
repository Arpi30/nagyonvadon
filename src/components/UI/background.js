import React from "react";
import classes from "./background.module.css";
import videoBg from "../img/bg.mp4";

export const Background = (props) => {
  return (
    <video
      src={videoBg}
      className={classes.video}
      autoPlay
      loop
      muted
      poster="../img/loader.jpg"></video>
  );
};
