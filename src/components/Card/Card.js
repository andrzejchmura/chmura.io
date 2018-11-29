import React from "react";
import css from "./card.module.css";
import { H3 } from "../Typography/Typography";

const Card = ({ title, desc, image }) => {
  return (
    <article className={css.container} style={{ backgroundImage: image }}>
      <div className={css.wrapper}>
        <H3>{title}</H3>
        <span>{desc}</span>
      </div>
    </article>
  );
};

export default Card;
