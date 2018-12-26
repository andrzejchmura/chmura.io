import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import Drawing from "../components/Drawing/Drawing";

const AboutPage = props => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`About | Chmura.io`}
      />
      <Navigation />
      <PageHead title="About me" subtitle="Ex architect" />
      <Section>
        <Drawing />
      </Section>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
