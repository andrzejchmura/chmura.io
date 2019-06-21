import React from "react";
import { Link } from "gatsby";
import css from "./postsummary.module.css";
import { H2, H3 } from "../Typography/Typography";

const PostSummary = ({ slug, title, subtitle, date }) => {
  return (
    <article className={css.container}>
      <H2 className={css.title}>
        <Link to={slug}>{title}</Link>
      </H2>
      <H3 className={css.subtitle}>{subtitle}</H3>
      {date && (
        <time className={css.time} dateTime={date}>
          {date}
        </time>
      )}
    </article>
  );
};

export default PostSummary;
