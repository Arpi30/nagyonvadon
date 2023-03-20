import React from "react";
import { Slider } from "./slider";

export const Galery = (props) => {
  return (
    <div
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
      }}>
      <h1>Galéria</h1>
      <Slider />
    </div>
  );
};
