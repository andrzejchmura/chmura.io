import React from "react";
import { Link as GatsbyLink } from "gatsby";
import css from "./card.module.css";
import { H2, H3 } from "../Typography/Typography";

const Count = ({ index }) => {
  const formatIndex = index => (index < 10 ? `0${index}` : `${index}`);

  if (index === null) {
    return null;
  }

  return <span className={css.index}>{formatIndex(index)}</span>;
};

const Card = ({ href, title, subtitle, image, index }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={css.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Count index={index} />
      <div className={css.wrapper}>
        <H2 className={css.title}>{title}</H2>
        <H3 className={css.subtitle}>{subtitle}</H3>
      </div>
    </a>
  );
};

export default Card;
