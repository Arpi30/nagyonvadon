import React from "react";
import classes from "./openCard.module.css";

export const OpenCard = (props) => {
  if (props.open.length < 1) {
    return;
  }

  return (
    <div className={classes.open}>
      {props.open.map((item) => {
        if (props.targetId == item.id) {
          return (
            <div key={item.id} className={classes.video}>
              <h1 className={classes.openCardTitle}>{item.title}</h1>
              <h3 className={classes.description}>{item.description}</h3>
              <div className={classes.video}>
                <iframe
                  className={classes.frame}
                  width="90%"
                  height="700"
                  src={item.video}
                  title="YouTube video player"
                  name="youtube embed"
                  frameBorder="0"
                  allow="autoplay; encrypted-media;"
                  allowFullScreen></iframe>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
