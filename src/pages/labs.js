import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import { theme } from "../utils/theme";

const experiments = [
  {
    index: 0,
    href: "https://codepen.io/andrzejchmura/full/JQvWmJ",
    title: "Rotonda",
    subtitle: "Floor plan animation",
    image: "/rotonda.svg"
  }
];

const LabsPage = props => {
  useEffect(() => {
    theme.dark();

    return () => theme.light();
  }, []);

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`Labs | Chmura.io`}
      />
      <Navigation />
      <PageHead title="Labs" />
      <Section>
        <Grid>
          {experiments.map(experiment => {
            const { href, title, subtitle, image, index } = experiment;
            return (
              <Card
                key={index}
                index={index}
                href={href}
                title={title}
                subtitle={subtitle}
                image={image}
              />
            );
          })}
        </Grid>
      </Section>
      <Footer />
    </React.Fragment>
  );
};

export default LabsPage;
