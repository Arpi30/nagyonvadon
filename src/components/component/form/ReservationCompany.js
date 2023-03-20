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

export const ReservationCompany = () => {
  const [values, setValues] = useState({
    cegnev: "",
    kapcsolattarto: "",
    telefonszam: "",
    email: "",
    letszam: "",
    egyeb: "",
    idopont: "",
    egyedi_idopont: "",
  });
  const [captcha, setCaptcha] = useState(false);
  const [aszf, setAszf] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [send, setSend] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "cegnev",
      type: "text",
      placeholder: "Cégnév",
      errorMessage:
        "A Cégnév 3-16 karakterből kell állnia és nem szabad tartalmaznia speciális karaktert!",
      label: "Cégnév",
      pattern: "^[A-Za-záéiíoóöőuúüűÁÉIÍOÓÖŐUÚÜŰä. ]*$",
      required: true,
    },
    {
      id: 2,
      name: "kapcsolattarto",
      type: "text",
      placeholder: "Kapcsolattartó",
      errorMessage:
        "A kapcsolattartó 3-16 karakterből kell állnia és nem szabad tartalmaznia speciális karaktert!",
      label: "Kapcsolattartó",
      pattern: "^[A-Za-záéiíoóöőuúüűÁÉIÍOÓÖŐUÚÜŰä ]*$",
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
        "8.4 - 8.6",
        "8.11 - 8.13",
        "8.18 - 8.20",
        "8.25 - 8.27",
      ],
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
          <h3 style={{ color: "rgb(117 163 101)" }}>Cégeknek</h3>
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
              onClick={() => setConfirm(true)}
              onConfirm={() => setAszf(false)}
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
          <button type="submit" className={classes.btn} disabled={!captcha}>
            Küldés
          </button>
        </Form>
      )}
    </div>
  );
};
