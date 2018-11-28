import React from "react";
import { Link } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

import "../reset.css";
import "../variables.css";

const routes = ["about", "labs", "writings"];

const IndexPage = props => {
  return (
    <React.Fragment>
      <Navigation title={"chmura.io"} routes={routes} />
      <Hero />
      <Section title="Projects">
        <Card title="First" />
        <Card title="Second" />
      </Section>
      <Section title="Writings">
        <Card title="First" />
        <Card title="Second" />
      </Section>
    </React.Fragment>
  );
};

export default IndexPage;
