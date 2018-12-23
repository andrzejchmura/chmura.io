import React from "react";
import css from "./card.module.css";
import { H3, H4 } from "../Typography/Typography";

const Count = ({ index }) => {
  const formatIndex = index => (index < 10 ? `0${index}` : `${index}`);

  if (index === null) {
    return null;
  }

  return <H4 inverted>{formatIndex(index)}</H4>;
};

const Card = ({ title, desc, image, index }) => {
  return (
    <article className={css.container} style={{ backgroundImage: image }}>
      <Count index={index} />
      <div className={css.wrapper}>
        <H3 inverted>{title}</H3>
        <H4 inverted>{desc}</H4>
      </div>
    </article>
  );
};

export default Card;
