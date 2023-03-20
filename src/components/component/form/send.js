import React from "react";
import classes from "./send.module.css";

export const Send = (props) => {
  return (
    <div className={classes.send}>
      <p>Foglalásáról hamarosan küldünk egy üzenetet.</p>
      <button onClick={props.onClick}>Köszönjük</button>
    </div>
  );
};
