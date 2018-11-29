import React from "react";
import { Link } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

import "../reset.css";
import "../variables.css";
import "../global.css";

const routes = ["about", "labs", "writings"];

const projects = [
  { title: "Almanax", desc: "Workout App", image: "" },
  { title: "Unleash", desc: "Design system", image: "" },
  { title: "Rush Hour", desc: "Solver algorithm exploration", image: "" }
];

const IndexPage = props => {
  return (
    <React.Fragment>
      <Navigation title={"chmura.io"} routes={routes} />
      <Hero />
      <Section title="Projects">
        {projects.map(project => (
          <Card
            key={project.title}
            title={project.title}
            desc={project.desc}
            image={project.image}
          />
        ))}
      </Section>
      <Section title="Writings">
        <Card title="First" />
        <Card title="Second" />
      </Section>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
