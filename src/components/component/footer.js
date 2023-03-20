import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FooterUi } from "../UI/footerUi";
import classes from "./footer.module.css";
import { Logo } from "../UI/logo";
import { AszfModal } from "./form/aszf";
import { NavLi } from "../UI/navLi";

export const Footer = (props) => {
  const [aszf, setAszf] = useState(false);
  const scrollTo = () => {
    setAszf(true);
    const el = document.querySelector("#aszf");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <FooterUi>
      <div className={classes.footerContainer}>
        <div className={classes.footerTopContainer}>
          <div className="logo">
            <Logo>Nagyon</Logo>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100090454038847">
                  <BsFacebook className={classes.icons} />
                </a>
              </li>
              <li>
                <span>
                  <FaTiktok className={classes.icons} />
                </span>
              </li>
              <li>
                <a href="https://instagram.com/nagyonvadon_elmenytabor?igshid=YmMyMTA2M2Y=">
                  <AiFillInstagram className={classes.icons} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.footerBottomContainer}>
          <div onClick={scrollTo} className="data__aszf">
            ÁF
          </div>
          <div className={classes.impressum}>
            <NavLi to="/impressum">Impresszum</NavLi>
          </div>
        </div>
        {aszf ? <AszfModal onConfirm={() => setAszf(false)} /> : ""}
      </div>
    </FooterUi>
  );
};
