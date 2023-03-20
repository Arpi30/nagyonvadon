import React, { useState } from "react";
import classes from "./Cards.module.css";
import { Title } from "../UI/title";
import { Card } from "../UI/card";
import mushroom from "../img/mush.jpg";
import fishing from "../img/fishing.jpg";
import hunting from "../img/hunting.jpg";
import birding from "../img/birding.jpg";

const cardsDescription = [
  {
    title: "Madarászat",
    desc: [
      "Madárfajok megismerése",
      "Madárfigyelés",
      "Közös madárodu készítés",
      "Ragadozómadár bemutató",
    ],
    image: birding,
    id: "1",
    video: "https://www.youtube.com/embed/JP7nDc7JVk0?autoplay=1",
    description:
      "Fedezd fel a természet varázslatos világát! Légy részese a madarak felfedezésének, figyeld őket és élvezd a természet csodáit. Fedezd fel a madarászat örömét!",
  },
  {
    title: "gombászat",
    desc: [
      "Természetismeret",
      "Túra közös gombaszedéssel",
      "Ehető és mérgező gombák megismerése",
      "Térképolvasás, iránytű használatának elsajátítása",
      "Közös faültetés",
      "Gombás ételek elkészítése",
    ],
    image: mushroom,
    id: "2",
    video: "https://www.youtube.com/embed/GYsRoVyOFNQ?autoplay=1",
    description:
      "Fedezd fel a természet rejtett kincseit! Merülj el a gombák világában, tanulmányozd őket és élvezd a természet ízletes ajándékait. Fedezd fel a gombászat örömét!",
  },
  {
    title: "vadászat",
    desc: [
      "Vadászati ismeretek",
      "Közös csapdakészítés",
      "Vadászfegyver és trófea bemutató",
      "Íjászkodás",
      "Vadászkürt megszólaltatásának elsajátítása",
      "Vadhús közös elkészítése gyermekünkel",
    ],
    image: hunting,
    id: "3",
    video: "https://www.youtube.com/embed/uuKMFcU300E?autoplay=1",
    description:
      "Fedezd fel a természet szépségét és vadászd le álmaid vadállatát! Élvezd a természet rejtett kincseit és a vadászat adrenalinfokozó élményét. Fedezd fel a vadászat szépségét!",
  },
  {
    title: "horgászat",
    desc: [
      "Horgászati ismeretek",
      "Közös csalikészítés",
      "Horász technikai megmérkőzés",
      "A hal előkészítésének elsajátítása",
      "Halászlé készítése, grillezés a gyermekekkel",
    ],
    image: fishing,
    id: "4",
    video: "https://www.youtube.com/embed/m1r6jzV4mYQ?autoplay=1",
    description:
      "Fedezd fel a természet csendes világát! Állj a partra és élvezd a horgászat nyugodt pillanatait. Foglald el a helyed a vízparton és fedezd fel a horgászat örömét!",
  },
];

export const Cards = (props) => {
  const opencardDesc = (id) => {
    props.openCard(cardsDescription, id);
  };

  return (
    <div className={classes.container}>
      <div>
        <Title>Programjaink</Title>
      </div>
      <div className={classes.cards}>
        {cardsDescription.map((item, index) => {
          return (
            <Card
              cardId={item.id}
              key={item.id}
              onOpenCardDesc={opencardDesc}
              title={item.title}
              desc={item.desc}
              image={item.image}></Card>
          );
        })}
      </div>
    </div>
  );
};
