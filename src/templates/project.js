import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import ProjectContent from "../components/ProjectContent/ProjectContent";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import { Link } from "../components/Typography/Typography";

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark;

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[
          { name: "description", content: `${project.frontmatter.subtitle}` }
        ]}
        title={`${project.frontmatter.title} | chmura.io`}
      />
      <Navigation />
      <Section>
        <Link to="/notes">{"<- Back to projects"}</Link>
      </Section>
      <ProjectContent content={project} />
      <Footer />
    </React.Fragment>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
