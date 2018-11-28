import React from "react";
import css from "./typography.module.css";

export const H1 = ({ children }) => {
  return <h1 className={css.h1}>{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className={css.h2}>{children}</h2>;
};
