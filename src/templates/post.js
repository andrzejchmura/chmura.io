import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";

const PostTemplate = props => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`About | Chmura.io`}
      />
      <Navigation />
      <PageHead title="Post title" subtitle="Is this necessary?" />
      <Section>{"post content goes here"}</Section>
      <Footer />
    </React.Fragment>
  );
};

export default PostTemplate;
