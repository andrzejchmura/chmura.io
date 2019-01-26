import React from "react";
import css from "./grid.module.css";

const Grid = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Grid;
