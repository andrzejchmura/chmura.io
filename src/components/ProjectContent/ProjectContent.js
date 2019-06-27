import React from "react";
import { H1, H2 } from "../Typography/Typography";
import css from "./projectcontent.module.css";

const ProjectContent = ({ content }) => {
  const { title, subtitle, image } = content.frontmatter;
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <H1 className={css.title}>{title}</H1>
        <H2 className={css.subtitle}>{subtitle}</H2>
        <img src={image} alt={subtitle} className={css.image} />
      </header>
      <article
        className={css.container}
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </div>
  );
};

export default ProjectContent;
