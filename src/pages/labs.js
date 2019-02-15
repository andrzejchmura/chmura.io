import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import { theme } from "../utils/theme";

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
        <PageHead title="Labs" />
        <Section>
          <h3 style={{ color: "#fff" }}>Currently under development</h3>
        </Section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default LabsPage;
