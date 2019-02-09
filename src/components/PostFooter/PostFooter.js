import React from "react";
import css from "./postfooter.module.css";

const PostFooter = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default PostFooter;
