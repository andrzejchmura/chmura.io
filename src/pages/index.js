import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import PostSummary from "../components/PostSummary/PostSummary";
import Footer from "../components/Footer/Footer";

import { theme } from "../utils/theme";

const projects = [
  {
    slug: "/project/augmenter",
    title: "Augmenter",
    desc: "Web based augmented reality app"
  },
  {
    slug: "/project/unleash",
    title: "Unleash",
    desc: "Experimental design tool",
    image: ""
  },
  {
    slug: "/project/rush-hour",
    title: "Rush Hour",
    desc: "Solver algorithm exploration",
    image: ""
  }
];

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
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
          {projects.map(project => (
            <PostSummary
              key={project.title}
              slug={project.slug}
              title={project.title}
              subtitle={project.desc}
            />
          ))}
        </Grid>
      </Section>
      <Section title="Notes">
        {posts.map(post => {
          const { frontmatter, fields } = post.node;
          return (
            <PostSummary
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
