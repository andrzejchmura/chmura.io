import React from "react";
import css from "./postsummary.module.css";
import { H2, H3 } from "../Typography/Typography";

const PostSummary = ({ title, summary }) => {
  return (
    <article className={css.container}>
      <H2 className={css.title}>{title}</H2>
      <H3 className={css.summary}>{summary}</H3>
    </article>
  );
};

export default PostSummary;
