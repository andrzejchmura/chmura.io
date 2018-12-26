import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { theme } from "../utils/theme";

const experiments = [
  {
    slug: "project/almanax",
    title: "Almanax",
    image: "/parametric.jpg"
  }
];

class LabsPage extends React.Component {
  componentDidMount() {
    theme.dark();
  }

  componentWillUnmount() {
    theme.light();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: "siteDescription goes here" }]}
          title={`Labs | Chmura.io`}
        />
        <Navigation />
        <PageHead title="Labs" subtitle="Experiments with code" />
        <Section>
          {experiments.map((project, index) => (
            <Card
              key={project.title}
              index={index}
              slug={project.slug}
              title={project.title}
              image={project.image}
            />
          ))}
        </Section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default LabsPage;
