import React from "react";
import css from "./pagehead.module.css";
import { H2, H3 } from "../Typography/Typography";

const PageHead = ({ title, subtitle }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <H2 className={css.title}>{title}</H2>
        <H3 className={css.subtitle}>{subtitle}</H3>
      </div>
    </div>
  );
};

export default PageHead;
