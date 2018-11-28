import React from "react";
import css from "./button.module.css";

const Button = props => {
  const { children } = props;

  return <button className={css.container}>{children}</button>;
};

export default Button;
