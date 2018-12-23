import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
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
  {
    slug: "project/almanax",
    title: "Almanax",
    desc: "Workout App",
    image: "/parametric.jpg"
  },
  {
    slug: "project/unleash",
    title: "Unleash",
    desc: "Design system",
    image: ""
  },
  {
    slug: "project/rush-hour",
    title: "Rush Hour",
    desc: "Solver algorithm exploration",
    image: ""
  }
];

const IndexPage = props => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`Chmura.io`}
      />
      <Navigation title={"chmura.io"} routes={routes} />
      <Hero />
      <Section title="Projects">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            index={index}
            slug={project.slug}
            title={project.title}
            desc={project.desc}
            image={project.image}
          />
        ))}
      </Section>
      <Section title="Writings">
        {/* <Card title="First" /> */}
        {/* <Card title="Second" /> */}
      </Section>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
