const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/post.js`);
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                type
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const content = result.data.allMarkdownRemark.edges;

    content.forEach((record, index) => {
      if (record.node.frontmatter.type === "project") {
        createPage({
          path: record.node.fields.slug,
          component: projectTemplate,
          context: {
            slug: record.node.fields.slug
          }
        });
      } else {
        const previous =
          index === content.length - 1 ? null : content[index + 1].node;
        const next = index === 0 ? null : content[index - 1].node;

        createPage({
          path: record.node.fields.slug,
          component: postTemplate,
          context: {
            slug: record.node.fields.slug,
            previous,
            next
          }
        });
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: slug
    });

    const type = getNode(node.parent).sourceInstanceName;
    createNodeField({
      name: "type",
      node,
      value: type
    });
  }
};
