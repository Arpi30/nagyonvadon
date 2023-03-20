import React, { useState } from "react";
import { Background } from "../UI/background.js";
import { Cards } from "./Cards.js";
import classes from "./Home.module.css";
import { Description } from "./description.js";
import { Title } from "../UI/title.js";
import { OpenCard } from "./openCard.js";
import { Intro } from "./intro.js";

export const Home = (props) => {
  const [openCard, setopenCard] = useState([]);
  const [cardId, setCardId] = useState(null);
  const [show, setShow] = useState(false);

  const scrollTo = () => {
    const el = document.querySelector(".Cards_container__FkkCs");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getCardDetails = (stateArray, id) => {
    setopenCard(stateArray);
    setCardId(id);
  };

  return (
    <div>
      <div className={classes.bg}>
        <Background />
        <div className={classes.button}>
          <button onClick={scrollTo}>Programok</button>
        </div>
      </div>
      <Title>Szerezzen örökre szóló, közös élményt szeretteivel!</Title>
      <Intro />
      <Cards openCard={getCardDetails} />
      <div className="open_Card">
        <OpenCard open={openCard} targetId={cardId} />
      </div>
      <div
        className={`${show ? classes.showContainerOpen : ""} ${
          classes.showContainer
        }`}>
        <button className={classes.show} onClick={() => setShow(!show)}>
          ?
        </button>
      </div>
      {show ? <Description /> : ""}
    </div>
  );
};
