import React, { Link } from "react-router-dom";
import classes from "./navLi.module.css";

export const NavLi = (props) => {
  return (
    <li onClick={props.click}>
      <Link className={`${classes.li} link`} to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};
