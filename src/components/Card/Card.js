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

const Card = ({ slug, title, desc, image, index }) => {
  console.log(image);

  return (
    <GatsbyLink
      to={slug}
      className={css.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Count index={index} />
      <div className={css.wrapper}>
        <H2 className={css.title}>{title}</H2>
        <H3 className={css.subtitle}>{desc}</H3>
      </div>
    </GatsbyLink>
  );
};

export default Card;
