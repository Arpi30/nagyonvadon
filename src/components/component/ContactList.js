import React from "react";
import classes from "./contact.module.css";

export const ContactList = ({
  contacList: { icon, title, descOne, descTwo, id },
}) => {
  return (
    <div className={classes.list} key={id}>
      {icon}
      <h3>{title}</h3>
      <div>
        <span className={classes.list}>
          <b
            style={{
              textDecoration: "none",
              color: "black",
              padding: "3px",
              borderRadius: "5px",
              background: "rgb(232 248 218)",
            }}>
            {descOne}
          </b>
          <p>{descTwo}</p>
        </span>
      </div>
    </div>
  );
};
