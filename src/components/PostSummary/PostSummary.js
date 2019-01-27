import React from "react";
import { Link } from "gatsby";
import css from "./postsummary.module.css";
import { H2, H3 } from "../Typography/Typography";

const PostSummary = ({ slug, title, summary }) => {
  return (
    <article className={css.container}>
      <H2 className={css.title}>
        <Link to={slug}>{title}</Link>
      </H2>
      <H3 className={css.summary}>{summary}</H3>
    </article>
  );
};

export default PostSummary;
