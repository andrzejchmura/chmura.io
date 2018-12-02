import React from "react";
import { H1, H2 } from "../Typography/Typography";
import css from "./hero.module.css";

const Hero = props => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.backdrop}>
          <H1>Hey there! I’m a Polish JavaScript developer.</H1>
          <H2>
            Currently working on web based mobile
            <strong> augmented reality </strong>experiences.
          </H2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
