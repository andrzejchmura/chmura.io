import React from "react";
import { H1, H2, H3 } from "../Typography/Typography";
import css from "./projectcontent.module.css";

const ProjectContent = ({ content }) => {
  const { title, subtitle, release, code } = content.frontmatter;
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <H1 className={css.title}>{title}</H1>
        <H2 className={css.subtitle}>{subtitle}</H2>
      </header>
      <article
        className={css.container}
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </div>
  );
};

export default ProjectContent;
