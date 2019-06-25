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
        path: __dirname + "/notes/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: __dirname + "/projects/"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-images",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs"
        ]
      }
    },
    "gatsby-plugin-postcss"
  ]
};
