module.exports = {
  siteMetadata: {
    title: "Chmura.io",
    author: "Andrzej Chmura",
    description: "Personal website",
    siteUrl: "https://chmura.io"
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: __dirname + "/content/"
      }
    },
    "gatsby-transformer-remark"
  ]
};
