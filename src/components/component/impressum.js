import React from "react";
import classes from "./impressum.module.css";

export const Impressum = (props) => {
  return (
    <div className={classes.impressum}>
      <p>
        Az oldal fejlesztője:{" "}
        <a href="mailto: alijie24@gmail.com"> Ács Árpád - alijie24@gmail.com</a>
      </p>
    </div>
  );
};
