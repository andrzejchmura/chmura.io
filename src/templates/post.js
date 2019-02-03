import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import PostContent from "../components/PostContent/PostContent";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import { Link } from "../components/Typography/Typography";

const PostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  const { previous, next } = pageContext;
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`${post.frontmatter.title} | Chmura.io`}
      />
      <Navigation />
      <Section>
        <Link to="/blog">← Back to blog</Link>
      </Section>
      <PostContent post={post} />
      <Section>
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
      </Section>

      <Footer />
    </React.Fragment>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
