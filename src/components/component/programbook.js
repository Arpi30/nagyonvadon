import React from "react";
import classes from "./campcost.module.css";
import style from "./programbook.module.css";
import { NavLi } from "../UI/navLi";

export const ProgramBook = (prop) => {
  const list = [
    {
      label: "Péntek",
      prog: [
        "07:30–09:00 ÉRKEZÉS , reggeli, csapatok kialakítása",
        "09:00–10:00 Felszerelés megismerése. ( térkép,iránytű,szikrakő,sátor,stb)",
        "10:00–10:30 Gomba alap ismeretek",
        "10:30–11:30 Gombás étel készítés (Csak ellenőrzött forrásból)",
        "11:30–12:00 Szünet, felkészülés a madár mégfigyelésre",
        "12:00–15:30 Madár megfigyelés, természet ismeret, gomba keresés",
        "15:30–18:00 Madár odu készítés, tüzifa előkészítés, tűzrakó hely kialakítás",
        "18:00–20:00 Vacsora készítés",
        "20:00–22:00 Esti program, csapda készítés",
        "22:00–23.00 Takarodó",
      ],
    },
    {
      label: "Szombat",
      prog: [
        "07:30–08:00 Ébresztő",
        "08:00–08:15 Csapdák ellenőrzése",
        "08:15–10:30 Gomba, (fácán,fürj) reggeli készítés",
        "10:30–11:30 A vadon élő állatoknak, mint alapvető természeti forrásoknak a tisztelete",
        "11:30–12:00 A vad mint élőlény tisztelete",
        "12:00–15:30 Bográcsozás",
        "15:30–18:00 Íjászkodás, trófea bemutató, vadászkürt megszólaltatásának elsajátítása",
        "18:00–20:00 Vacsora készítés",
        "20:00–22:00 Esti madár megfigyelés és a természet tiszteletének előtérbe helyezése. Vadorzás elleni küzdelem.",
        "22:00–23.00 Takarodó",
      ],
    },
    {
      label: "Vasárnap",
      prog: [
        "07:30–08:30 Ébresztő, reggeli",
        "08:00–10:00 Költözés a halastóhoz",
        "10:00–10:30 Horgászati alapismeretek elsajátítása: horog kötés, szerelék kötés elsajátítása",
        "10:30–11:30 Etetési technikák",
        "11:30–13:00 Ebédre roston sült hal készítése",
        "13:00–18:00 Horgász technikai megmérkőzés, halászlé elkészítésének elsajátítása",
        "18:00–20:00 Vacsora készítés",
        "20:00–22:00 Esti program, horgászat etikai ismeretei, halgazdaságok szerepei.",
        "22:00–23.00 Takarodó",
      ],
    },
    {
      label: "Hétfő",
      prog: ["07:30–08:30 Ébresztő, reggeli", "08:00–10:00 Tábor zárás"],
    },
  ];

  return (
    <div className={classes.campcost}>
      <h1>Napirend péntektől - vasárnapig</h1>
      <div className={style.container}>
        {list.map((item) => {
          return (
            <div key={item} className={style.mapContainer}>
              <p>{item.label}</p>
              <ul>
                {item.prog.map((prog, index) => {
                  return (
                    <div
                      key={prog}
                      className={`${classes.camplistcontainer} ${style.listContainer}`}>
                      <span>{index + 1}</span>
                      <li>{prog}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className={classes.link}>
          <NavLi to="/reservation">
            <span>Foglalás</span>
          </NavLi>
        </div>
      </div>
    </div>
  );
};
