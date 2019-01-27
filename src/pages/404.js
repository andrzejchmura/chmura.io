import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Footer from "../components/Footer/Footer";

const NotFoundPage = props => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`404: Not found`}
      />
      <Navigation />
      <PageHead title="Not found" subtitle="Sorry there is nothing here" />
      <Footer />
    </React.Fragment>
  );
};

export default NotFoundPage;
