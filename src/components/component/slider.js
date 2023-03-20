import React from "react";
import { Carousel } from "react-carousel-minimal";
import classes from "./slider.module.css";
import csiga from "../img/csiga.jpg";
import felhő from "../img/felhő.jpg";
import folyo from "../img/folyo.jpg";
import galóca from "../img/galóca.jpg";
import gomba2 from "../img/gomba2.jpg";
import gomba3 from "../img/gomba3.jpg";
import naplemente from "../img/naplemente.jpg";
import fAgy from "../img/fAgy.jpg";
import madar from "../img/madar.jpg";
import mezo from "../img/mezo.jpg";
import naplemente2 from "../img/naplemente2.jpg";
import naplemente3 from "../img/naplemente3.jpg";

export const Slider = (props) => {
  const data = [
    {
      image: csiga,
      caption: "San Francisco",
    },
    {
      image: madar,
      caption: "San Francisco",
    },
    {
      image: mezo,
      caption: "San Francisco",
    },
    {
      image: naplemente2,
      caption: "San Francisco",
    },
    {
      image: naplemente3,
      caption: "San Francisco",
    },
    {
      image: felhő,
      caption: "Darjeeling",
    },
    {
      image: folyo,
      caption: "San Francisco",
    },
    {
      image: galóca,
      caption: "Scotland",
    },
    {
      image: gomba2,
      caption: "Darjeeling",
    },
    {
      image: gomba3,
      caption: "San Francisco",
    },
    {
      image: naplemente,
      caption: "Darjeeling",
    },
    {
      image: fAgy,
      caption: "Darjeeling",
    },
  ];
  const captionStyle = {
    display: "none",
  };

  return (
    <div className={classes.slider}>
      <Carousel
        data={data}
        width="800px"
        height="600px"
        automatic={true}
        captionStyle={captionStyle}
        time={5000}
        radius="10px"
        pauseIconColor="white"
        pauseIconSize="40px"
        slideImageFit="cover"
        thumbnails={true}
        dots={true}
        slideNumber={true}
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "800px",
          margin: "40px auto",
        }}
      />
    </div>
  );
};
