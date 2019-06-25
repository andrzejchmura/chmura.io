import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import PostContent from "../components/PostContent/PostContent";
import PostFooter from "../components/PostFooter/PostFooter";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import { Link } from "../components/Typography/Typography";

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.markdownRemark;

  const { previous, next } = pageContext;
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`${project.frontmatter.title} | Chmura.io`}
      />
      <Navigation />
      <Section>
        <Link to="/blog">{"<- Back to projects"}</Link>
      </Section>
      <PostContent post={project} />
      <Section>
        <PostFooter>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </PostFooter>
      </Section>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
