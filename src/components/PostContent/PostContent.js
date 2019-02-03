import React from "react";
import { H1 } from "../Typography/Typography";
import css from "./postcontent.module.css";

const PostContent = ({ post }) => {
  return (
    <div className={css.wrapper}>
      <H1>{post.frontmatter.title}</H1>
      <span>{post.frontmatter.date}</span>
      <article
        className={css.container}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export default PostContent;
