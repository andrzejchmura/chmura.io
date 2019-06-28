module.exports = {
  siteMetadata: {
    title: "Chmura.io",
    author: "Andrzej Chmura",
    description: "Personal website",
    siteUrl: "https://chmura.io"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: __dirname + "/content/notes/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: __dirname + "/content/projects/"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 740
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs"
        ]
      }
    },
    "gatsby-plugin-postcss"
  ]
};
