import React from "react";
import { H2, H3 } from "../Typography/Typography";

const PostSummary = ({ title, summary }) => {
  return (
    <article>
      <H2>{title}</H2>
      <H3>{summary}</H3>
    </article>
  );
};

export default PostSummary;
