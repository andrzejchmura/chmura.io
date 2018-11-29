import React from "react";
import css from "./section.module.css";
import { H4 } from "../Typography/Typography";

const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <div className={css.wrapper}>
        <H4>{title}</H4>
        <div className={css.grid}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
