import React, { useRef } from "react";
import classes from "./intro.module.css";
import { TbExclamationMark } from "react-icons/tb";
import { AiOutlineSolution } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { UseObserver } from "../hooks/useObserver";

export const Intro = (props) => {
  const problemRef = useRef();
  const solutionRef = useRef();
  const conclusionRef = useRef();
  UseObserver(problemRef, classes.show);
  UseObserver(solutionRef, classes.show);
  UseObserver(conclusionRef, classes.show);

  return (
    <>
      <div className={classes.intro}>
        <h2>
          A táborunk születésének ötletét a természethez való visszatérés, a
          családok, barátok, munkatársak közös élményszerzése és egymás
          közelebbi megismerése inspirálta.
        </h2>{" "}
        <br></br>{" "}
        <div className={classes.box} ref={problemRef}>
          <div className={classes.titleContainer}>
            <h3>Probléma</h3>
            <TbExclamationMark className={classes.icons} />
          </div>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src="https://t4.ftcdn.net/jpg/02/79/13/27/360_F_279132718_FwcEPzRC62Eay4creqr8eG0Q4Bkc9PuF.jpg"></img>
          </div>
          <p className={classes.parag}>
            "A ma embere <strong>mókuskereket</strong> hajt és szabadságra
            vágyik, <strong>szorongásokkal küzd és függőségekkel</strong>,
            virtuális eszközökkel csillapítja azt, pedig a legkézenfekvőbb
            megoldás ott van a szeme előtt, az anyatermészet."
          </p>
        </div>
        <div className={classes.box} ref={solutionRef}>
          <div className={classes.titleContainer}>
            <h3>megoldás</h3> <AiOutlineSolution className={classes.icons} />
          </div>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src="https://images.saymedia-content.com/.image/t_share/MTc0MjYyNjc3MjY1MTk2OTI0/100-problem-solution-essay-topics-with-sample-essays.jpg"></img>
          </div>
          <p className={classes.parag}>
            "A <strong>természet</strong> megfigyelése, közvetlen
            megtapasztalása programjaink által nem csupán új{" "}
            <strong>élményeket</strong> rejt magában, hanem fegyelemre,
            tiszteletre tanít és nem utolsó sorban{" "}
            <strong>személyiségfejlesztő</strong> hatással is bír. Hivatásos
            munkatársaink 'erdészek, horgászok, vadászok, pedagógusok'
            segítségével <strong>megismerheti a természet szépségét</strong>, új
            ismeretekre tehet szert. Kipróbálhatja többek közt a csalikészítést,
            íjászkodást, faültetést és nem utolsó sorban az ételek közös elő- és
            elkészítését is. Mindezt a vadregényes Felvidéken, madárcsicsergésre
            ébredve, az erdő közvetlen ölelésében, távol a világ zajától."
          </p>{" "}
        </div>
        <div className={classes.box} ref={conclusionRef}>
          <div className={classes.titleContainer}>
            <h3>Konklúzió</h3> <GiCheckMark className={classes.icons} />
          </div>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src="https://cdn.paperpile.com/guides/img/thesis-conclusion-400x400.png"></img>
          </div>
          <p className={classes.parag}>
            "Ha egy pár percig tartó séta{" "}
            <strong>csökkenti a stresszt és boldogsággal tölti el</strong>, mire
            lehet képes egy több napos örökre szóló élmény a természet lágy
            ölén? Jöjjön el családjával, barátaival, munkatársaival és fedezze
            fel Ön!"
          </p>
        </div>
      </div>
    </>
  );
};
