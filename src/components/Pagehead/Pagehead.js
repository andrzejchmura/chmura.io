import React from "react";
import css from "./pagehead.module.css";
import { H2 } from "../Typography/Typography";

const PageHead = ({ title }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <H2 className={css.title}>{title}</H2>
      </div>
    </div>
  );
};

export default PageHead;
