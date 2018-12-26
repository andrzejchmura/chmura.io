import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";

const WritingsPage = props => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`Writings | Chmura.io`}
      />
      <Navigation />
      <PageHead title="Writings" subtitle="Ramblings about code" />
      <Section />
      <Footer />
    </React.Fragment>
  );
};

export default WritingsPage;
