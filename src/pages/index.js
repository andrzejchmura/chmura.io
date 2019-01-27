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

import "../reset.css";
import "../variables.css";
import "../global.css";
import { theme } from "../utils/theme";

const projects = [
  {
    slug: "/project/almanax",
    title: "Almanax",
    desc: "Workout App",
    image: "/parametric.jpg"
  },
  {
    slug: "/project/unleash",
    title: "Unleash",
    desc: "Design system",
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
  console.log(theme);
  const posts = data.allMarkdownRemark.edges;
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[{ name: "description", content: "siteDescription goes here" }]}
        title={`Chmura.io`}
      />
      <div style={{ position: "absolute", top: "0", left: "0" }}>
        <div style={{ background: "red" }} onClick={theme.toggle.bind(theme)}>
          Change
        </div>
      </div>
      <Navigation />
      <Hero />
      <Section title="Projects">
        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.title}
              index={index}
              slug={project.slug}
              title={project.title}
              desc={project.desc}
              image={project.image}
            />
          ))}
        </Grid>
      </Section>
      <Section title="Writings">
        {posts.map(post => {
          const { excerpt, frontmatter } = post.node;
          return <PostSummary title={frontmatter.title} summary={excerpt} />;
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
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `;
