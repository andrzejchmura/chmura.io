import React from "react";
import css from "./pagehead.module.css";
import { H2, H3 } from "../Typography/Typography";

const PageHead = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <H2 className={css.title}>Labs</H2>
        <H3 className={css.subtitle}>Parametric design experiments</H3>
      </div>
    </div>
  );
};

export default PageHead;
