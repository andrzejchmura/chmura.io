import React from "react";
import css from "./postcontent.module.css";

const PostContent = ({ content }) => {
  return (
    <article
      className={css.container}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostContent;
