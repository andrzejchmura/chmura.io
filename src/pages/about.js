import React from "react";
import Button from "../components/Button/Button";

import css from "./about.module.css";

const AboutPage = props => {
  return (
    <div className={css.container}>
      <h2>About Page</h2>
      <Button>Random text?</Button>
    </div>
  );
};

export default AboutPage;
