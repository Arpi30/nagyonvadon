import React from "react";
import classes from "./campcost.module.css";
import { NavLi } from "../UI/navLi";

export const Campcost = (props) => {
  const list = [
    {
      1: "A tábor idejére a szállást, az ágyakhoz ágyneműt valamint kényelmes faházat és sátrat a halastónál.",
    },
    { 2: "Az ár tartalmazza a meleg vizes tisztálkodási lehetőséget." },
    {
      3: "Napi 3x étkezés. A programok folytán elkészített ételek. ( gomba, vad, hal) Ivóvíz a tábor ideje alatt.",
    },
    { 4: "Utas biztosítást a tábor megkezdésétől a távozásig." },
    { 5: "Az összes alapanyagot ami a feladatok elkészítésére szükséges." },
    {
      6: "Alkalmazott felszerelés: iránytű, térkép, íj, bogrács, tűzi fa, horgászbot, csali, horog stb.",
    },
    { 7: "A tábor ideje alatt az utazásokat a helyszínek között." },
    { 8: "Belépő árát a halas tóra." },
    { 9: "Szemét díj." },
    { 10: "Törülközőt, és egyéb higiéniai eszközöket kérjük hozzon magával!" },
  ];
  return (
    <div className={classes.campcost}>
      <h1>Tábordíj</h1>
      <div className={classes.camplist}>
        <p>
          Az itt megjelenített árak minimum 20 főtől érvényesek. Az ennél kisebb
          létszámú csoportokra egyéni árajánlatot kell kérni!
        </p>
        <ul>
          {list.map((item, index) => {
            return (
              <div key={item[index + 1]} className={classes.camplistcontainer}>
                <span>{index + 1}</span>
                <li>{item[index + 1]}</li>
              </div>
            );
          })}
        </ul>
        <div className={classes.link}>
          <NavLi to="/reservation">
            <span>Foglalás</span>
          </NavLi>
        </div>
      </div>
    </div>
  );
};
