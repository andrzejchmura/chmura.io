import React from "react";
import { H1, H2, Link } from "../Typography/Typography";
import css from "./hero.module.css";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.backdrop}>
          <H1>Andrzej Chmura</H1>
          <H2>
            Currently working on web based mobile
            <strong> augmented reality </strong>experiences.
          </H2>
          <a href="https://github.com/andrzejchmura" className={css.cta}>
            GitHub
          </a>
          <a href="mailto:andrzej@chmura.io" className={css.cta}>
            Get in touch ->
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
