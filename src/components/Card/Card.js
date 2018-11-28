import React from "react";
import css from "./card.module.css";

const Card = ({ title, desc }) => {
  return (
    <article className={css.container}>
      <h3>{title}</h3>
      <span>{desc}</span>
    </article>
  );
};

export default Card;
