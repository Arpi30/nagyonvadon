import React, { Link, Outlet } from "react-router-dom";
import classes from "./reservation.module.css";
import logo from "../img/logo.png";
import { useState } from "react";
export const Reservation = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={classes.nav}>
        <Link onClick={() => setShow(true)} to="/reservation/family">
          Családoknak
        </Link>
        <Link onClick={() => setShow(true)} to="/reservation/company">
          Cégeknek
        </Link>
        <p>
          Foglaljon le egy időpontot, hogy mihamarabb élvezhesse a természet
          adta lehetőségeket.
        </p>
      </nav>
      {!show ? (
        <div style={{ textAlign: "center" }}>
          <img className={classes.logo} src={logo}></img>
        </div>
      ) : (
        ""
      )}
      <Outlet />
    </>
  );
};
