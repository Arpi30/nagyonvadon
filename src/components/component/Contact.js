import React, { useState } from "react";
import classes from "./contact.module.css";
import footerclasses from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok, FaPhone } from "react-icons/fa";
import { AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import { RiMapPin2Fill } from "react-icons/ri";
import { ContactList } from "./ContactList";
import cx from "classnames";

export const Contact = (props) => {
  const [contactList, setContactList] = useState([
    {
      icon: <RiMapPin2Fill className={classes.icon} />,
      title: "Cím",
      descOne: "Ipolyság - Šahy",
      descTwo: "Budapestől 98km-re",
      id: "1",
    },
    {
      icon: <FaPhone className={classes.icon} />,
      title: "Telefon",
      descOne: "Skerlec Károly",
      descTwo: "+421907123050",
      id: "2",
    },
    {
      icon: <AiTwotoneMail className={classes.icon} />,
      title: "Email",
      descOne: "",
      descTwo: (
        <a
          style={{
            textDecoration: "none",
            color: "black",
            padding: "3px",
            borderRadius: "5px",
            background: "rgb(232 248 218)",
          }}
          href="mailto: openseasonnv@gmail.com">
          info@nagyonvadon.eu
        </a>
      ),
      id: "3",
    },
  ]);

  return (
    <div
      style={{
        marginTop: "5rem",
      }}>
      <div>
        <h1>Kapcsolat</h1>
      </div>
      <div className={classes.contact}>
        <div>
          <h2 className={classes.contactTitle}>Hívjon vagy írjon nekünk!</h2>
        </div>
        <div className={classes.listContainer}>
          {contactList.map((item) => (
            <ContactList key={item.title} contacList={item} />
          ))}
        </div>
        <div className={classes.iconContainer}>
          <a href="https://www.facebook.com/profile.php?id=100090454038847">
            <BsFacebook className={cx(footerclasses.icons, classes.icon)} />
          </a>
          <span>
            <FaTiktok className={cx(footerclasses.icons, classes.icon)} />
          </span>
          <a href="https://instagram.com/nagyonvadon_elmenytabor?igshid=YmMyMTA2M2Y=">
            <AiFillInstagram
              className={cx(footerclasses.icons, classes.icon)}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
