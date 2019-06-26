import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Grid from "../components/Grid/Grid";
import ContentSummary from "../components/ContentSummary/ContentSummary";
import Footer from "../components/Footer/Footer";

import { theme } from "../utils/theme";

const IndexPage = ({ data }) => {
  const posts = data.notes.edges;
  const projects = data.projects.edges;

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`Chmura.io`}
      />
      <Navigation />
      <Hero />
      <Section title="Projects">
        <Grid>
          {projects.map(project => {
            const { frontmatter, fields } = project.node;
            return (
              <ContentSummary
                key={fields.slug}
                slug={fields.slug}
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
              />
            );
          })}
        </Grid>
      </Section>
      <Section title="Notes">
        {posts.map(post => {
          const { frontmatter, fields } = post.node;
          return (
            <ContentSummary
              key={fields.slug}
              slug={fields.slug}
              title={frontmatter.title}
              subtitle={frontmatter.subtitle}
              date={frontmatter.date}
            />
          );
        })}
      </Section>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    notes: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "notes" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
