import React from "react";
import { H1, H2 } from "../Typography/Typography";
import css from "./postcontent.module.css";

const PostContent = ({ post }) => {
  const { title, subtitle, date } = post.frontmatter;
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <H1 className={css.title}>{title}</H1>
        <H2 className={css.subtitle}>{subtitle}</H2>
        <time className={css.time} dateTime={date}>
          {date}
        </time>
      </header>
      <article
        className={css.container}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export default PostContent;
