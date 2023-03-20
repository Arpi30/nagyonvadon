import React, { useState } from "react";
import classes from "./card.module.css";
import { NavLi } from "./navLi";

export const Card = (props) => {
  const openCardDesc = (e) => {
    const targetId = e.target.dataset.id;
    props.onOpenCardDesc(targetId);
    const el = document.querySelector(".open_Card");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={classes.card}>
      <div className={classes.descContainer}>
        <img className={classes.img} src={props.image} />
        <div className={classes.desc}>
          <h2 className={classes.h2}>{props.title}</h2>
          <div>
            {/*             <ul>
              {props.desc.map((desc) => {
                return (
                  <li key={desc} className={classes.li}>
                    {desc}
                  </li>
                );
              })}
            </ul> */}
            <p style={{ textAlign: "center", color: "#e0bb7b" }}>
              "Bővebb információért kérem, kattintson a részletek gombra!"
            </p>
          </div>
          <div className={classes.buttonContainer}>
            {/* <button data-id={props.cardId} onClick={openCardDesc}>
              Részletek
            </button> */}
            <span className={classes.buttonlink}>
              <NavLi to="/programbook">Részletek</NavLi>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
