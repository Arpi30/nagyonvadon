import React from "react";
import { useState } from "react";
import { Form } from "../../UI/form";
import classes from "./formComponent.module.css";
import { Inputs } from "./inputs";
import ReCAPTCHA from "react-google-recaptcha";
import { TextArea } from "./textarea";
import { AszfModal } from "./aszf";
import { GrFormCheckmark } from "react-icons/gr";
import { Send } from "./send";
import axios from "axios";

export const ReservationFamily = () => {
  const [values, setValues] = useState({
    vezeteknev: "",
    keresztnev: "",
    szuletesi_datum: "",
    telefonszam: "",
    email: "",
    letszam: "",
    egyeb: "",
    idopont: "",
    egyedi_idopont: "",
    age: "",
    kisero_vezeteknev: "",
    kisero_keresztnev: "",
    kisero_email: "",
    kisero_szuletesi_datum: "",
    kisero_telefonszam: "",
  });
  const [captcha, setCaptcha] = useState(false);
  const [aszf, setAszf] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [send, setSend] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "vezeteknev",
      type: "text",
      placeholder: "Vezetéknév",
      errorMessage:
        "A vezetéknévnek 3-16 karakterből kell állnia és nem szabad tartalmaznia speciális karaktert!",
      label: "vezetéknév",
      pattern: "^[A-Za-záéiíoóöőuúüűÁÉIÍOÓÖŐUÚÜŰä]*$",
      required: true,
    },
    {
      id: 2,
      name: "keresztnev",
      type: "text",
      placeholder: "Keresztnév",
      errorMessage:
        "A keresztnévnek 3-16 karakterből kell állnia és nem szabad tartalmaznia speciális karaktert!",
      label: "Keresztnév",
      pattern: "^[A-Za-záéiíoóöőuúüűÁÉIÍOÓÖŐUÚÜŰä]*$",
      required: true,
    },
    {
      id: 3,
      name: "szuletesi_datum",
      type: "date",
      placeholder: "Születési dátum",
      label: "Születési dátum",
      required: true,
    },
    {
      id: 4,
      name: "telefonszam",
      type: "tel",
      placeholder: "Telefonszám",
      errorMessage: "Érvénytelen telefonszám",
      label: "Telefonszám",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Érvénytelen email cím!",
      label: "Email",
      required: true,
    },
  ];
  const select = [
    {
      id: 0,
      name: "letszam",
      errorMessage: "Érvénytelen létszám!",
      label: "Létszám",
      value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      required: true,
    },
    {
      id: 1,
      name: "idopont",
      errorMessage: "Érvénytelen időpont!",
      label: "Időpont",
      value: [
        "",
        "5.26 - 5.28",
        "6.2 - 6.4",
        "6.9 - 6.11",
        "6.16 - 6.18",
        "6.23 - 6.25",
        "6.30 - 7.2",
        "7.7 - 7.9",
        "7.14 - 7.16",
        "7.21 - 7.23",
        "7.28 - 7.30",
      ],
      required: values.egyedi_idopont.length > 0 ? false : true,
    },
  ];
  const ages = [
    {
      id: 0,
      name: "age",
      value: "<18",
      type: "radio",
      errorMessage: "Válassz a lehetőségek közül",
      label: "Elmúltam 18 éves",
      required: true,
    },
    {
      id: 1,
      name: "age",
      value: ">18",
      type: "radio",
      errorMessage: "Válassz a lehetőségek közül",
      label: "Nem múltam el 18 éves",
      required: true,
    },
  ];
  const kisero = [
    {
      id: 0,
      name: "kisero_vezeteknev",
      type: "text",
      placeholder: "Kíserő vezetékneve",
      errorMessage:
        "A vezetéknévnek 3-16 karakterből kell állnia és nem szabad tartalmaznia speciális karaktert!",
      label: "Kíserő vezetékneve",
      pattern: "^[A-Za-záéiíoóöőuúüűÁÉIÍOÓÖŐUÚÜŰä]*$",
      required: true,
    },
    {
      id: 1,
      name: "kisero_keresztnev",
      type: "text",
      placeholder: "Kísérő keresztneve",
      errorMessage:
        "A keresztnévnek 3-16 karakterből kell állnia és nem szabad tartalmaznia speciális karaktert!",
      label: "Kísérő keresztneve",
      pattern: "^[A-Za-záéiíoóöőuúüűÁÉIÍOÓÖŐUÚÜŰä]*$",
      required: true,
    },
    {
      id: 2,
      name: "kisero_kmail",
      type: "email",
      placeholder: "Email",
      errorMessage: "Érvénytelen email cím!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "kisero_szuletesi_datum",
      type: "date",
      placeholder: "Kísérő születési dátuma",
      label: "Kísérő születési dátuma",
      required: true,
    },
    {
      id: 4,
      name: "kisero_telefonszam",
      type: "tel",
      placeholder: "Kíserő Telefonszáma",
      errorMessage: "Érvénytelen telefonszám",
      label: "Kíserő telefonszáma",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://nagyonvadon.eu/backend/server.php",
      data: values,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      setSend(true);
      setValues(
        Object.fromEntries(Object.entries(values).map(([key]) => [key, ""]))
      );
      setAszf(false);
      setConfirm(false);
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const captchaValidate = () => {
    setCaptcha(true);
  };

  return (
    <div style={{ marginBottom: "3rem" }}>
      {send ? (
        <Send onClick={() => setSend(false)} />
      ) : (
        <Form submit={handleSubmit}>
          <h3 style={{ color: "rgb(117 163 101)" }}>Családoknak</h3>
          <div className={classes.inputContainer}>
            {inputs.map((input) => (
              <Inputs
                className={classes.formInput}
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          <div className={classes.selectContainer}>
            {select.map((item) => {
              return (
                <div key={item.name} className={classes.select}>
                  <label>{item.label}</label>
                  <select
                    required={item.required}
                    onChange={onChange}
                    name={item.name}>
                    {item.value.map((val) => {
                      return (
                        <option key={val} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}
            <TextArea
              name="egyeb"
              id="egyeb"
              onChange={onChange}
              placeholder="egyéb">
              Ha rendelkezik valamilyen allergiával akkor azt az{" "}
              <strong>egyéb</strong> szövegdobozban tüntesse fel!
            </TextArea>
            <TextArea
              name="egyedi_idopont"
              id="uzenet"
              onChange={onChange}
              placeholder="egyedi időpont">
              Egyedi időpont igényét, vagy módosításait üzenetben jelezze!
            </TextArea>
          </div>
          <div className={classes.ageAsk}>
            {ages.map((age) => {
              return (
                <Inputs
                  key={age.id}
                  {...age}
                  onChange={onChange}
                  value={age.value}
                  checked={values[age.name] === age.value}
                />
              );
            })}
          </div>
          {values.age === ">18" ? (
            <div style={{ borderTop: "2px solid green", paddingTop: "10px" }}>
              {kisero.map((e) => {
                return (
                  <Inputs
                    className={classes.formInput}
                    key={e.id}
                    {...e}
                    value={values[e.name]}
                    onChange={onChange}
                  />
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className={classes.aszf}>
            <input
              required
              checked={confirm ? true : false}
              type="checkbox"></input>
            {confirm ? <GrFormCheckmark /> : ""}
            <label>
              <span onClick={() => setAszf(true)}>Általános feltételek</span>
            </label>
          </div>
          {aszf ? (
            <AszfModal
              onConfirm={() => setAszf(false)}
              onClick={() => setConfirm(true)}
            />
          ) : (
            ""
          )}
          <div className={classes.captcha}>
            <ReCAPTCHA
              size="normal"
              sitekey="6LcCBqokAAAAAELb-tsLk0f-cx67q-JXL2Xy5ZS-"
              onChange={captchaValidate}
            />
          </div>
          <button className={classes.btn} disabled={!captcha}>
            Küldés
          </button>
        </Form>
      )}
    </div>
  );
};
