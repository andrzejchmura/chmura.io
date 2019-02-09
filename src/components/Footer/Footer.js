import React from "react";
import { H4 } from "../Typography/Typography";
import css from "./footer.module.css";

const Footer = props => {
  return (
    <footer className={css.container}>
      <div className={css.wrapper}>
        <H4 className={css.copyright}>CC BY-NC 4.0 2019 © Andrzej Chmura.</H4>
      </div>
    </footer>
  );
};

export default Footer;
