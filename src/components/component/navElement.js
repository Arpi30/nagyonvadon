import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./Contact";
import { Galery } from "./Galery";
import { Home } from "./Home";
import { Layout } from "./layout";
import { ErrorPage } from "./errorPage";
import { Reservation } from "./Reservation";
import { ReservationCompany } from "./form/ReservationCompany";
import { ReservationFamily } from "./form/ReservationFamily";
import { Campcost } from "./campcost";
import { Impressum } from "./impressum";
import { ProgramBook } from "./programbook";

export const NavElement = (props) => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/campcost" element={<Campcost />} />
        <Route path="/programbook" element={<ProgramBook />} />
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/reservation" element={<Reservation />}>
          <Route path="company" element={<ReservationCompany />}></Route>
          <Route path="family" element={<ReservationFamily />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
