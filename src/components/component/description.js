import React from "react";
import classes from "./description.module.css";
import felho from "../img/felhő.jpg";
import { FaWikipediaW } from "react-icons/fa";

export const Description = (props) => {
  return (
    <div className={classes.description}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={felho} />
      </div>
      <div>
        <h2>Tudtad?</h2>
        <h3>Táborozás - a természet rejtett kincsei</h3>
        <p>
          A táborozás az egyik legjobb módja annak, hogy az emberek eltöltsék a
          szabadidejüket, legyenek azok gyermekek vagy felnőttek. A táborozások
          lehetnek napközis vagy nyári táborok, élménytáborok vagy sporttáborok,
          és a résztvevőknek számos lehetőséget kínálnak arra, hogy új
          kalandokat éljenek át, barátságokat kössenek, és fejlesszék a
          képességeiket.{" "}
          <strong>
            A táborozások általában olyan helyeken kerülnek megrendezésre,
            amelyek elszigeteltek a városi élettől, így a résztvevők igazi
            természetközeli környezetben élhetik át a kalandokat.
          </strong>{" "}
          A tábori élet pedig rengeteg élménnyel szolgál, hiszen az embereknek
          lehetőségük van együtt énekelni, táncolni, játékokat játszani, és új
          dolgokat tanulni.
        </p>
        <p>
          A táborozások sokszor szakemberek által vezetettek, akik a résztvevők
          fejlesztését tartják szem előtt, és számos programot szerveznek,
          amelyek segítenek a résztvevőknek fejleszteni készségeiket.{" "}
          <strong>
            A sporttáborokban például edzők segítenek az embereknek megtanulni
            új sportokat, vagy fejleszteni a már meglévő sportkészségeiket.
          </strong>{" "}
          Az élménytáborokban pedig olyan programokat szerveznek, amelyek
          segítenek az embereknek megismerni magukat, és növelni az
          önbizalmukat. Egy táborozás tehát sokkal többet jelent, mint egy
          egyszerű szórakozási lehetőséget. Ez egy olyan tapasztalat, amely
          életre szóló barátságokat, emlékeket és készségeket hozhat. A
          táborozások kiváló lehetőséget kínálnak arra, hogy az emberek kicsit
          kilépjenek a mindennapi rutinból, és együtt éljék át az élet különböző
          kalandjait.
        </p>
        <div className={classes.icon}>
          <a href="https://hu.wikipedia.org/wiki/Term%C3%A9szetj%C3%A1r%C3%A1s">
            <FaWikipediaW />
          </a>
        </div>
      </div>
    </div>
  );
};
