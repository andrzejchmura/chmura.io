import React from "react";
import { Link } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";

import "../reset.css";
import "../variables.css";

const routes = ["about", "labs", "writings"];

const IndexPage = props => {
  return (
    <React.Fragment>
      <Navigation title={"chmura.io"} routes={routes} />
      <Hero />
    </React.Fragment>
  );
};

export default IndexPage;
