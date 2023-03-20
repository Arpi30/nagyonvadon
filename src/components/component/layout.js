import React from "react-router-dom";
import { NavLi } from "../UI/navLi";
import { Nav } from "../UI/nav";
import { Logo } from "../UI/logo";
import classes from "./layout.module.css";
import { useState } from "react";
import cx from "classnames";
import logo from "../img/logo.png";

export const Layout = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => {
      return !prev;
    });
    return menu;
  };

  return (
    <Nav>
      <NavLi to="/">
        <img className={classes.logo} src={logo}></img>
      </NavLi>
      <div
        className={cx(
          classes.navTag,
          menu ? classes.showNavTagLi : classes.navTagLi,
          menu ? classes.navTagShowMenu : ""
        )}>
        <NavLi click={() => setMenu(false)} to="/">
          Főoldal
        </NavLi>
        <NavLi click={() => setMenu(false)} to="/reservation">
          Foglalás
        </NavLi>
        <NavLi click={() => setMenu(false)} to="/campcost">
          Tábordíj
        </NavLi>
        <NavLi click={() => setMenu(false)} to="/programbook">
          Programfüzet
        </NavLi>
        <NavLi click={() => setMenu(false)} to="/galery">
          Galéria
        </NavLi>
        <NavLi click={() => setMenu(false)} to="/contact">
          Kapcsolat
        </NavLi>
      </div>
      <div className={classes.hamburgerMenuContainer} onClick={showMenu}>
        <span className={menu ? classes.span1 : ""}></span>
        <span className={menu ? classes.span2 : ""}></span>
        <span className={menu ? classes.span3 : ""}></span>
      </div>
    </Nav>
  );
};
