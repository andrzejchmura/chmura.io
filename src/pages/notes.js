import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import PageHead from "../components/Pagehead/Pagehead";
import Section from "../components/Section/Section";
import ContentSummary from "../components/ContentSummary/ContentSummary";
import Footer from "../components/Footer/Footer";

const NotesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`Notes | Chmura.io`}
      />
      <Navigation />
      <PageHead title="Notes" />
      <Section>
        {posts.map(post => {
          const { excerpt, frontmatter, fields } = post.node;
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

export default NotesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "notes" } } }
    ) {
      edges {
        node {
          excerpt
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
