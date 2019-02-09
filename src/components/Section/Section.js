import React from "react";
import css from "./section.module.css";
import { H4 } from "../Typography/Typography";

const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <div className={css.wrapper}>
        {title && <H4 className={css.title}>{title}</H4>}
        {children}
      </div>
    </section>
  );
};

export default Section;
